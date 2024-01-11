import React from 'react';
import CommentArea from '../comment/CommentArea';
import Comment from '../comment/Comment';
import { FaCommentAlt } from "react-icons/fa";
import useNolink from '../../hook/useNolink';

const Teamphp = () => {
    const noLink = useNolink();
    return (
        <div id='section' className='project'>
            <Comment />
            <div className="textWrap-tit">
                <div className="title-text">
                    <h1 text-split="" className="LoadingText">
                        SEXYBRAIN
                    </h1>
                </div>
            </div>

            <div className="main_grid">

                <div className="item">
                    <div className="split_text_clip">
                        <div text-split="" className="text-reg">SEXYBRAIN</div>
                        <div text-split="" className="text-reg">SEXYBRAIN</div>
                    </div>
                    <div className="item__bg"></div>
                </div>

                <div className="exp">
                    <div className="split_text_clip">
                        <p text-split="" className="text-reg exp_txt">PHP를 활용해 사이트를 만들었습니다.</p>
                    </div>
                </div>

                <div className="item">
                    <div className="item__bg"></div>
                    <div className="pj03_img photo"></div>
                </div>

                <div className="item desc_01">
                    <div className="split_text_clip">
                        <p text-split="" className="text-reg">INTRODUCE</p>
                    </div>
                    <p className="item_desc">
                        뇌섹남녀는 TV 프로그램 '문제적 남자'에 등장하는 다양한 문제들을 풀어볼 수 있는 웹 사이트입니다.<br />
                        이 사이트에서 사용자들은 재미있는 퀴즈를 즐기며 지적 호기심을 충족시킬 수 있습니다.
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
                    <a href='https://github.com/elese0821/php-project' target='_blank' className="item__bg hover_effect"></a>
                </div>

                <div className="item">
                    <div className="split_text_clip">
                        <p text-split="" className="text-reg">VIEW</p>
                        <p text-split="" className="text-reg">VIEW</p>
                    </div>
                    <a href='http://hoho.dothome.co.kr/project/php/home/main.php' target='_blank' className="item__bg hover_effect"></a>
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

export default Teamphp