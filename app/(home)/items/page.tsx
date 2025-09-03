import { PrismaClient } from "@/app/generated/prisma";
import React from "react";
import {
  IconSearch,
  IconFilter,
  IconPlus,
  IconBook,
  IconEye,
} from "@tabler/icons-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import prisma from "@/lib/prisma";

async function page() {
 prisma;
  const data = await prisma.book?.findMany();

  return (
    <div className="min-h-screen bg-muted/50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <h1 className="text-3xl font-bold tracking-tight">
                Library Items
              </h1>
              <p className="text-muted-foreground">
                Browse and rent items from your library collection
              </p>
            </div>
            <Link href="/dashboard/itemform">
                 <Button   className="mt-4 sm:mt-0 shadow-md hover:shadow-lg transition-all duration-200">
              <IconPlus className="w-4 h-4 mr-2" />
              Add New Item
            </Button>
            </Link>
       
          </div>
        </div>

        {/* Search and Filters */}
        

        {/* Items Table */}
        <Card className="shadow-2xl">
          <CardContent className="p-0 min-w-full ">
            <Table> 
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-medium">Item Name</TableHead>
                  <TableHead className="font-medium">Author</TableHead>
                  <TableHead className="font-medium">Genre</TableHead>
                  <TableHead className="font-medium">rating</TableHead>
                  <TableHead className="font-medium">Status</TableHead>
                  <TableHead className="font-medium">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((item, idx: number) => (
                  <TableRow
                    key={idx}
                    className="hover:bg-muted/50 transition-colors duration-200"
                  >
                    {/* <TableCell className="font-medium">
                      #{item?.id}
                    </TableCell> */}
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-8 w-8 bg-blue-100">
                          <AvatarFallback className="bg-blue-100 text-blue-600">
                            <IconBook className="w-4 h-4" />
                          </AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                          <div className="font-medium leading-none">
                            {item?.title}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            ISBN: {item?.id || "N/A"}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-foreground">
                      {item?.author}
                    </TableCell>
                    <TableCell className="text-foreground">
                       {item?.genre?.toString() || "0"}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className="bg-blue-100 text-blue-800 hover:bg-blue-200"
                      >
                        {item?.rating}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className="bg-green-100 text-green-800 hover:bg-green-200"
                      >
                        Available
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0 border-primary/20 bg-blue-50 hover:bg-blue-100"
                        asChild
                      >
                        <Link href={`/items/${item?.id}`}>
                          <IconEye className="w-4 h-4 text-blue-600" />
                        </Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Pagination Section - Placeholder for future implementation */}
        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Showing {data.length} items
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default page;
