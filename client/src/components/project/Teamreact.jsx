import React from 'react';
import CommentArea from '../comment/CommentArea';
import Comment from '../comment/Comment';
import { FaCommentAlt } from "react-icons/fa";
import useNolink from '../../hook/useNolink';

const Teamreact = () => {
    const noLink = useNolink();
    return (
        <div id='section' className='project'>
            <Comment />
            <div className="textWrap-tit">
                <div className="title-text">
                    <h1 text-split="" className="LoadingText">
                        PETPAR
                    </h1>
                </div>
            </div>

            <div className="main_grid">

                <div className="item">
                    <div className="split_text_clip">
                        <div text-split="" className="text-reg">PETPAR</div>
                        <div text-split="" className="text-reg">PETPAR</div>
                    </div>
                    <div className="item__bg"></div>
                </div>

                <div className="exp">
                    <div className="split_text_clip">
                        <p text-split="" className="text-reg exp_txt">REACT와 NODE.JS를 이용해 만든 사이트입니다.(작업중)</p>
                    </div>
                </div>

                <div className="item">
                    <div className="item__bg"></div>
                    <div className="pj05_img photo"></div>
                </div>

                <div className="item desc_01">
                    <div className="split_text_clip">
                        <p text-split="" className="text-reg">INTRODUCE</p>
                    </div>
                    <p className="item_desc">
                       풀스택 팀 프로젝트입니다.
                    </p>
                    <div className="item__bg"></div>
                </div>

                <div className="item desc_02 comment__item">
                    <div className="split_text_clip">
                        <p text-split="" className="text-reg">COMMENTS</p>
                    </div>
                    <CommentArea />
                    <a href='' onClick={noLink} className="comment_icon popup__open">
                        <FaCommentAlt size={16} />
                    </a>
                    <div className="item__bg"></div>
                </div>


                <div className="item">
                    <div className="split_text_clip">
                        <p text-split="" className="text-reg">GITHUB</p>
                        <p text-split="" className="text-reg">GITHUB</p>
                    </div>
                    <a href='https://github.com/chfhr22/petpar' target='_blank' className="item__bg hover_effect"></a>
                </div>

                <div className="item">
                    <div className="split_text_clip">
                        <p text-split="" className="text-reg">VIEW</p>
                        <p text-split="" className="text-reg">VIEW</p>
                    </div>
                    <a href='' target='_blank' className="item__bg hover_effect"></a>
                </div>

                <div className="item">
                    <div className="split_text_clip">
                        <span text-split="" className="text-reg">
                            REPLY
                        </span>
                        <span text-split="" className="text-reg">
                            REPLY
                        </span>
                    </div>
                    <a href='' className="item__bg reply" onClick={noLink}></a>
                </div>

                <div className='item'>
                    <div className="split_text_clip">
                        <span text-split="" className="text-reg">
                            CLOSE
                        </span>
                        <span text-split="" className="text-reg">
                            CLOSE
                        </span>
                    </div>
                    <a href='' className="item__bg close" onClick={noLink}></a>
                </div>

            </div>
        </div>
    )
}

export default Teamreact