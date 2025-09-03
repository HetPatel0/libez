import prisma from "@/lib/prisma";
import Image from "next/image";

export default async function ItemPage({ params }: { params: { id: string } }) {
  const {id} =  params;

  // Fetch item by ID
  const book = await prisma.book.findUnique({
    where: { id: parseInt(id,10) },
  });

  if (!book) {
    return <div className="p-6 text-center text-red-500">❌ Item not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-6 shadow-4xl">
      <div className="w-lg  mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Image Section */}
        {book.coverUrl ? (
  <div className="relative w-full h-80">
    <img
      src={book.coverUrl || "/placeholder-book.png"}
      alt={book.title}
      
      className=" bg-blue-100 overflow-hidden object-fill size-full  " 
      
    />
  </div>
) : (
  <div className="w-full h-80 flex items-center justify-center bg-blue-100 text-blue-500 font-semibold">
    📘 No Image Available
  </div>
)}


        {/* Content Section */}
        <div className="p-6 space-y-4 ">
          <h1 className="text-4xl font-bold text-blue-700">
            {book.title}
          </h1>
          <p className="text-lg text-gray-700">
            <span className="font-semibold text-blue-600">Author:</span> {book.author}
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-semibold text-blue-600">Description:</span> {book.description}
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-semibold text-blue-600">quantity:</span> {book.totalCopies}
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-semibold text-blue-600">genre:</span> {book?.genre?.toString()}
          </p>

          <button className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md transition">
            Rent 
          </button>
        </div>
      </div>
    </div>
  );
}
