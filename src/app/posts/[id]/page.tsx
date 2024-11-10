import Link from "next/link";
import { getPostDetails, getPosts, getRelatedPosts } from "@/lib/api";
import { notFound } from "next/navigation";
import { Post } from "@/types/post";

export async function generateStaticParams() {
	const posts: Post[] = await getPosts();

	console.log("generateStaticParams() for detail page.");

	return posts.map((post) => ({
		id: post.id.toString(),
	}));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
	const post = await getPostDetails(params.id);

	return {
		title: `${post.title} | Blog App `,
		description: post?.content?.slice(0, 200),
	};
}

export default async function PostDetailsPage({
	params,
}: {
	params: { id: string; category: string };
}) {
	const post = await getPostDetails(params.id);

	if (post.error) {
		notFound();
	}

	// 4) There is no equivalent function
	// for getStaticProps OR getServerSideProps (only in pages router)
	// in app router. Therefore server action is used instead.
	const relatedPosts = await getRelatedPosts();

	return (
		<div className="max-w-2xl mx-auto py-8 px-4">
			<Link href="/posts" className="hover:underline">
				{"< All Posts"}
			</Link>

			<div className="my-6">
				<h1 className="text-3xl font-semibold mb-4">Post Details</h1>
				<div className="w-[120px] my-4">
					<div className="text-sm text-center rounded-md bg-slate-800 py-0.5 px-2.5 border border-transparent w-[120px]">
						{post.category}
					</div>
				</div>
				<h2 className="text-xl font-semibold mb-2">{post.title}</h2>
				<p className="text-gray-400 mb-6">{post.content}</p>
			</div>

			<div className="w-full">
				<h3 className="text-xl font-semibold mt-10 mb-4">Related Posts</h3>

				<ul className="space-x-3 flex flex-row">
					{relatedPosts.map((post) => (
						<Link
							key={post.id}
							href={`/posts/${post.id}`}
							className="border border-gray-200 p-2 w-1/3 h-max-[200px] rounded hover:bg-gray-600"
						>
							<li className="">
								<h5 className="text-lg font-medium">{post.title}</h5>
							</li>
						</Link>
					))}
				</ul>
			</div>
		</div>
	);
}
