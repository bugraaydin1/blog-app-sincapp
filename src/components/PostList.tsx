import PostFilter from "./PostFilter";
import { Post } from "@/types/post";

export default function PostList({ posts }: { posts: Post[] }) {
	console.log("PostList rendered!");

	return (
		<div className="max-w-2xl mx-auto py-8 px-4">
			<h1 className="text-3xl font-semibold mb-4">Post List</h1>
			<PostFilter posts={posts} />
		</div>
	);
}
