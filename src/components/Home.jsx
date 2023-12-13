import $ from 'jquery';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';

const Home = () => {
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
        window.onload = function () {
            gsap.to($(".wonyoung").find(".char"), {
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
                        gsap.delayedCall(0, function () {
                            gsap.set(".item", { pointerEvents: "auto" });
                            gsap.to($(".wonyoungWrap").find(".char"), {
                                yPercent: -150,
                                duration: 0.8,
                                stagger: { amount: 0.2 },
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
                                        stagger: { amount: 0.2 },
                                    })
                                }
                            });
                        });
                    });
                },
            });
        }

        // 이벤트 핸들러 설정
        const links = document.querySelectorAll('.item');
        links.forEach((link, index) => {
            link.addEventListener('mouseover', () => handleMouseOver(index));
            link.addEventListener('mouseout', () => handleMouseOut(index));
        });

        // 페이지 전환 효과 설정
        let gridItems = Array.from(document.querySelectorAll(".item"));
        let exitDurationMS = 1000;

        gridItems.forEach((gridItem, index) => {
            gridItem.addEventListener("click", function (e) {
                if (
                    // $(this).prop("hostname") === window.location.host &&
                    $(this).children().attr("href").indexOf("#") === -1 &&
                    $(this).children().attr("target") !== "_blank"
                ) {
                    e.preventDefault();
                    let transitionURL = $(this).children().attr("href");
                    let before = gridItems.slice(0, index).reverse();
                    let after = gridItems.slice(index + 1);
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
                            ease: "power4.inOut"
                        }
                    );

                    setTimeout(function () {
                        window.location = transitionURL;
                    }, exitDurationMS);
                }
            });
        });
    }, []);

    // 마우스 오버 핸들러
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

    // 마우스 아웃 핸들러
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
                    <a href="/page/about.html">
                        <div className="split_text_clip">
                            <div text-split="" className="text-reg">ABOUT ME</div>
                            <div text-split="" className="text-reg">ABOUT ME</div>
                        </div>
                        <div className="item__bg"></div>
                    </a>
                </div>
                <div className="item i2">
                    <a href="/page/about.html">
                        <div className="split_text_clip">
                            <div text-split="" className="text-reg">ABOUT ME</div>
                            <div text-split="" className="text-reg">ABOUT ME</div>
                        </div>
                        <div className="item__bg"></div>
                    </a>
                </div>
                <div className="item i3">
                    <a href="/page/about.html">
                        <div className="split_text_clip">
                            <div text-split="" className="text-reg">ABOUT ME</div>
                            <div text-split="" className="text-reg">ABOUT ME</div>
                        </div>
                        <div className="item__bg"></div>
                    </a>
                </div>
                <div className="item i4">
                    <a href="/page/about.html">
                        <div className="split_text_clip">
                            <div text-split="" className="text-reg">ABOUT ME</div>
                            <div text-split="" className="text-reg">ABOUT ME</div>
                        </div>
                        <div className="item__bg"></div>
                    </a>
                </div>
                <div className="item i5 text-btm">
                    <a href="/page/about.html">
                        <div className="split_text_clip">
                            <div text-split="" className="text-reg">ABOUT ME</div>
                            <div text-split="" className="text-reg">ABOUT ME</div>
                        </div>
                        <div className="item__bg"></div>
                    </a>
                </div>
                <div className="item i6 text-btm">
                    <a href="/page/about.html">
                        <div className="split_text_clip">
                            <div text-split="" className="text-reg">ABOUT ME</div>
                            <div text-split="" className="text-reg">ABOUT ME</div>
                        </div>
                        <div className="item__bg"></div>
                    </a>
                </div>
                <div className="item i7 text-btm">
                    <a href="/page/about.html">
                        <div className="split_text_clip">
                            <div text-split="" className="text-reg">ABOUT ME</div>
                            <div text-split="" className="text-reg">ABOUT ME</div>
                        </div>
                        <div className="item__bg"></div>
                    </a>
                </div>
                <div className="item i8 text-btm">
                    <a href="/page/about.html">
                        <div className="split_text_clip">
                            <div text-split="" className="text-reg">ABOUT ME</div>
                            <div text-split="" className="text-reg">ABOUT ME</div>
                        </div>
                        <div className="item__bg"></div>
                    </a>
                </div>
                <div className="item i9 text-btm">
                    <a href="/page/contact.html">
                        <div className="split_text_clip">
                            <div text-split="" className="text-reg">CONTACT ME</div>
                            <div text-split="" className="text-reg">CONTACT ME</div>
                        </div>
                        <div className="item__bg"></div>
                    </a>
                </div>
            </div>
        </main>
    )
}

export default Home