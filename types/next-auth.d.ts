// types/next-auth.d.ts
import "next-auth"

// Define UserRole type locally instead of importing
type UserRole = "STUDENT" | "LIBRARIAN" | "ADMIN"

declare module "next-auth" {
  interface User {
    id: string
    role?: UserRole
  }
  
  interface Session {
    user: {
      id: string
      role?: UserRole
      email: string
      name: string
    }
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    role?: UserRole
  }
}