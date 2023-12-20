import { gsap } from 'gsap';
import $ from 'jquery';
import { useEffect } from 'react';

const Load = () => {
    useEffect(() => {

        // 로드 시 
        gsap.to($(".title-text").find(".char"), {
            yPercent: 1,
            duration: 1,
            stagger: { amount: 0.3 },
            onComplete: function () {
                gsap.delayedCall(0, function () {
                    gsap.to(".item", {
                        scaleY: 1,
                        duration: 1,
                        stagger: { amount: 0.2 },
                    });
                    gsap.to($(".item").find(".char"), {
                        yPercent: 0,
                        delay: 0.3,
                        stagger: { amount: 0.3, from: "start" },
                        onComplete: function () {
                            gsap.to($(".item").find(".line"), {
                                opacity: 1,
                                delay: 0.3,
                                stagger: { amount: 0.5, from: "start" },
                            });
                        }
                    });

                    gsap.to($(".exp").find(".char"), {
                        yPercent: 0,
                        delay: 0.3,
                        stagger: { amount: 0.4, from: "start" },
                        onComplete: function () {
                            gsap.to(".photo_img", {
                                duration: 1,
                                opacity: 1,
                                scaleX: 1,
                            });
                        }
                    });

                });
            },
        });
    }, [])
}

export default Load