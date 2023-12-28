import { gsap } from 'gsap';
import $ from 'jquery';
import { useEffect } from 'react';
import SplitType from 'split-type';
import { useLocation, useNavigate } from 'react-router-dom';

const useMain = () => {
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
                if (isAnimating) return;
                isAnimating = true;
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
        new SplitType('[text-split]', {
            types: 'words, chars',
            tagName: 'span',
        });

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
        const gridItems = document.querySelectorAll(".item");

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

}

export default useMain