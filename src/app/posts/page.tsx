import PostList from "@/components/PostList";
import { getPosts } from "@/lib/api";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Post | Post App",
	description: "Post List",
};

export default async function PostsPage() {
	const posts = await getPosts();

	console.log("Server Action: getPosts");

	return <PostList posts={posts} />;
}
