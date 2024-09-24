import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const BlogAPI = () => {

const [post, setPost] = useState([]);
const [loading, setLoading] = useState(false);


const handleLoadPosts = async () => {
    setLoading(true)
    const resPosts = await fetch("https://run.mocky.io/v3/b20b7d1e-8c8b-4703-9178-7449636ee2e8");
    const post = await resPosts.json();
    setPost(post);
    setLoading(false)
}

useEffect(() => {
    console.log("hi");
    handleLoadPosts();
},[])

    return(
        <div className="BlogAPI">
        <h2>BlogAPI</h2>
        <ul>
        {loading && <div className="spinner-border"></div>}
        {post.map((post) => {
            return(
            <div key={post.id}>
             <li key={post.id}>{post.title}</li>
             <li>{post.body}</li>
             </div>
            )
        })}
        </ul>
        </div>
    )
}
export default BlogAPI;