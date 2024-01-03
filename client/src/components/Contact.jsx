
import React from 'react';
import useNolink from '../hook/useNolink';
import CommentArea from './comment/CommentArea';
import { FaCommentAlt } from 'react-icons/fa';
import Comment from './comment/Comment';

const Contact = () => {
    const noLink = useNolink();

    return (
        <div id='section' className='contact'>
            <Comment />
            <div className="textWrap-tit">
                <div className="title-text">
                    <h1 text-split="" className="LoadingText">
                        Contact me
                    </h1>
                </div>
            </div>

            <div className="main_grid">

                <div className="item">
                    <div className="split_text_clip">
                        <div text-split="" className="text-reg">CONTACT ME</div>
                        <div text-split="" className="text-reg">CONTACT ME</div>
                    </div>
                    <div className="item__bg"></div>
                </div>

                <div className="exp">
                    <div className="split_text_clip">
                        <p text-split="" className="text-reg exp_txt">연락해주세요!😁</p>
                    </div>
                </div>

                <div className="item">
                    <div className="item__bg"></div>
                    <div className="contact_img01 photo"></div>
                </div>

                <div className="item">
                    <div className="item__bg"></div>
                    <div className="contact_img02 photo"></div>
                </div>

                <div className="item">
                    <div className="item__bg"></div>
                    <div className="contact_img03 photo"></div>
                </div>

                <div className="item">
                    <div className="item__bg"></div>
                    <div className="contact_img04 photo"></div>
                </div>

                <div className="item">
                    <div className="item__bg"></div>
                    <div className="contact_img05 photo"></div>
                </div>

                <div className="item">
                    <div className="item__bg"></div>
                    <div className="contact_img06 photo"></div>
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

                <div className="item contact_link">
                    <div className="split_text_clip">
                        <div text-split="" className="text-reg">EMAIL</div>
                        <div text-split="" className="text-reg">EMAIL</div>
                    </div>
                    <a href='mailto:elese0821@naver.com' className="item__bg hover_effect"></a>
                </div>

                <div className="item contact_link">
                    <div className="split_text_clip">
                        <div text-split="" className="text-reg">GITHUB</div>
                        <div text-split="" className="text-reg">GITHUB</div>
                    </div>
                    <a href='https://github.com/elese0821' target='_blank' className="item__bg hover_effect"></a>
                </div>

                <div className="item">
                    <div className="split_text_clip">
                        <span text-split="" className="text-reg">
                            COMMENTS
                        </span>
                        <span text-split="" className="text-reg">
                            COMMENTS
                        </span>
                    </div>
                    <div className="item__bg reply"></div>
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
        </div >
    )
}

export default Contact