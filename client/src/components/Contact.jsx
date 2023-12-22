import $ from 'jquery';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import useLoad from '../hook/useLoad'
import useSet from '../hook/useSet'
import useClose from '../hook/useClose'
import useSplitType from '../hook/useSplitType'


const Contact = () => {
    useSplitType();
    useSet()
    useLoad();
    useClose();

    useEffect(() => {
        // link hover
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
            const index = $(this).index(); // 현재 요소의 인덱스를 계산
            linkMouseOut(index); // 인덱스를 함수에 전달
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
                        this.querySelector(".stagger-link__descender"), // target 추가
                        { scaleY: 0 }, // 시작 상태
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
                        this.querySelector(".stagger-link__descender"), // target 추가
                        { scaleY: 1 }, // 시작 상태
                        {
                            scaleY: 0, // 변경된 종료 상태
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
                        <p text-split="" className="text-reg">저의 포트폴리오에 오신 것을 환영합니다.</p>
                    </div>
                </div>


                <div className='item contLinkWrap'>
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
                    <div className="item__bg"></div>
                </div>

            </div>
        </div >
    )
}

export default Contact