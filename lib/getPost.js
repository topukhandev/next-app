export default async function getPost(id) {
    
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    
    if(!result.ok){
        throw new error("There was an error")
    }
    return result.json();
}