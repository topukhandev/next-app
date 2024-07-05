import getPost from "@/lib/getPost";

export default async function post({params}) {
    const {id} = params;
    const post = await getPost(id);
    console.log(post)
    return (
        <div className='mt-5 max-w-2xl p-4 bg-white shadow-lg rounded-lg'>
            <p className='mb-2 text-lg font-semibold text-gray-800'><span className='font-bold text-gray-600'>ID:</span> {post.id}</p>
            <p className='mb-2 text-lg font-semibold text-gray-800'><span className='font-bold text-gray-600'>Title:</span> {post.title}</p>
            <p className='text-gray-700'><span className='font-bold text-gray-600'>Body:</span> {post.body}</p>
        </div>
    )
}
