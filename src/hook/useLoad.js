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
                gsap.to(".item", {
                    scaleY: 1,
                    duration: 1,
                    stagger: { amount: 0.2 },
                });

                gsap.to($(".item").find(".char"), {
                    yPercent: 0,
                    delay: 0.3,
                    stagger: { amount: 0.3, from: "start" },
                });

                // .exp 요소가 있는 경우에만 실행
                if ($(".exp").length) {
                    gsap.to($(".exp").find(".char"), {
                        yPercent: 0,
                        stagger: { amount: 0.4, from: "start" },
                        onComplete: animatePhotoImg // 다음 애니메이션 함수 호출
                    });
                } else {
                    animatePhotoImg(); // .exp가 없으면 바로 다음 함수 호출
                }
            },
        });

        // .photo_img 애니메이션을 별도의 함수로 정의
        function animatePhotoImg() {
            if ($(".photo_img").length) {
                gsap.to(".photo_img", {
                    duration: 0.7,
                    opacity: 1,
                    scaleX: 1,
                    onComplete: animateLine // 다음 애니메이션 함수 호출
                });
            } else {
                animateLine(); // .photo_img가 없으면 바로 다음 함수 호출
            }
        }

        // .line 애니메이션을 별도의 함수로 정의
        function animateLine() {
            if ($(".item").find(".line").length) {
                gsap.to($(".item").find(".line"), {
                    opacity: 1,
                    delay: 0.3,
                    stagger: { amount: 0.5, from: "start" },
                });
            }
        }
    }, []);
}

export default Load;
