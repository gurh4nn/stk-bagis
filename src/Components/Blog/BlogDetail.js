import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BlogDetail() {
    const [blogItem, setBlogItem] = useState([]);
    
    const { id } = useParams();
    useEffect(() => {
      axios
        .get(`https://6086462fd14a870017578fbc.mockapi.io/blog/${id}`)
        .then((response) => setBlogItem(response.data));
    }, []);

    return (
        <div className="blog-detail">
            <div className="details">
            <div className="blog-title">{blogItem.title}</div>
            <img src={blogItem.img} alt="" className="blog-img" />
            <p className="blog-content"> {blogItem.content} </p>
            </div>
        </div>
    )
}

export default BlogDetail
