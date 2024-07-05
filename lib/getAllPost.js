export default async function getAllPosts() {
    try {
        const result = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
        
        if (!result.ok) {
            throw new Error(`HTTP error! status: ${result.status}`);
        }

        return result.json();
    } catch (error) {
        if (error instanceof TypeError) {
            // Network error
            console.error("Network error:", error.message);
        } else {
            // HTTP error
            console.error("Fetch failed:", error.message);
        }
        throw new Error("Failed to fetch posts");
    }
}
