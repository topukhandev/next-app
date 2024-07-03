"use client"

export default function Button() {
    return (
        <button
            onClick={() => console.log("clicked")}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
            Explore Mission
        </button>
    );
}
