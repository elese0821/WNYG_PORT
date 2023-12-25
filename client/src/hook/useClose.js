import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import $ from 'jquery';

const useClose = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const close = document.querySelector(".close");
        const reply = document.querySelector(".reply");

        const popupClose = document.querySelector(".popupClose")

        const handleClick = function () {
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

                    gsap.to($(".textWrap-tit").find(".char"), {
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
                                navigate('/');
                                isAnimating = false;
                            }
                        }
                    );
                });
            });
        };

        const handleMouseOver = function () {
            $(this).find(".text-reg .char").each(function (i) {
                gsap.fromTo(this, {
                    yPercent: 0,
                }, {
                    yPercent: -100,
                    stagger: { amount: 0.4 },
                    delay: i * 0.05,
                    overwrite: true,
                });
            });
        };

        const handleMouseOut = function () {
            $(this).find(".text-reg .char").each(function (i) {
                gsap.to(this, {
                    yPercent: 0,
                    duration: 0.1,
                    overwrite: true
                });
            });
        };

        const popupOpen = function () {
            gsap.set("#commentModal", {
                zIndex: 5,
                onComplete: () => {
                    gsap.to("#commentModal", {
                        backgroundColor: 'rgba(0,0,0,.2)',
                        backdropFilter: "blur(2px)",
                        ease: "power4.inOut",
                        duration: 0.6,
                        onComplete: () => {
                            gsap.to(".commentModal", {
                                scaleY: 1,
                                duration: 0.6,
                                ease: "power4.inOut",
                                onComplete: () => {
                                    gsap.to(".commentModal *", {
                                        opacity: 1,
                                        duration: 0.6,
                                        ease: "power4.inOut",
                                    });
                                }
                            });
                        }
                    });
                }
            })
        }

        const popupCloseClick = function () {
            gsap.to(".commentModal *", {
                opacity: 0,
                duration: 0.6,
                ease: "power4.inOut",
                onComplete: () => {
                    gsap.to(".commentModal", {
                        scaleY: 0,
                        duration: 0.6,
                        ease: "power4.inOut",
                        onComplete: () => {
                            gsap.to("#commentModal", {
                                duration: 0.6,
                                ease: "power4.inOut",
                                backgroundColor: 'rgba(0,0,0,0)',
                                backdropFilter: "blur(0px)",
                                onComplete: () => {
                                    gsap.set("#commentModal", {
                                        zIndex: -3,
                                    });
                                }
                            });

                        }
                    });
                }
            });

        }
        // close 요소가 존재할 경우에만 이벤트 리스너 추가
        if (close) {
            close.addEventListener('mouseover', handleMouseOver);
            close.addEventListener('mouseout', handleMouseOut);
            close.addEventListener('click', handleClick);
        }

        // reply 요소가 존재할 경우에만 이벤트 리스너 추가
        if (reply) {
            reply.addEventListener('mouseover', handleMouseOver);
            reply.addEventListener('mouseout', handleMouseOut);
            reply.addEventListener('click', popupOpen);
        }

        if (popupClose) {
            popupClose.addEventListener('click', popupCloseClick);
        }

        // 컴포넌트가 언마운트 될 때 이벤트 리스너 제거
        return () => {
            if (close) {
                close.removeEventListener('click', handleClick);
                close.removeEventListener('mouseover', handleMouseOver);
                close.removeEventListener('mouseout', handleMouseOut);
            }
            if (reply) {
                reply.removeEventListener('click', popupOpen);
                reply.removeEventListener('mouseover', handleMouseOver);
                reply.removeEventListener('mouseout', handleMouseOut);
            }
            if (popupClose) {
                popupClose.removeEventListener('click', popupCloseClick);
            }
        }
    }, [])

}

export default useClose