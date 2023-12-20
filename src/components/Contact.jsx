import $ from 'jquery';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();

    // ————— Type split
    let splitText = new SplitType("[text-split]", {
        types: "words, chars",
        tagName: "span"
    });

    let typeSplit;
    let lineSplit;
    function runSplit() {
        typeSplit = new SplitType(".higlighted-text", {
            types: "lines, words, chars"
        });
        lineSplit = new SplitType("[split-lines]", {
            types: "lines"
        });
    }
    runSplit();


    useEffect(() => {
        new SplitType('[text-split]', {
            types: 'words, chars',
            tagName: 'span',
        });
        new SplitType('[line-split]', {
            types: 'lines',
            tagName: 'span',
        });


        // setting 
        gsap.set("#contactSection", {
            display: "none",
        });
        gsap.set(".item", {
            scaleY: 0,
        });
        gsap.set($(".exp").find(".char"), {
            yPercent: 100,
        });
        gsap.set($(".item").find(".char"), {
            yPercent: 150,
        });
        gsap.set("#contactSection", {
            display: "grid",
        });
        gsap.defaults({
            ease: "power3.inOut",
            duration: 0.8,
        });
        gsap.set(".contact", {
            display: "grid",
        });

        gsap.set($(".contact").find(".char"), {
            yPercent: 150,
        });

        gsap.set($(".close").find(".char"), {
            yPercent: 100,
        });
        // 로드 시 
        gsap.to($(".contact").find(".char"), {
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
                        stagger: { amount: 0.3, from: "start" },
                    });

                    gsap.to($(".exp").find(".char"), {
                        yPercent: 0,
                        delay: 0.3,
                        stagger: { amount: 0.4, from: "start" },
                    });

                });
            },
        });

        const close = document.querySelector(".close");

        close.addEventListener('mouseover', () => handleMouseOver());
        close.addEventListener('mouseout', () => handleMouseOut());
        close.addEventListener('click', () => handleClick());

        const handleClick = () => {
            let gridItems = Array.from(document.querySelectorAll(".item"));
            let isAnimating = false;

            gridItems.forEach((gridItem, index) => {
                gridItem.addEventListener("click", function () {
                    if (isAnimating) return; // 애니메이션 중이라면 클릭 이벤트 무시
                    isAnimating = true; // 애니메이션 시작
                    let before = gridItems.slice(0, index).reverse();
                    let after = gridItems.slice(index + 1); ``
                    let outwardLinks = [];

                    for (let i = 0; i < Math.max(before.length, after.length); i++) {
                        if (before[i]) outwardLinks.push(before[i]);
                        if (after[i]) outwardLinks.push(after[i]);
                    }

                    outwardLinks.unshift(gridItem);

                    gsap.to($(".contactWrap").find(".char"), {
                        yPercent: 300,
                        duration: 1.2,
                        stagger: { amount: 0.3 },
                    })
                    gsap.fromTo(
                        ".text-reg",
                        {
                            opacity: 1,
                            yPercent: 0
                        },
                        {
                            opacity: 0,
                            yPercent: 50,
                            duration: 0.6,
                            ease: "power4.inOut",
                            onComplete: () => {
                                gsap.set(outwardLinks, { padding: 0 });
                            }
                        }
                    );
                    gsap.fromTo(
                        ".line-reg",
                        {
                            opacity: 1,
                        },
                        {
                            yPercent: 10,
                            opacity: 0,
                            duration: 0.6,
                            ease: "power4.inOut",
                            onComplete: () => {
                                gsap.set(outwardLinks, { padding: 0 });
                            }
                        }
                    );
                    gsap.fromTo(
                        outwardLinks,
                        {
                            height: "100%"
                        },
                        {
                            height: "0%",
                            stagger: { amount: 0.2 },
                            ease: "power4.inOut",
                            onComplete: () => {
                                navigate('/');
                                isAnimating = false;
                            }
                        }
                    );
                });
            });
        };


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

            a.find(".char").each(function (index) {
                gsap.set(this, {
                    yPercent: 0,
                    duration: 0.6,
                    ease: "power4.inOut",
                    overwrite: true
                });
            });
        }


        const handleMouseOver = () => {
            // 이벤트가 발생한 요소의 인덱스를 찾음
            const index = $(this).index();

            // 해당 인덱스의 .item을 선택
            const item = $(".item").eq(index);

            item.find(".text-reg .char").each(function (i) {
                gsap.fromTo(this, {
                    yPercent: 0,
                }, {
                    yPercent: -100,
                    stagger: { amount: 0.4 },
                    delay: i * 0.05,
                    overwrite: true,
                });
            })
        };

        const handleMouseOut = () => {
            // 이벤트가 발생한 요소의 인덱스를 찾음
            const index = $(this).index();

            // 해당 인덱스의 .item을 선택
            const item = $(".item").eq(index);

            // 선택한 .item 내의 모든 .char 요소를 찾아서 각각에 대해 원래 위치로 돌아가는 애니메이션 적용
            item.find(".text-reg .char").each(function () {
                gsap.set(this, {
                    yPercent: 0,
                    duration: 0.6,
                    ease: "power4.inOut",
                    overwrite: true
                });
            });
        };


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
        <div id='contactSection'>

            <div className="contactWrap">
                <div className="contact">
                    <h1 text-split="" className="LoadingText">
                        CONTACT
                    </h1>
                </div>
            </div>

            <div className="contact_grid">

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


                <div className='item contLinkWrap'>
                    <div className="contact_links">
                        <a stagger-link="" href="#" target='black' className='contactLink'>
                            <div stagger="top" text-split="" className='stagger-contactLink'>github</div>
                        </a>
                        <a stagger-link="" href="#" target='black' className='contactLink'>
                            <div className="stagger-link__descender"></div>
                            <div stagger="top" text-split="" className='stagger-contactLink'>GITHUB</div>
                        </a>
                        <a stagger-link="" href="#" target='black' className='contactLink'>
                            <div stagger="top" text-split="" className='stagger-contactLink'>GITHUB</div>
                        </a>
                        <a stagger-link="" href="#" target='black' className='contactLink'>
                            <div stagger="top" text-split="" className='stagger-contactLink'>GITHUB</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact