import React, { useEffect } from 'react';
import $ from 'jquery';
import gsap from 'gsap';
import SplitType from 'split-type';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    // 각 아이템 클릭 시 이동할 경로를 배열로 정의
    const paths = [
        '/about',
        '/blog',
        '/youtube',
        '/movie',
        '/teamreact',
        '/teamphp',
        '/teamquiz',
        '/js',
        '/contact'
    ];

    const handleMouseOver = (index) => {
        const linkTextTop = $(".item")
            .eq(index)
            .find(".text-reg")
            .find(".char");
        const linkTextBtm = $(".item")
            .eq(index)
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
            yPercent: 0,
        }, {
            yPercent: -100,
            stagger: { amount: 0.4 },
            delay: 0.1,
            overwrite: true
        });
    };

    const handleMouseOut = (index) => {
        const linkTextTop = $(".item")
            .eq(index)
            .find(".text-reg")
            .find(".char");
        const linkTextBtm = $(".item")
            .eq(index)
            .find(".text-reg")
            .find(".char");
        gsap.set(linkTextBtm, {
            yPercent: 0,
            duration: 0.6,
            overwrite: true
        });
        gsap.set(linkTextTop, {
            yPercent: 0,
            duration: 0.6,
            overwrite: true
        });
    };

    // 클릭 핸들러
    const handleClick = (index) => {
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

                gsap.to($(".title_wrap").find(".char"), {
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
                    outwardLinks,
                    {
                        height: "100%"
                    },
                    {
                        height: "0%",
                        stagger: { amount: 0.2 },
                        ease: "power4.inOut",
                        onComplete: () => {
                            navigate(paths[index]); // 애니메이션이 끝나면 해당 path로 이동
                            isAnimating = false;
                        }
                    }
                );
            });
        });
    };




    useEffect(() => {
        // SplitType 초기화
        new SplitType('[text-split]', {
            types: 'words, chars',
            tagName: 'span',
        });

        // setting
        gsap.set("#mainSection", {
            display: "none",
        });
        gsap.set(".item", {
            pointerEvents: "none",
            scaleY: 0,
        });

        gsap.set($(".item").find(".char"), {
            yPercent: 100,
        });

        gsap.set(".wonyoungWrap", {
            display: "grid",
        });

        gsap.set($(".wonyoungWrap").find(".char"), {
            yPercent: 150,
        });

        gsap.set("#mainSection", {
            display: "grid",
        });

        gsap.set(".title_wrap", {
            display: "none",
        });
        gsap.set($(".title_wrap").find(".char"), {
            yPercent: "100",
        });
        gsap.set($(".title_wrap").find(".char"), {
            yPercent: "100",
        });

        gsap.defaults({
            ease: "power3.inOut",
            duration: 0.8,
        });
        // 로드

        gsap.to($(".wonyoung").find(".char"), {
            yPercent: 1,
            duration: 1,
            stagger: { amount: 0.3 },
            onComplete: function () {
                gsap.delayedCall(0, function () {
                    gsap.to(".item", {
                        scaleY: 1,
                        duration: 1,
                        stagger: { amount: 0.15 },
                    });
                    gsap.to($(".item").find(".char"), {
                        yPercent: 0,
                        delay: 0.1,
                        stagger: { amount: 0.15, from: "start" },
                    });
                    gsap.delayedCall(0, function () {
                        gsap.set(".item", { pointerEvents: "auto" });
                        gsap.to($(".wonyoungWrap").find(".char"), {
                            yPercent: -130,
                            duration: 0.8,
                            stagger: { amount: 0.15 },
                            onComplete: function () {
                                gsap.set('.wonyoung', {
                                    display: "none",
                                })
                                gsap.set(".title_wrap", {
                                    display: "block",
                                });
                                gsap.to($(".title_wrap").find(".char"), {
                                    yPercent: 1,
                                    duration: 1,
                                    stagger: { amount: 0.15 },
                                })
                            }
                        });
                    });
                });
            },
        });
        // 아이템 요소에 이벤트 리스너 추가
        const gridItems = document.querySelectorAll(".item");

        gridItems.forEach((item, index) => {
            item.addEventListener('mouseover', () => handleMouseOver(index));
            item.addEventListener('mouseout', () => handleMouseOut(index));
            item.addEventListener('click', () => handleClick(index));
        });

        // 클린업 함수
        return () => {
            gridItems.forEach((item) => {
                item.removeEventListener('mouseover', handleMouseOver);
                item.removeEventListener('mouseout', handleMouseOut);
                item.removeEventListener('click', handleClick);
            });
        };
    }, []);

    return (
        <main id="mainSection">
            <div className="title_wrap">
                <div className="title_clip">
                    <h1 className="mainText" text-split="">Developer</h1>
                </div>
            </div>

            <div className="wonyoungWrap">
                <div className="wonyoung">
                    <h1 text-split="" className="LoadingText lt_top">
                        won
                    </h1>
                    <h1 text-split="" className="LoadingText lt_btm">
                        young
                    </h1>
                </div>
            </div>

            <div className="main__gird">
                <div className="item i1">
                    <div>
                        <div className="split_text_clip">
                            <div text-split="" className="text-reg">ABOUT ME</div>
                            <div text-split="" className="text-reg">ABOUT ME</div>
                        </div>
                        <div className="item__bg"></div>
                    </div>
                </div>
                <div className="item i2">
                    <div>
                        <div className="split_text_clip">
                            <div text-split="" className="text-reg">SIMPLE BLOG</div>
                            <div text-split="" className="text-reg">SIMPLE BLOG</div>
                        </div>
                        <div className="item__bg"></div>
                    </div>
                </div>
                <div className="item i3">
                    <div>
                        <div className="split_text_clip">
                            <div text-split="" className="text-reg">YOUTUBE PROJECT</div>
                            <div text-split="" className="text-reg">YOUTUBE PROJECT</div>
                        </div>
                        <div className="item__bg"></div>
                    </div>
                </div>
                <div className="item i4">
                    <div>
                        <div className="split_text_clip">
                            <div text-split="" className="text-reg">MOVIE PROJECT</div>
                            <div text-split="" className="text-reg">MOVIE PROJECT</div>
                        </div>
                        <div className="item__bg"></div>
                    </div>
                </div>
                <div className="item i5 text-btm">
                    <div>
                        <div className="split_text_clip">
                            <div text-split="" className="text-reg">PERRAR</div>
                            <div text-split="" className="text-reg">PERRAR</div>
                        </div>
                        <div className="item__bg"></div>
                    </div>
                </div>
                <div className="item i6 text-btm">
                    <div>
                        <div className="split_text_clip">
                            <div text-split="" className="text-reg">SEXYBRAIN</div>
                            <div text-split="" className="text-reg">SEXYBRAIN</div>
                        </div>
                        <div className="item__bg"></div>
                    </div>
                </div>
                <div className="item i7 text-btm">
                    <div>
                        <div className="split_text_clip">
                            <div text-split="" className="text-reg">QUIZ PROJECT</div>
                            <div text-split="" className="text-reg">QUIZ PROJECT</div>
                        </div>
                        <div className="item__bg"></div>
                    </div>
                </div>
                <div className="item i8 text-btm">
                    <div>
                        <div className="split_text_clip">
                            <div text-split="" className="text-reg">Javascript</div>
                            <div text-split="" className="text-reg">Javascript</div>
                        </div>
                        <div className="item__bg"></div>
                    </div>
                </div>
                <div className="item i9 text-btm">
                    <div>
                        <div className="split_text_clip">
                            <div text-split="" className="text-reg">CONTACT ME</div>
                            <div text-split="" className="text-reg">CONTACT ME</div>
                        </div>
                        <div className="item__bg"></div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home