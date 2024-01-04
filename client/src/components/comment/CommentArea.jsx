import React, { useState, useEffect } from 'react'
import CommentList from './CommentList'
import CommentWrite from './CommentWrite'
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const CommentArea = () => {
    const [postList, setPostList] = useState([]);
    const location = useLocation();

    const loadPosts = () => {
        const path = location.pathname.slice(1);
        axios.post("/api/post/list", { path: path })
            .then((response) => {
                if (response.data.success) {
                    setPostList(response.data.postList.reverse());
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        loadPosts();
    }, [location.pathname]);

    const scroll = () => {
        const commentListElements = document.querySelectorAll('.commentList');
        commentListElements.forEach(element => {
            element.scrollTop = element.scrollHeight;
        });
    }

    return (
        <div className='commentdesc'>
            <CommentList postList={postList} scroll={scroll} loadPosts={loadPosts} />
            <CommentWrite loadPosts={loadPosts} />
        </div>
    )
}

export default CommentArea

