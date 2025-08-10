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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

async function page() {
  const prisma = new PrismaClient();
  const data = await prisma.item?.findMany();

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
            <Button className="mt-4 sm:mt-0 shadow-md hover:shadow-lg transition-all duration-200">
              <IconPlus className="w-4 h-4 mr-2" />
              Add New Item
            </Button>
          </div>
        </div>

        {/* Search and Filters */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    type="text"
                    placeholder="Search items..."
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex items-center space-x-2"
                >
                  <IconFilter className="w-4 h-4" />
                  <span>Filter</span>
                </Button>
                <Select>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="books">Books</SelectItem>
                    <SelectItem value="magazines">Magazines</SelectItem>
                    <SelectItem value="journals">Journals</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Items Table */}
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-medium">ID</TableHead>
                  <TableHead className="font-medium">Item Name</TableHead>
                  <TableHead className="font-medium">Author</TableHead>
                  <TableHead className="font-medium">Price</TableHead>
                  <TableHead className="font-medium">Type</TableHead>
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
                    <TableCell className="font-medium">
                      #{item?.ItemID}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-8 w-8 bg-blue-100">
                          <AvatarFallback className="bg-blue-100 text-blue-600">
                            <IconBook className="w-4 h-4" />
                          </AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                          <div className="font-medium leading-none">
                            {item?.ItemTitle}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            ISBN: {item?.ItemID || "N/A"}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-foreground">
                      {item?.ItemAuthor}
                    </TableCell>
                    <TableCell className="text-foreground">
                      Rs {item?.ItemPrice?.toString() || "0"}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className="bg-blue-100 text-blue-800 hover:bg-blue-200"
                      >
                        {item?.ItemType}
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
                        <Link href={`/items/${item?.ItemID}`}>
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
          <div className="flex items-center space-x-2">
            {/* Pagination controls can be added here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
