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

        const expChars = $(".exp").find(".char");
        if (expChars.length) {
            gsap.set(expChars, {
                yPercent: 120,
            });
        }

        const desc = $(".desc");
        if (desc.length) {
            gsap.set(desc, {
                opacity: 0,
                yPercent: 10
            });
        }
    }, []);
}

export default useSet;
