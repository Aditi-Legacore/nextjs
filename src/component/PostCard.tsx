import React from 'react';

interface PostCardProps {
  imageUrl: string;
  description: string;
  date: string;
  author: string;
}

const PostCard: React.FC<PostCardProps> = ({ imageUrl, description, date, author }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-48 object-cover" src={imageUrl} alt="Post image" />
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base mb-2">{description}</p>
        <div className="text-sm text-gray-500">
          <span>{date}</span> &nbsp;|&nbsp; <span>{author}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
