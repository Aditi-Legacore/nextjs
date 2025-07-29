import PostCard from '@/component/PostCard';

import { prisma } from "./utils/db";

async function getPosts() {
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

  return latestPosts;
}


export default async function Home() {
  var latestPosts = await getPosts()
  return (
    <div className="font-sans p-8 pb-20 sm:p-20 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Latest 3 Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {latestPosts.map((post: any, index: any) => (
          <PostCard
            key={post.id}
            imageUrl={post.imageurl}
            description={post.content}
            date={new Date(post.createdAt).toLocaleDateString()}
            author={post.authorname}
          />
        ))}
      </div>
    </div>
  );
}
