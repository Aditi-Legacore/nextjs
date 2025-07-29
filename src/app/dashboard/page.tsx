import { prisma } from "@/app/utils/db";
import BlogCard from "@/component/dashboard/BlogCard";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { log } from "console";
import Link from "next/link";
import { redirect } from "next/navigation";

async function getPosts() {
  const latestPosts = await prisma.blogPost.findMany({
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

  return latestPosts;
}

async function getData(userId: any) {
  const data = await prisma.blogPost.findMany({
    where : {
      id : userId
    }
  })
}

export default async function DashboardPage() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const data = await getData(user?.id)  

  if (!user) {
    return redirect("/api/auth/register");
  }

  const posts = await getPosts();

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 flex items-center justify-between">
        Dashboard
        <Link
          href="/dashboard/create"
          className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
        >
          <span className="mr-1 text-lg font-bold">+</span> Create Blog
        </Link>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.id} id={post.id} title={post.title} content={post.content} />
        ))}
      </div>
    </div>
  );
}
