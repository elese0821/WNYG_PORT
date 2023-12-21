import { gsap } from 'gsap';
import $ from 'jquery';
import { useEffect } from 'react';

export const useSet = () => {
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

        if ($(".photo").length) {
            gsap.set(".photo", {
                scale: 0,
            });
        }

        const expChars = $(".exp").find(".char");
        if (expChars.length) {
            gsap.set(expChars, {
                yPercent: 120,
            });
        }

        const lineTextClipLines = $(".line_text_clip").find(".line");
        if (lineTextClipLines.length) {
            gsap.set(lineTextClipLines, {
                opacity: 0,
            });
        }
    }, []);
}

export default useSet;