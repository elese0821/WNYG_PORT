import React from 'react';
import { gsap } from 'gsap';
import $ from 'jquery';
import { useEffect } from 'react';
import SplitType from 'split-type';
import { useLocation, useNavigate } from 'react-router-dom';
import useNolink from '../hook/useNolink';

const Home = () => {
    const noLink = useNolink();
    const location = useLocation();
    const navigate = useNavigate();
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
            stagger: { amount: 0.2 },
            overwrite: true,
            ease: "power4.inOut",
        });
        gsap.fromTo(linkTextBtm, {
            yPercent: 0,
        }, {
            yPercent: -100,
            stagger: { amount: 0.3 },
            overwrite: true,
            ease: "power4.inOut",
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

    const handleClick = (index) => {
        let gridItems = Array.from(document.querySelectorAll(".item"));

        gridItems.forEach((gridItem, index) => {
            gridItem.addEventListener("click", function () {
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
                    duration: 0.6,
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
                            navigate(paths[index]);
                        }
                    }
                );
            });
        });
    };
    useEffect(() => {
        new SplitType('[text-split]', {
            types: 'words, chars',
            tagName: 'span',
        });

        const tl = gsap.timeline({ defaults: { ease: "power3.inOut", duration: 0.8 } });

        tl.set("#mainSection", { display: "none" })
            .set(".item", { pointerEvents: "none", scaleY: 0 })
            .set($(".item").find(".char"), { yPercent: 100 })
            .set(".wonyoungWrap", { display: "grid" })
            .set($(".wonyoungWrap").find(".char"), { yPercent: 150 })
            .set("#mainSection", { display: "grid" })
            .set(".title_wrap", { display: "none" })
            .set($(".title_wrap").find(".char"), { yPercent: 100 });

        tl.to($(".wonyoung").find(".char"), {
            yPercent: 1,
            duration: 0.7,
            stagger: { amount: 0.3 },
        });
        tl.to($(".wonyoungWrap").find(".char"), {
            yPercent: -130,
            stagger: { amount: 0.15 }
        });
        tl.set('.wonyoung', { display: "none" })
            .set(".title_wrap", { display: "block" })
            .to($(".title_wrap").find(".char"), {
                yPercent: 0.8,
                stagger: { amount: 0.15 },
            }, "-=0.3")
            .to(".item", {
                delay: 0.2,
                scaleY: 1,
                stagger: { amount: 0.15 }
            }, "-=0.3")
            .to($(".item").find(".char"), {
                yPercent: 0,
                stagger: { amount: 0.15, from: "start" }
            }, "-=0.3")
            .set(".item", { pointerEvents: "auto" });

        const gridItems = document.querySelectorAll(".item__bg");

        gridItems.forEach((item, index) => {
            item.addEventListener('mouseover', () => handleMouseOver(index));
            item.addEventListener('mouseout', () => handleMouseOut(index));
            item.addEventListener('click', () => handleClick(index));
        });

        return () => {
            gridItems.forEach((item) => {
                item.removeEventListener('mouseover', handleMouseOver);
                item.removeEventListener('mouseout', handleMouseOut);
                item.removeEventListener('click', handleClick);
            });
        };
    }, [location]);

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
                        <a href='#' className="item__bg" onClick={noLink}></a>
                    </div>
                </div>
                <div className="item i2">
                    <div>
                        <div className="split_text_clip">
                            <div text-split="" className="text-reg">SIMPLE BLOG</div>
                            <div text-split="" className="text-reg">SIMPLE BLOG</div>
                        </div>
                        <a href='#' className="item__bg" onClick={noLink}></a>
                    </div>
                </div>
                <div className="item i3">
                    <div>
                        <div className="split_text_clip">
                            <div text-split="" className="text-reg">YOUTUBE PROJECT</div>
                            <div text-split="" className="text-reg">YOUTUBE PROJECT</div>
                        </div>
                        <a href='#' className="item__bg" onClick={noLink}></a>
                    </div>
                </div>
                <div className="item i4">
                    <div>
                        <div className="split_text_clip">
                            <div text-split="" className="text-reg">MOVIE PROJECT</div>
                            <div text-split="" className="text-reg">MOVIE PROJECT</div>
                        </div>
                        <a href='#' className="item__bg" onClick={noLink}></a>
                    </div>
                </div>
                <div className="item i5 text-btm">
                    <div>
                        <div className="split_text_clip">
                            <div text-split="" className="text-reg">PETRAR</div>
                            <div text-split="" className="text-reg">PETRAR</div>
                        </div>
                        <a href='#' className="item__bg" onClick={noLink}></a>
                    </div>
                </div>
                <div className="item i6 text-btm">
                    <div>
                        <div className="split_text_clip">
                            <div text-split="" className="text-reg">SEXYBRAIN</div>
                            <div text-split="" className="text-reg">SEXYBRAIN</div>
                        </div>
                        <a href='#' className="item__bg" onClick={noLink}></a>
                    </div>
                </div>
                <div className="item i7 text-btm">
                    <div>
                        <div className="split_text_clip">
                            <div text-split="" className="text-reg">QUIZ GAME</div>
                            <div text-split="" className="text-reg">QUIZ GAME</div>
                        </div>
                        <a href='#' className="item__bg" onClick={noLink}></a>
                    </div>
                </div>
                <div className="item i8 text-btm">
                    <div>
                        <div className="split_text_clip">
                            <div text-split="" className="text-reg">Javascript</div>
                            <div text-split="" className="text-reg">Javascript</div>
                        </div>
                        <a href='#' className="item__bg" onClick={noLink}></a>
                    </div>
                </div>
                <div className="item i9 text-btm">
                    <div>
                        <div className="split_text_clip">
                            <div text-split="" className="text-reg">CONTACT ME</div>
                            <div text-split="" className="text-reg">CONTACT ME</div>
                        </div>
                        <a href='#' className="item__bg" onClick={noLink}></a>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home