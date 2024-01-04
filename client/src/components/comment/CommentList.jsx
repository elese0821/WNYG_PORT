import React, { useEffect, useState } from 'react'
import moment from "moment";
import axios from 'axios';


const CommentList = ({ postList = [], scroll, loadPosts }) => {
    const [content, setContent] = useState('')

    const SetTime = (createdAt, updatedAt) => {
        if (createdAt !== updatedAt) {
            return moment(updatedAt).format("yy.MM.DD hh:mm") + " (수정됨)";
        } else {
            return moment(createdAt).format("yy.MM.DD hh:mm");
        }
    }

    useEffect(() => {
        if (postList.length > 0) {
            scroll();
        }
    }, [postList, scroll]);

    const deleteEvent = (postNum) => {
        let body = {
            postNum: postNum,
        }
        axios.post("/api/post/delete", body)
            .then((res) => {
                if (res.data.success) {
                    alert("댓글이 삭제되었습니다.");
                } else {
                    alert("error");
                };
                loadPosts();
            })
            .catch((error) => {
                console.error("삭제", error);
                alert("에러가 발생했습니다.");
            });
    }

    const modifyEvent = (postNum, content) => {
        let body = {
            postNum: postNum,
            content: content,
        }
        axios.post("/api/post/modify", body)
            .then((res) => {
                if (res.data.success) {
                    alert("댓글이 수정되었습니다.");
                    loadPosts();
                } else {
                    alert("error");
                }
            })
            .catch((error) => {
                console.error("수정", error);
                alert("에러가 발생했습니다.");
            });
    }
    return (
        <div className='commentList'>
            {postList.length > 0 ? (
                postList.map((post, key) => (
                    <div className='list' key={key}>
                        <div className="comment_inner">
                            <div className='desc'>{post.content}</div>
                        </div>
                        <div className='date'>{SetTime(post.createdAt, post.updatedAt)}</div>
                        <div className='listModal'>
                            <input className='password' />
                            <input
                                type="text"
                                id='content'
                                defaultValue={post.content || ''}
                                onChange={(e) => setContent(e.target.value)}
                            />
                            <button className='modify' onClick={() => modifyEvent(post.postNum, content)}>수정</button>
                            <button className='delete' onClick={() => deleteEvent(post.postNum)}>삭제</button>
                        </div>
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
