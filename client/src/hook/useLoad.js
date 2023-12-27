import { gsap } from 'gsap';
import $ from 'jquery';
import { useEffect } from 'react';

const Load = () => {
    useEffect(() => {
        gsap.to($(".title-text").find(".char"), {
            yPercent: 1,
            duration: 1,
            stagger: { amount: 0.3 },
            onComplete: function () {
                document.querySelectorAll('.item').forEach(function (item) {
                    gsap.to(item, {
                        scaleY: 1,
                        duration: 1,
                        stagger: { amount: 0.2 }
                    });
                    gsap.to($(".item").find(".char"), {
                        yPercent: 0,
                        delay: 0.3,
                        stagger: { amount: 0.3, from: "start" },
                    });
                });
                if ($(".photo").length) {
                    gsap.to(".photo", {
                        delay: 1,
                        opacity: 1,
                    });
                }

                // .exp 요소가 있는 경우에만 실행
                if ($(".exp").length) {
                    gsap.to($(".exp").find(".char"), {
                        yPercent: 0,
                        stagger: { amount: 0.4, from: "start" },
                        onComplete: animatedesc
                    });
                } else {
                    animatedesc();
                }
            },
        });

        function animatedesc() {
            if ($(".item").find(".item_desc").length) {
                gsap.to($(".item").find(".item_desc"), {
                    opacity: 0.85,
                    yPercent: 0
                });
            }
            if ($(".item").find(".commentdesc").length) {

                gsap.to($(".item").find(".commentdesc *"), {
                    opacity: 1,
                    yPercent: 0,
                    onComplete: () => {
                        const commentdesc = $(".commentdesc *");
                        if (commentdesc.length) {
                            gsap.set(commentdesc, {
                                yPercent: 0,
                                onComplete: animateIcon
                            });
                        }
                    }
                });
                function animateIcon() {
                    if ($(".comment_icon").length) {
                        gsap.to(".comment_icon ", {
                            opacity: 1,
                        });
                    }
                }
            }
        }
    }, []);
}

export default Load;
