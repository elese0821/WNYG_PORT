import $ from 'jquery';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import useNolink from '../hook/useNolink';
import CommentArea from './comment/CommentArea';
import { FaCommentAlt } from 'react-icons/fa';
import Comment from './comment/Comment';

const Contact = () => {
    const noLink = useNolink();
    useEffect(() => {
        $(".link div").on("mouseover", function () {
            const index = $(this).index(); // 현재 요소의 인덱스를 계산
            linkMouseOver(index); // 인덱스를 함수에 전달
        });

        function linkMouseOver(index) {
            const a = $(".link div").eq(index);

            a.find(".char").each(function (i) {
                gsap.fromTo(this, {
                    yPercent: 0,
                }, {
                    yPercent: -165,
                    stagger: { amount: 0.4 },
                    delay: i * 0.05,
                    overwrite: true,
                });
            });
        }

        $(".link div").on("mouseout", function () {
            const index = $(this).index();
            linkMouseOut(index);
        });

        function linkMouseOut(index) {
            const a = $(".link div").eq(index);

            a.find(".char").each(function () {
                gsap.set(this, {
                    yPercent: 0,
                    duration: 0.6,
                    ease: "power4.inOut",
                    overwrite: true
                });
            });
        }

        // ———— Staggered text links  
        const staggerLinks = document.querySelectorAll("[stagger-link]");
        staggerLinks.forEach((link) => {
            link.addEventListener("mouseenter", function () {
                const staggerText = this.querySelectorAll("[text-split] .char");
                gsap.to(staggerText, {
                    yPercent: -100,
                    duration: 0.6,
                    ease: "power4.inOut",
                    stagger: { amount: 0.2 },
                    delay: 0,
                    overwrite: true
                });
                if (this.querySelector(".stagger-link__descender")) {
                    gsap.fromTo(
                        this.querySelector(".stagger-link__descender"),
                        { scaleY: 0 },
                        {
                            scaleY: 1,
                            duration: 0.2,
                            ease: "power4.inOut",
                            delay: 0.2,
                            overwrite: true
                        }
                    );
                }

                $(this).siblings().css("opacity", "0.5");
            });
            link.addEventListener("mouseleave", function () {
                const staggerText = this.querySelectorAll("[text-split] .char");
                gsap.set(staggerText, {
                    yPercent: 0,
                    overwrite: true
                });
                if (this.querySelector(".stagger-link__descender")) {
                    gsap.fromTo(
                        this.querySelector(".stagger-link__descender"),
                        { scaleY: 1 },
                        {
                            scaleY: 0,
                            duration: 0.4,
                            ease: "power4.inOut",
                            overwrite: true
                        }
                    );
                }

                $(this).siblings().css("opacity", "1");
            });
        });
    }, []);

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

                {/* <div className='item contLinkWrap'>
                    <a href="mailto:elese0821@naver.com">elese0821@naver.com</a>
                    <div className="contact_links">
                        <a stagger-link="" href="#" target='black' className='contactLink'>
                            <div stagger="top" text-split="" className='stagger-contactLink'>
                                E-mail
                            </div>
                        </a>
                        <a stagger-link="" href="#" target='black' className='contactLink'>
                            <div className="stagger-link__descender"></div>
                            <div stagger="top" text-split="" className='stagger-contactLink'>Kakao</div>
                        </a>
                        <a stagger-link="" href="#" target='black' className='contactLink'>
                            <div stagger="top" text-split="" className='stagger-contactLink'>Github</div>
                        </a>
                    </div>
                    <div className="item__bg"></div>
                </div> */}

                <div className="item">
                    <div className="split_text_clip">
                        <div text-split="" className="text-reg">EMAIL</div>
                        <div text-split="" className="text-reg">EMAIL</div>
                    </div>
                    <a href='' className="item__bg hover_effect" onClick={noLink}></a>
                </div>

                <div className="item">
                    <div className="split_text_clip">
                        <div text-split="" className="text-reg">KAKAO</div>
                        <div text-split="" className="text-reg">KAKAO</div>
                    </div>
                    <a href='' className="item__bg hover_effect" onClick={noLink}></a>
                </div>

                <div className="item">
                    <div className="split_text_clip">
                        <div text-split="" className="text-reg">GITHUB</div>
                        <div text-split="" className="text-reg">GITHUB</div>
                    </div>
                    <a href='' className="item__bg hover_effect" onClick={noLink}></a>
                </div>

                <div className='close item'>
                    <div className="split_text_clip">
                        <span text-split="" className="text-reg">
                            CLOSE
                        </span>
                        <span text-split="" className="text-reg">
                            CLOSE
                        </span>
                    </div>
                    <a href='' className="item__bg" onClick={noLink}></a>
                </div>
            </div>
        </div >
    )
}

export default Contact