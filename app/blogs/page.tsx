import Link from "next/link";

export default function blogs() {
    const blogs = [
        {
            id: 1,
            title: "First Blog",
            date: "2022-01-01",
            content: "This is the first blog",
            author: "John Doe",
        },
        {
            id: 2,
            title: "Second Blog",
            date: "2022-02-01",
            content: "This is the second blog",
            author: "Jane Smith",
        },
        {
            id: 3,
            title: "Third Blog",
            date: "2022-03-01",
            content: "This is the third blog",
            author: "Bob Johnson",
        },
    ];

    return (
        <main className="mt-5 p-5 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold">Blogs</h1>
      <ul className="mt-7">
        {blogs.map((blog) => (
          <li
            className="mb-3 p-3 bg-gray-800 rounded hover:bg-gray-700 transition-colors duration-300 "
            key={blog.id}
          >
            <Link href={`/blogs/${blog.id}`}>
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
    );
}
