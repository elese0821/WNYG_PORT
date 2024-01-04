import { gsap } from 'gsap';
import $ from 'jquery';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useSet = (homepath) => {
    const location = useLocation();

    useEffect(() => {
        if (homepath.pathname !== '/') {
            // 요소 캐싱
            const section = $("#section");
            const items = $(".item");
            const itemChars = items.find(".char");
            const titleText = $(".title-text");
            const titleChars = titleText.find(".char");
            const closeChars = $(".close").find(".char");
            const expChars = $(".exp").find(".char");
            const photo = $(".photo");
            const desc = $(".item_desc");
            const commentdesc = $(".commentdesc *");
            const commentIcon = $(".comment_icon");
            const comment = $("#commentModal");
            const commentModal = $(".commentModal");
            const commentModalchild = commentModal.find("*");

            // 상태 설정
            if (items.length) gsap.set(items, { scaleY: 0 });
            if (itemChars.length) gsap.set(itemChars, { yPercent: 100 });
            if (section.length) gsap.set(section, { display: "grid" });
            gsap.defaults({ ease: "power3.inOut", duration: 0.8 });
            if (titleText.length) gsap.set(titleText, { display: "grid" });
            if (titleChars.length) gsap.set(titleChars, { yPercent: 150 });
            if (closeChars.length) gsap.set(closeChars, { yPercent: 100 });
            if (expChars.length) gsap.set(expChars, { yPercent: 120 });
            if (photo.length) gsap.set(photo, { opacity: 0 });
            if (desc.length) gsap.set(desc, { opacity: 0 });
            if (commentdesc.length) gsap.set(commentdesc, { opacity: 0 });
            if (commentIcon.length) gsap.set(commentIcon, { animation: "none", opacity: 0 });
            if (comment.length) {
                gsap.set(comment, { zIndex: -3 });
                gsap.set(commentModal, { scaleY: 0 });
                gsap.set(commentModalchild, { opacity: 0 });
            }
        }

    }, [location]);
}

export default useSet;
