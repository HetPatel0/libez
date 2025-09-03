'use server'
import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import React from 'react'

async function items_delete({id}:{id:string}) {


  await prisma.book.delete({where:{id:id}})
    revalidatePath('/items')
} 
export async function items_add(formdata:FormData) {
  await prisma.book.create({
    data:{
      title: formdata.get("title") as string,
      author : formdata.get("author") as string,
      genre: formdata.get("genre") as string,
      rating: formdata.get("rating") ? parseInt(formdata.get("rating") as string) : 0,
      description: formdata.get("description") as string,
      coverUrl: formdata.get("imageUrl") as string,
    }
   })
    revalidatePath('/items')
  
  // console.log("formdata",formdata.get("title"))
  // console.log("formdata",formdata.get("author"))
  // console.log("formdata",formdata.get("category"))     
  //  await prisma.book.create({
  //   // data:{
  //   //   title: formdata.get("title") as string,
  //   //   author : formdata.get("author") as string,
  //   //   genre: formdata.get("category") as string,
      
      


  //   // }
  //  })
}




export  {items_delete}