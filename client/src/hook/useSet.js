import { gsap } from 'gsap';
import $ from 'jquery';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useSet = () => {
    const location = useLocation();
    useEffect(() => {
        gsap.set("#section", {
            display: "none",
        });
        gsap.set(".item", {
            scaleY: 0,
        });

        gsap.set($(".item").find(".char"), {
            yPercent: 100,
        });
        // line
        gsap.set("#section", {
            display: "grid",
        });
        gsap.defaults({
            ease: "power3.inOut",
            duration: 0.8,
        });
        gsap.set(".title-text", {
            display: "grid",
        });

        gsap.set($(".title-text").find(".char"), {
            yPercent: 150,
        });

        gsap.set($(".close").find(".char"), {
            yPercent: 100,
        });

        const expChars = $(".exp").find(".char");
        if (expChars.length) {
            gsap.set(expChars, {
                yPercent: 120,
            });
        }
        const photo = $(".photo")
        if (photo.length) {
            gsap.set(".photo", {
                opacity: 0,
            });
        }
        const desc = $(".item_desc");
        if (desc.length) {
            gsap.set(desc, {
                opacity: 0,
                yPercent: 10
            });
        }
        const commentdesc = $(".commentdesc *");
        if (commentdesc.length) {
            gsap.set(commentdesc, {
                opacity: 0,
                yPercent: 10
            });
        }
        const commentIcon = $(".comment_icon");
        if (commentIcon.length) {
            gsap.to(commentIcon, {
                opacity: 0,
            });
        }
        const comment = $("#commentModal");
        const commentModal = $(".commentModal");
        const commentModalchild = $(".commentModal *");
        if (comment.length) {
            gsap.set(comment, {
                zIndex: -3,
            });
            gsap.set(commentModal, {
                scaleY: 0,
            });
            gsap.set(commentModalchild, {
                opacity: 0,
            });
        }
    }, [location]);
}

export default useSet;
