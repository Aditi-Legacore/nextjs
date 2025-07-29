"use server";

import { redirect } from "next/navigation";
import { prisma } from "./src/app/utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function handleSubmission(formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  
  const title = formData.get("title")?.toString() || "";
  const content = formData.get("content")?.toString() || "";
  const imageurl = formData.get("imageurl")?.toString() || "";
  const authorid = user?.id || "";
  const authorname = user?.given_name || "";
  const authorimage = user?.picture || "";

  await prisma.blogPost.create({
    data: {
      title,
      content,
      imageurl,
      authorid,
      authorname,
      authorimage,
    },
  });

  console.log("Blog post saved:", { title, content, imageurl, authorid, authorname, authorimage });

  return redirect("/dashboard")
}
