import { Post } from "@/types/post";

export async function getPosts() {
	const res = await fetch("https://api.vercel.app/blog", {
		cache: "force-cache",
	});
	return await res.json();
}

export async function getPostDetails(id: string) {
	const res = await fetch(`https://api.vercel.app/blog/${id}`);
	const post: Post = await res.json();
	return post;
}

// There is no opt. query parameter in the mock API used,
// so mimicking related posts:
export async function getRelatedPosts() {
	const posts = await getPosts();
	const relatedPosts: Post[] = posts
		.sort(() => 0.5 - Math.random())
		.slice(0, 3);

	return relatedPosts;
}
