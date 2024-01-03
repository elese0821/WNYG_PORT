import React, { useState } from 'react'
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const CommentWrite = ({ loadPosts }) => {
    const [content, setContent] = useState("");
    const [password, setPassword] = useState("");
    const location = useLocation();

    const handleContentChange = (event) => {
        if (content.length <= 100) {
            setContent(event.target.value);
        } else {
            alert("100자를 초과할 수 없습니다.")
        }
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault();

        if (content === "") {
            return alert("내용을 채워주세요!");
        }

        let body = {
            password: password,
            content: content,
            cate: location.pathname.slice(1),
        }

        axios.post("/api/post/write", body)
            .then((res) => {
                if (res.data.success) {
                    alert("글 작성이 완료되었습니다.");
                    setPassword("")
                    setContent("");
                    loadPosts();
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
                <div>
                    <label htmlFor="password" className="required blind">비밀번호</label>
                    <input type="password" id='password' placeholder='password' value={password}
                        onChange={handlePasswordChange} />
                </div>
                <button
                    type="submit"
                    onClick={(e) => onSubmit(e)}
                    className='btnStyle'
                >WRITE</button>
            </fieldset>
        </form>
    )
}

export default CommentWrite