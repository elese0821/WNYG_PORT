import { gsap } from 'gsap';
import $ from 'jquery';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Load = (homepath) => {
    const location = useLocation();

    useEffect(() => {
        if (homepath.pathname !== '/') {
            const titleChars = $(".title-text").find(".char");
            const items = $('.item');
            const itemChars = items.find(".char");
            const photos = $(".photo");
            const expChars = $(".exp").find(".char");
            const itemDescs = items.find(".item_desc");
            const commentDescs = items.find(".commentdesc *");
            const commentIcons = $(".comment_icon");

            if (titleChars.length) {
                gsap.to(titleChars, {
                    yPercent: 1,
                    duration: 1,
                    stagger: { amount: 0.3 },
                    onComplete: titNext
                });
            }

            function titNext() {
                if (items.length) {
                    gsap.to(items, {
                        scaleY: 1,
                        duration: 1,
                        stagger: { amount: 0.2 }
                    });
                }

                if (itemChars.length) {
                    gsap.to(itemChars, {
                        yPercent: 0,
                        delay: 0.5,
                        stagger: { amount: 0.3, from: "start" }
                    });
                }

                if (photos.length) {
                    gsap.fromTo(photos, {
                        opacity: 0
                    }, {
                        delay: 1,
                        opacity: 1,
                        duration: 0.5
                    });
                }

                if (expChars.length) {
                    gsap.to(expChars, {
                        delay: 0.5,
                        yPercent: 0,
                        stagger: { amount: 0.4, from: "start" }
                    });
                }

                function animatedesc() {
                    if (itemDescs.length) {
                        gsap.to(itemDescs, {
                            delay: 1,
                            opacity: 0.85
                        });
                    }
                    if (commentDescs.length) {
                        gsap.to(commentDescs, {
                            delay: 1,
                            opacity: 1
                        });
                    }
                    if (commentIcons.length) {
                        gsap.to(commentIcons, {
                            delay: 1,
                            opacity: 1,
                            animation: 'ani1 2s linear infinite'
                        });
                    }
                }

                if (expChars.length) {
                    animatedesc();
                }
            }
        }
    }, [location]);
}

export default Load;
