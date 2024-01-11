import React, { useEffect, useState } from 'react'
import moment from "moment";
import axios from 'axios';
import { motion } from 'framer-motion'
import { RiMoreFill } from "react-icons/ri";

const CommentList = ({ postList = [], scroll, loadPosts }) => {
    const [content, setContent] = useState('');
    const [Mpassword, setMPassword] = useState('');
    const [hoverStates, setHoverStates] = useState(postList.map(() => false));
    const [passState, setPassState] = useState({});


    const SetTime = (createdAt, updatedAt) => {
        if (createdAt !== updatedAt) {
            return moment(updatedAt).format("yy.MM.DD hh:mm") + " (수정됨)";
        } else {
            return moment(createdAt).format("yy.MM.DD hh:mm");
        };
    };

    useEffect(() => {
        if (postList.length > 0) {
            scroll();
        }
    }, [postList, scroll]);

    const deleteEvent = (postNum, password) => {
        if (Mpassword === password && Mpassword !== "") {
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
                    setMPassword('')
                    loadPosts();
                })
                .catch((error) => {
                    console.error("삭제", error);
                    alert("에러가 발생했습니다.");
                });
        } else {
            alert("비밀번호를 확인해주세요.")
        }
    }

    const modifyEvent = (postNum, password) => {
        if (content === "") {
            return alert("내용을 채워주세요!")
        }
        if (Mpassword === password && Mpassword !== "") {
            let body = {
                postNum: postNum,
                content: content,
            }
            axios.post("/api/post/modify", body)
                .then((res) => {
                    if (res.data.success) {
                        alert("댓글이 수정되었습니다.");
                        loadPosts();
                        console.log("수정")
                        setMPassword('');
                        setContent('');
                    } else {
                        alert("error");
                    }
                })
                .catch((error) => {
                    console.log("수정", error);
                    alert("에러가 발생했습니다.");
                });
        } else {
            alert("비밀번호를 확인해주세요!")
        }
    }

    const modalVariants = {
        hidden: { opacity: 0, display: "none" },
        visible: { opacity: 1, display: "flex" }
    };
    const passwordInputVariants = {
        hidden: { opacity: 0, overflow: 'hidden' },
        visible: { opacity: 1 }
    };

    const handleEditClick = (postNum) => {
        setPassState(current => ({
            ...Object.keys(current).reduce((acc, key) => {
                acc[key] = false;
                return acc;
            }, {}),
            [postNum]: true
        }));
    };

    const handleMouseEnter = (postNum) => {
        setHoverStates(current => ({ ...current, [postNum]: true }));
    };

    const handleMouseLeave = (postNum) => {
        setMPassword("");
        setHoverStates(current => ({ ...current, [postNum]: false }));
        setPassState(current => ({ ...current, [postNum]: false }));
    };
    return (
        <div className='commentList'>
            {postList.length > 0 ? (
                postList.map((post) => (
                    <div
                        className='list'
                        key={post.postNum}
                        onMouseEnter={() => { handleMouseEnter(post.postNum) }}
                        onMouseLeave={() => { handleMouseLeave(post.postNum) }}
                    >
                        <div className='commentList__inner'>
                            <div className="comment_inner">
                                {passState[post.postNum] ? (
                                    <motion.textarea
                                        initial="hidden"
                                        animate={passState ? "visible" : "hidden"}
                                        variants={passwordInputVariants}
                                        transition={{ duration: 0.3 }}
                                        className='desc'
                                        defaultValue={post.content}
                                        onChange={(e) => setContent(e.target.value)}
                                    />
                                ) : (
                                    <div className='desc'>{post.content}</div>
                                )}
                            </div>
                            <div className='name'>{post.name}</div>
                            <div className='date'>{SetTime(post.createdAt, post.updatedAt)}</div>
                        </div>
                        <motion.div
                            className='listModal'
                            variants={modalVariants}
                            initial="hidden"
                            animate={hoverStates[post.postNum] ? "visible" : "hidden"}
                            transition={{ duration: 0.5 }}
                        >
                            <form>
                                <input type="text" className='blind' autoComplete='off' />
                                <label htmlFor='password' className='blind'>댓글 비밀번호</label>
                                <motion.input
                                    autoComplete="new-password"
                                    initial="hidden"
                                    animate={passState[post.postNum] ? "visible" : "hidden"}
                                    variants={passwordInputVariants}
                                    transition={{ duration: 0.3 }}
                                    type='password'
                                    className='Modifypassword'
                                    placeholder='password'
                                    onChange={(e) => {
                                        setMPassword(e.target.value)
                                    }}
                                />
                            </form>
                            {passState[post.postNum] ? (
                                <div className='btn__wrap'>
                                    <button className='modify'
                                        onClick={() => modifyEvent(post.postNum, post.password)}
                                    >확인</button>
                                    <button className='delete' onClick={() => deleteEvent(post.postNum, post.password)}>삭제</button>
                                </div>
                            ) : (
                                <button className='more'
                                    onClick={() => handleEditClick(post.postNum)}
                                >
                                    <RiMoreFill size={20} />
                                </button>
                            )}
                        </motion.div>
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
