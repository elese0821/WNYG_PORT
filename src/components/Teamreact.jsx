import $ from 'jquery';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';
import { IoIosArrowBack } from "react-icons/io";

// import { Link } from 'react-router-dom';

const Teamreact = () => {
    useEffect(() => {
        new SplitType('[text-split]', {
            types: 'words, chars',
            tagName: 'span',
        });

        // setting 
        gsap.set(".photo_img", {
            scaleX: 0,
            opacity: 0,
        });
        gsap.set("#aboutSection", {
            display: "none",
        });
        gsap.set(".item", {
            scaleY: 0,
        });
        gsap.set($(".exp").find(".char"), {
            yPercent: 100,
        });
        gsap.set($(".item").find(".char"), {
            yPercent: 100,
        });
        gsap.set("#aboutSection", {
            display: "grid",
        });
        gsap.defaults({
            ease: "power3.inOut",
            duration: 0.8,
        });
        gsap.set(".about", {
            display: "grid",
        });

        gsap.set($(".about").find(".char"), {
            yPercent: 150,
        });

        gsap.set($(".goback").find(".char"), {
            yPercent: 100,
        });
        gsap.set($(".goback").find(".icon"), {
            yPercent: 200,
        });

        // 로드 시 
        gsap.to($(".about").find(".char"), {
            yPercent: 1,
            duration: 1,
            stagger: { amount: 0.3 },
            onComplete: function () {
                gsap.delayedCall(0, function () {
                    gsap.to(".item", {
                        scaleY: 1,
                        duration: 1,
                        stagger: { amount: 0.2 },
                    });
                    gsap.to($(".item").find(".char"), {
                        yPercent: 0,
                        delay: 0.3,
                        stagger: { amount: 0.4, from: "start" },
                    });
                    gsap.to($(".exp").find(".char"), {
                        yPercent: 0,
                        delay: 0.3,
                        stagger: { amount: 0.4, from: "start" },
                        onComplete: function () {
                            gsap.delayedCall(0, function () {
                                gsap.to(".photo_img", {
                                    duration: 1,
                                    opacity: 1,
                                    scaleX: 1,
                                });
                                gsap.to($(".goback").find(".char"), {
                                    yPercent: 1,
                                    delay: 1,
                                    stagger: { amount: 0.4, from: "start" },
                                });
                                gsap.to($(".goback").find(".icon"), {
                                    yPercent: 1,
                                    delay: 1,
                                    stagger: { amount: 0.4, from: "start" },
                                });
                            })
                        }
                    });

                });
            },
        });
        const goback = document.querySelector(".goback");

        for (let i = 0; i < goback.length; i++) () => {
            goback.addEventListener('mouseover', () => handleMouseOver(i));
            // goback.addEventListener('mouseout', () => handleMouseOut(i));
            // goback.addEventListener('click', () => handleClick(i));
        };

        const handleMouseOver = (i) => {
            const linkTextTop = $(".goback")
                .eq(i)
                .find(".text-reg")
                .find(".char");
            const linkTextBtm = $(".goback")
                .eq(i)
                .find(".text-reg")
                .find(".char");
            gsap.fromTo(linkTextTop, {
                yPercent: 0,
            }, {
                yPercent: -100,
                stagger: { amount: 0.4 },
                delay: 0,
                overwrite: true
            });
            gsap.fromTo(linkTextBtm, {
                yPercent: 1,
            }, {
                yPercent: -200,
                stagger: { amount: 0.4 },
                delay: 0.1,
                overwrite: true
            });
        };
    }, []);



    return (
        <div id='aboutSection'>

            <div className="aboutWrap">
                <div className="about">
                    <h1 text-split="" className="LoadingText">
                        ABOUT
                    </h1>
                </div>
            </div>

            <div className="about_grid">

                <div className="item about_tit">
                    <div className="split_text_clip">
                        <div text-split="" className="text-reg">ABOUT ME</div>
                        <div text-split="" className="text-reg">ABOUT ME</div>
                    </div>
                    <div className="item__bg"></div>
                </div>

                <div className="exp">
                    <div className="split_text_clip Bigger">
                        <p text-split="" className="text-reg">저의 포트폴리오에 오신 것을 환영합니다.</p>
                    </div>
                </div>

                <div className="item photo">
                    <img className='photo_img' src="https://images.unsplash.com/photo-1702221422565-60f734cd90b1?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="wy" />
                    <div className="item__bg"></div>
                </div>

                <div className="item desc_01">
                    <div className="split_text_clip">
                        <p text-split="" className="text-reg">ABOUT ME</p>
                    </div>
                    <div className="item__bg"></div>
                </div>

                <div className="item desc_02">
                    <div className="split_text_clip">
                        <p text-split="" className="text-reg">ABOUT</p>
                    </div>
                    <div className="item__bg"></div>
                </div>

                <div className='goback'>
                    <div className="split_text_clip">
                        <span text-split="" className="text-reg">
                            <IoIosArrowBack className='icon' size={50} />
                            BACK
                        </span>
                        <span text-split="" className="text-reg">
                            <IoIosArrowBack className='icon' size={50} />
                            BACK
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Teamreact