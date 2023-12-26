import React, { useState, useEffect } from 'react'
import moment from "moment";
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const CommentList = () => {
    const [postList, setPostList] = useState([]);
    const location = useLocation();

    useEffect(() => {
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
    }, [postList, location]);

    useEffect(() => {
        const commentListElement = document.querySelector('.commentList');

        commentListElement.scrollTop = commentListElement.scrollHeight;
    }, [postList.length]);

    const SetTime = (createdAt, updatedAt) => {
        if (createdAt !== updatedAt) {
            return moment(updatedAt).format("MM Do, hh:mm") + " (수정됨)";
        } else {
            return moment(createdAt).format("MM Do, hh:mm");
        }
    }

    return (
        <div className='commentList'>
            {postList.length > 0 ? (
                postList.map((post, key) => (
                    <div className='list' key={key}>
                        <div className='desc'>{post.content}</div>
                        <div>{SetTime(post.createdAt, post.updatedAt)}</div>
                    </div>
                ))
            ) : (
                <div className="list noComment">댓글이 없습니다.😥
                </div>
            )}
        </div>
    )
}

export default CommentList;
