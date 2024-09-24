import React from "react";
import Button from "../Button/Button";
import { useState } from "react";
import POSTS from "./../../POSTS.json"
import { useEffect } from "react";

const Blog = () => {

    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const handleShowPosts = () => {
        setLoading(true);

        setTimeout(() => {
            setPost(POSTS);
            setLoading(false);
          }, "3000");

    }


    return(
        <div className="Blog container">
        <h2>Blogs</h2>
        
        <Button handleClick={handleShowPosts} data={"show posts"} />
        {loading && <div className="spinner-border"></div>}

        <div className="row mt-4">      
        {post.length == 0 && <div>no post</div>}
        {post.map((post) => {
            return(
                <div className="col-md-4" key={post.id}>
                <div>{post.title}</div>
                <div>{post.body}</div>
                </div> 
            )
        })}
        </div>

        </div>
    )
}
export default Blog;