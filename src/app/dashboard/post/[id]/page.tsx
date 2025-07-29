import { prisma } from "@/app/utils/db";
import { notFound } from "next/navigation";
import BackButton from "../../../../component/general/BackButton";

interface PostPageProps {
  params: {
    id: string;
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await prisma.blogPost.findUnique({
    where: { id: params.id },
  });

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded shadow">
      <BackButton />
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      {post.imageurl && (
        <img
          src={post.imageurl}
          alt={post.title}
          className="w-full h-64 object-cover rounded mb-6"
        />
      )}
      <p className="text-gray-700 mb-6 whitespace-pre-line">{post.content}</p>
      <div className="flex items-center space-x-4">
        {post.authorimage && (
          <img
            src={post.authorimage}
            alt={post.authorname}
            className="w-12 h-12 rounded-full object-cover"
          />
        )}
        <div>
          <p className="font-semibold">{post.authorname}</p>
          <p className="text-sm text-gray-500">
            {post.createdAt.toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}
