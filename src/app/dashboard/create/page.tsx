"use client";

import React, { useState } from "react";
import { handleSubmission } from "../../../../actions";

export default function CreateBlogPage() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    imageurl: "",
    // authorid: "",
    // authorname: "",
    // authorimage: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCancel = () => {
    setFormData({
      title: "",
      content: "",
      imageurl: "",
      // authorid: "",
      // authorname: "",
      // authorimage: "",
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Create Blog</h1>
      <form action={handleSubmission} className="space-y-4">
        <div>
          <label htmlFor="title" className="block font-medium mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label htmlFor="content" className="block font-medium mb-1">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows={6}
            required
          />
        </div>

        <div>
          <label htmlFor="imageurl" className="block font-medium mb-1">
            Image URL
          </label>
          <input
            type="text"
            id="imageurl"
            name="imageurl"
            value={formData.imageurl}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        {/* <div>
          <label htmlFor="authorid" className="block font-medium mb-1">
            Author ID
          </label>
          <input
            type="text"
            id="authorid"
            name="authorid"
            value={formData.authorid}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div> */}

        {/* <div>
          <label htmlFor="authorname" className="block font-medium mb-1">
            Author Name
          </label>
          <input
            type="text"
            id="authorname"
            name="authorname"
            value={formData.authorname}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="authorimage" className="block font-medium mb-1">
            Author Image URL
          </label>
          <input
            type="text"
            id="authorimage"
            name="authorimage"
            value={formData.authorimage}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div> */}

        <div className="flex gap-4 mt-6">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Save
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="px-6 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
