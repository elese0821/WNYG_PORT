import React, { useEffect } from 'react'
import moment from "moment";


const CommentList = ({ postList = [], scroll }) => {

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

    return (
        <div className='commentList'>
            {postList.length > 0 ? (
                postList.map((post, key) => (
                    <div className='list' key={key}>
                        <div className="comment_inner">
                            <div className='desc'>{post.content}</div>
                        </div>
                        <div className='date'>{SetTime(post.createdAt, post.updatedAt)}</div>
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
