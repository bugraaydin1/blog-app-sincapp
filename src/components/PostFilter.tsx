"use client";

import { useState } from "react";
import Link from "next/link";
import { Post } from "@/types/post";

export default function PostFilter({ posts }: { posts: Post[] }) {
	const [search, setSearch] = useState<string>("");

	const filteredPosts = posts.filter((post) =>
		post.title.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<div className="my-4">
			<input
				type="text"
				value={search}
				placeholder="Search posts..."
				onChange={(e) => setSearch(e.target.value)}
				className="rounded-md w-full p-2 my-4 border-2 text-gray-800 border-slate-600 focus:outline-none focus:ring-2"
			/>

			<ul className="flex flex-wrap">
				{filteredPosts.map((post) => (
					<li
						key={post.id}
						className="border border-gray-200 flex flex-col justify-between px-2 py-4 rounded-md w-1/4 h-max-[100px]"
					>
						<Link
							className="text-sm hover:underline"
							href={`/posts/${post.id}`}
						>
							{post.title}
						</Link>
						<div className="text-xs bg-slate-800 rounded-full px-2 w-[120px]">
							{post.category}
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
