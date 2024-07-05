import getAllPosts from "@/lib/getAllPost";
import Link from "next/link";

export default async function posts() {
    const posts = await getAllPosts();
    console.log(posts)
    return (
        <div className='mt-5 max-w-3xl mx-auto p-4 bg-teal-600 shadow-lg rounded-lg'>
            <h1 className='text-2xl font-bold text-gray-800 mb-6'>All Posts</h1>
            <ul className="space-y-4">
                {posts.map(post => (
                    <li key={post.id} className="p-4 bg-gray-300 rounded-md shadow-sm hover:bg-gray-200 transition duration-200">
                        <Link href={`/posts/${post.id}`}>
                            <span className="text-lg font-semibold text-gray-800 hover:underline">{post.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
