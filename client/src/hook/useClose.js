import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import $ from 'jquery';
import { useLocation } from 'react-router-dom';

const useClose = (homepath) => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (homepath.pathname !== '/') {
            const close = document.querySelector(".close");
            const commentOpen = document.querySelector(".popup__open");
            const commentOpen2 = document.querySelector(".reply");
            const contactLink = document.querySelectorAll(".contact_link");

            const popupClose = document.querySelector(".popupClose")

            const handleClick = function () {
                let gridItems = Array.from(document.querySelectorAll(".item"));
                let isAnimating = false;

                gridItems.forEach((gridItem, index) => {
                    gridItem.addEventListener("click", function () {
                        if (isAnimating) return;
                        isAnimating = true;
                        let before = gridItems.slice(0, index).reverse();
                        let after = gridItems.slice(index + 1);
                        let outwardLinks = [];

                        for (let i = 0; i < Math.max(before.length, after.length); i++) {
                            if (before[i]) outwardLinks.push(before[i]);
                            if (after[i]) outwardLinks.push(after[i]);
                        }

                        outwardLinks.unshift(gridItem);

                        const tl = gsap.timeline({
                            onComplete: () => {
                                if ($(".text-reg").length) {
                                    gsap.fromTo(
                                        ".text-reg",
                                        { opacity: 1, yPercent: 0 },
                                        { opacity: 0, yPercent: 50, duration: 1, ease: "power4.inOut" }
                                    );
                                }
                                if ($(".item_desc").length) {
                                    gsap.fromTo(
                                        ".item_desc",
                                        { opacity: 1, yPercent: 0 },
                                        { opacity: 0, yPercent: 1, duration: 1, ease: "power4.inOut" }
                                    );
                                }
                                if ($(".comment__item").length) {
                                    gsap.fromTo(
                                        ".comment__item *",
                                        { opacity: 1, yPercent: 0 },
                                        { opacity: 0, yPercent: 1, duration: 1, ease: "power4.inOut" }
                                    );
                                }
                                if (outwardLinks.length) {
                                    gsap.fromTo(
                                        outwardLinks,
                                        { height: "100%" },
                                        { height: "0%", stagger: { amount: 0.2 }, ease: "power4.inOut" }
                                    );
                                }
                                if ($(".textWrap-tit").find(".char").length) {
                                    gsap.to($(".textWrap-tit").find(".char"), {
                                        delay: 0.2,
                                        yPercent: 300,
                                        duration: 1,
                                        stagger: { amount: 0.3 },
                                        onComplete: () => {
                                            isAnimating = false;
                                            navigate('/');
                                        }
                                    });
                                }
                            }
                        });

                        if ($('.photo').length) {
                            tl.add(() => {
                                gsap.to(".photo", { opacity: 0, duration: 0.5 });
                            }, 0);
                        }
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
                const tl = gsap.timeline();

                tl.set("#commentModal", { zIndex: 5 })
                    .to("#commentModal", {
                        backgroundColor: 'rgba(0,0,0,.5)',
                        backdropFilter: "blur(5px)",
                        ease: "power4.inOut",
                        duration: 0.6
                    })
                    .to(".commentModal", {
                        scaleY: 1,
                        duration: 0.6,
                        ease: "power4.inOut"
                    }, "-=0.6")
                    .to(".commentModal *", {
                        opacity: 1,
                        duration: 0.6,
                        ease: "power4.inOut"
                    }, "-=0.6");
            };

            const popupCloseClick = function () {
                const tl = gsap.timeline();

                tl.to(".commentModal *", {
                    opacity: 0,
                    duration: 0.6,
                    ease: "power4.inOut"
                })
                    .to(".commentModal", {
                        scaleY: 0,
                        delay: 0.1,
                        duration: 0.7,
                        ease: "power4.inOut"
                    }, "-=0.7")
                    .to("#commentModal", {
                        duration: 1,
                        delay: 0.2,
                        ease: "power4.inOut",
                        backgroundColor: 'rgba(0,0,0,0)',
                        backdropFilter: "blur(0px)"
                    }, "-=0.7")
                    .set("#commentModal", {
                        zIndex: -3,
                    });
            };

            if (close) {
                close.addEventListener('mouseover', handleMouseOver);
                close.addEventListener('mouseout', handleMouseOut);
                close.addEventListener('click', handleClick);
            }

            if (commentOpen) {
                commentOpen.addEventListener('mouseover', handleMouseOver);
                commentOpen.addEventListener('mouseout', handleMouseOut);
                commentOpen.addEventListener('click', popupOpen);
            }
            if (commentOpen2) {
                commentOpen2.addEventListener('mouseover', handleMouseOver);
                commentOpen2.addEventListener('mouseout', handleMouseOut);
                commentOpen2.addEventListener('click', popupOpen);
            }

            if (popupClose) {
                popupClose.addEventListener('click', popupCloseClick);
            }
            contactLink.forEach(contactLink => {
                contactLink.addEventListener('mouseover', handleMouseOver);
            });

            return () => {
                if (close) {
                    close.removeEventListener('click', handleClick);
                    close.removeEventListener('mouseover', handleMouseOver);
                    close.removeEventListener('mouseout', handleMouseOut);
                }
                if (commentOpen) {
                    commentOpen.removeEventListener('click', popupOpen);
                    commentOpen.removeEventListener('mouseover', handleMouseOver);
                    commentOpen.removeEventListener('mouseout', handleMouseOut);
                }
                if (commentOpen2) {
                    commentOpen2.removeEventListener('click', popupOpen);
                    commentOpen2.removeEventListener('mouseover', handleMouseOver);
                    commentOpen2.removeEventListener('mouseout', handleMouseOut);
                }
                if (popupClose) {
                    popupClose.removeEventListener('click', popupCloseClick);
                }
                contactLink.forEach(contactLink => {
                    contactLink.removeEventListener('mouseover', handleMouseOver);
                });
            }
        }
    }, [location])

}

export default useClose