import React, { useState } from 'react'
import axios from 'axios';
import CommentList from './CommentList';
import { useLocation } from 'react-router-dom';

const Comment = () => {
    const [content, setContent] = useState("");
    const location = useLocation();

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (content === "") {
            return alert("내용을 채워주세요!");
        }

        let body = {
            content: content,
            cate: location.pathname.slice(1),
        }

        axios.post("/api/post/write", body)
            .then((resopnse) => {
                if (resopnse.data.success) {
                    alert("글 작성이 완료되었습니다.");
                    setContent("");
                } else {
                    alert("글 작성이 실패하였습니다.");
                }
            })
            .catch((error) => {
                console.error("글 작성 에러:", error);
                alert("글 작성 중 에러가 발생했습니다.");
            });
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
                                type="text"
                                id="content"
                                placeholder='댓글을 작성해주세요😊'
                                value={content}
                                onChange={handleContentChange}
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