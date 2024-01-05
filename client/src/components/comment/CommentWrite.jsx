import React, { useState } from 'react'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const CommentWrite = ({ loadPosts }) => {
    const [content, setContent] = useState("");
    const [password, setPassword] = useState("");
    const location = useLocation();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleContentChange = (event) => {
        if (content.length <= 50) {
            setContent(event.target.value);
        } else {
            alert("50자를 초과할 수 없습니다.")
        }
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const modalVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    const ShowPass = () => {
        if (content === "") {
            return alert("댓글을 작성해주세요!")
        }
        setIsSubmitting(true);
    }
    const closePass = () => {
        setIsSubmitting(false);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (content === "") {
            return alert("댓글을 작성해주세요!");
        }

        if (password === "") {
            return alert("비밀번호를 입력해주세요!(6자 이상)");
        }
        if (password.length < 6) {
            return alert("비밀번호를 확인해주세요!(6자 이상)");
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
        setIsSubmitting(false);
    }
    return (
        <form>
            <fieldset>
                <legend className="blind">글쓰기 영역</legend>
                <div>
                    <label htmlFor="content" className="required blind">글 내용</label>
                    <textarea
                        type="text"
                        className="content"
                        placeholder='댓글을 작성해주세요😊'
                        value={content}
                        onChange={handleContentChange}
                    />
                </div>
                <AnimatePresence>
                    {isSubmitting && (
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={modalVariants}
                            transition={{ duration: 0.5 }}
                            className='passwordModal'>
                            <label htmlFor="password" className="required blind">비밀번호</label>
                            <input type="password" className='password' placeholder='password' value={password}
                                onChange={handlePasswordChange}
                                autoComplete='off'
                            />
                            <button
                                type="submit"
                                onClick={(e) => onSubmit(e)}
                                className='btnStyle3'
                            >확인</button>
                            <button
                                type="button"
                                onClick={(e) => closePass(e)}
                                className='btnStyle3'
                            >취소</button>
                        </motion.div>
                    )}
                </AnimatePresence>
                <button
                    type='button'
                    onClick={(e) => ShowPass(e)}
                    className='btnStyle'
                >WRITE</button>
            </fieldset>
        </form>
    )
}

export default CommentWrite