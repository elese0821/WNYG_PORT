import React, { useState } from 'react'
import axios from 'axios';
import CommentList from './CommentList';

const Comment = () => {
    const [content, setContent] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        if (content === "") {
            return alert("내용을 채워주세요!");
        }

        let body = {
            content: content,
        }

        axios.post("/api/post/write", body)
            .then((resopnse) => {
                if (resopnse.data.success) {
                    alert("글 작성이 완료되었습니다.");
                } else {
                    alert("글 작성이 실패하였습니다.");
                }
            })
    }

    return (
        <div id='commentModal'>
            <div className="commentModal">
                <h4>COMMENTS</h4>
                <CommentList />
                <form>
                    <fieldset>
                        <legend className="blind">글쓰기 영역</legend>
                        <div>
                            <label htmlFor="content" className="required blind">글 내용</label>
                            <textarea
                                maxlength="50"
                                type="text"
                                id="content"
                                placeholder='댓글을 작성해주세요😊'
                                value={content}
                                onChange={(e) => setContent(e.currentTarget.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            onClick={(e) => onSubmit(e)}
                            className='btnStyle'
                        >WRITE</button>
                    </fieldset>
                </form>
                <button className='popupClose btnStyle'>CLOSE</button>
            </div>
        </div>
    )
}

export default Comment