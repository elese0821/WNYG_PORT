import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import $ from 'jquery';

const useClose = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const close = document.querySelector(".close");

        close.addEventListener('mouseover', () => handleMouseOver());
        close.addEventListener('mouseout', () => handleMouseOut());
        close.addEventListener('click', () => handleClick());

        const handleClick = () => {
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

        const handleMouseOver = () => {
            // 이벤트가 발생한 요소의 인덱스를 찾음
            const index = $(this).index();

            // 해당 인덱스의 .item을 선택
            const item = $(".item").eq(index);

            item.find(".text-reg .char").each(function (i) {
                gsap.fromTo(this, {
                    yPercent: 0,
                }, {
                    yPercent: -100,
                    stagger: { amount: 0.4 },
                    delay: i * 0.05,
                    overwrite: true,
                });
            })
        };

        const handleMouseOut = () => {
            // 이벤트가 발생한 요소의 인덱스를 찾음
            const index = $(this).index();

            // 해당 인덱스의 .item을 선택
            const item = $(".item").eq(index);

            // 선택한 .item 내의 모든 .char 요소를 찾아서 각각에 대해 원래 위치로 돌아가는 애니메이션 적용
            item.find(".text-reg .char").each(function () {
                gsap.to(this, {
                    yPercent: 0,
                    duration: 0.6,
                    ease: "power4.inOut",
                    overwrite: true
                });
            });
        };
    }, [])
}

export default useClose