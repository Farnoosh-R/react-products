import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import './style.css';
import Button from "../Button/Button";

const BlogAPI = () => {

const [post, setPost] = useState([]);
const [loading, setLoading] = useState(false);
const [pageCounts, setPageCounts] = useState(0);
const [activePageNumber, setActivePageNumber] = useState(1);


const handleLoadPosts = async () => {
    setLoading(true)
    const resPosts = await fetch("https://run.mocky.io/v3/b20b7d1e-8c8b-4703-9178-7449636ee2e8");
    const post = await resPosts.json();
    setPost(post);
    setLoading(false)
}


const calculatePageCounts = () => {
    if (post.length % 3 > 0){
        return parseInt(post.length / 3 + 1)
    }
    return parseInt(post.length / 3)
}


const handleActivePage = (activepage) => {
    setActivePageNumber(activepage);
}

useEffect(() => {
    console.log("hi");
    handleLoadPosts();
},[])


useEffect(() => {
    setPageCounts(calculatePageCounts());
    console.log(pageCounts)
}, [post])





    return(
        <div className="BlogAPI">
        <h2>BlogAPI</h2>
        <ul>
        {loading && <div className="spinner-border"></div>}
        {post.slice(2 * activePageNumber,2 * (activePageNumber + 1)).map((post) => {
            return(
            <div key={post.id} className="mb-3">
             <li key={post.id}>{post.title}</li>
             <li>{post.body}</li>
             </div>
            )
        })}
        </ul>



        <div className="pagination">
        <ul>
        {new Array(pageCounts).fill(0).map((item, index) => {
            return(
                <li className={activePageNumber === (index + 1) ? 'active' : ''} key={item.id}>
                
                <Button handleClick={() => handleActivePage(index + 1)} data={(index + 1)}/>

                </li>
            )
        })}
            
            
            </ul>
        </div>

        </div>
    )
}
export default BlogAPI;