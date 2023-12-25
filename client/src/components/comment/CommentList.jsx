import React, { useState, useEffect } from 'react'
import moment from "moment";
import axios from 'axios';

const CommentList = () => {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        axios.post("/api/post/list")
            .then((response) => {
                if (response.data.success) {
                    setPostList(response.data.postList);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const SetTime = (createdAt, updatedAt) => {
        if (createdAt !== updatedAt) {
            return moment(updatedAt).format("MM Do, hh:mm") + " (수정됨)";
        } else {
            return moment(createdAt).format("MM Do, hh:mm");
        }
    }

    return (
        <div className='commentList'>
            {postList.map((post, key) => {
                return (
                    <div className='list' key={key}>
                        <div className='desc'>{post.content}</div>
                        <div>{SetTime(post.createdAt, post.updatedAt)}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default CommentList;
