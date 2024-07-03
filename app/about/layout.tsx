import Link from "next/link";

export default function aboutLayout({ children }) {
    return (
        <nav className="my-5">
            <ul className="flex gap-3 p-3 bg-gray-800 text-white rounded-lg shadow-lg">
                <li className="hover:text-yellow-500 transition-colors duration-300">
                    <Link href="/about/mission">Mission</Link>
                </li>
                <li className="hover:text-yellow-500 transition-colors duration-300">
                    <Link href="/">Go Home</Link>
                </li>
            </ul>
            {children}
        </nav>
    );
}
