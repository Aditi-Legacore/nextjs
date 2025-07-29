"use client";

import React, { useState } from "react";
import Link from "next/link";

interface BlogCardProps {
  id: string;
  title: string;
  content: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ id, title, content }) => {
  const [showFull, setShowFull] = useState(false);

  const shortDescription =
    content.length > 50 ? content.substring(0, 50) + "..." : content;

  return (
    <div className="border rounded shadow p-4 bg-white cursor-pointer hover:shadow-lg transition-shadow duration-200">
      <h2 className="text-xl font-semibold mb-2">
        <Link href={`/dashboard/post/${id}`}>
          {title}
        </Link>
      </h2>
      <p className="mb-2">{showFull ? content : shortDescription}</p>
      {content.length > 50 && (
        <button
          className="text-blue-600 hover:underline"
          onClick={(e) => {
            e.preventDefault();
            setShowFull(!showFull);
          }}
        >
          {showFull ? "See less" : "See more"}
        </button>
      )}
    </div>
  );
};

export default BlogCard;
