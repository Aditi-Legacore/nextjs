import { prisma } from "../../utils/db";
import { NextResponse } from "next/server";

export async function GET() {
  const latestPosts = await prisma.blogPost.findMany({
      take: 3, 
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        title: true,
        content: true,
        imageurl: true,
        authorimage: true,
        authorname: true,
        id: true,
        createdAt: true,
      },
    });    
  
  return NextResponse.json(latestPosts);
}

