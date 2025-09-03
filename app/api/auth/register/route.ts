// app/api/auth/register/route.ts
import { NextRequest, NextResponse } from "next/server"
import prisma  from "@/lib/prisma"
import { hashPassword } from "@/lib/password"

// Define UserRole locally
type UserRole = "USER" | "ADMIN"

export async function POST(request: NextRequest) {
  try {
    const { email, password, username, role  } = await request.json()

    // Validate input
    if (!email || !password || !username) {
      return NextResponse.json(
        { error: "Email, password, and username are required" },
        { status: 400 }
      )
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters long" },
        { status: 400 }
      )
    }

    // Validate role
    const validRoles: UserRole[] = ["USER",  "ADMIN"]
    if (!validRoles.includes(role)) {
      return NextResponse.json(
        { error: "Invalid role specified" },
        { status: 400 }
      )
    }

    // Check if user already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email: email },
          { fullName: username }
        ]
      }
    })

    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email or username already exists" },
        { status: 409 }
      )
    }

    // Hash password
    const hashedPassword = await hashPassword(password)

    // Create user
    const user = await prisma.user.create({
      data: {
        email: email,
        password: hashedPassword,
        fullName: username,
        role: role,

      },
      select: {
        id: true,
        email: true,
        fullName: true,
        role: true,
      }
    })

    return NextResponse.json(
      { 
        message: "User created successfully",
        user: {
          id: user.id,
          email: user.email,
          username: user.fullName,
          role: user.role
        }
      },
      { status: 201 }
    )
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}