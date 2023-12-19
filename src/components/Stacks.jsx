import $ from 'jquery';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';
import { useNavigate } from 'react-router-dom';

const Stacks = () => {
    const navigate = useNavigate();

    useEffect(() => {
        new SplitType('[text-split]', {
            types: 'words, chars',
            tagName: 'span',
        });
        new SplitType('[line-split]', {
            types: 'lines',
            tagName: 'span',
        });


        // setting 
        gsap.set("#stackSection", {
            display: "none",
        });
        gsap.set(".item", {
            scaleY: 0,
        });
        gsap.set($(".item").find(".char"), {
            yPercent: 100,
        });
        // line
        gsap.set($(".line_text_clip").find(".line"), {
            opacity: 0,
        });
        gsap.set("#stackSection", {
            display: "grid",
        });
        gsap.defaults({
            ease: "power3.inOut",
            duration: 0.8,
        });
        gsap.set(".stack", {
            display: "grid",
        });

        gsap.set($(".stack").find(".char"), {
            yPercent: 150,
        });

        gsap.set($(".close").find(".char"), {
            yPercent: 100,
        });


        // 로드 시 
        gsap.to($(".stack").find(".char"), {
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
                });
            },
        });

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

                    gsap.to($(".stackWrap").find(".char"), {
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
                        ".line-reg",
                        {
                            opacity: 1,
                        },
                        {
                            yPercent: 10,
                            opacity: 0,
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

    }, []);



    return (
        <div id='stackSection'>
            <div className="stackWrap">
                <div className="stack">
                    <h1 text-split="" className="LoadingText">
                        USED STACK
                    </h1>
                </div>
            </div>

            <div className="stack_grid">

                <div className="item">
                    <div className="split_text_clip">
                        <div text-split="" className="text-reg">STACKS</div>
                        <div text-split="" className="text-reg">STACKS</div>
                    </div>
                    <div className="item__bg"></div>
                </div>

                <div className="item">
                    <div className="split_text_clip">
                        <div text-split="" className="text-reg">STACKS</div>
                        <div text-split="" className="text-reg">STACKS</div>
                    </div>
                    <div className="item__bg"></div>
                </div>

                <div className="item desc_01">
                    <div className="split_text_clip">
                        <p text-split="" className="text-reg">INTRODUCE</p>
                    </div>
                    <div className="line_text_clip">
                        <p line-split="" className="line-reg">
                            즐기면 더 잘한다는 마음으로
                            작업하고 있어요!
                            디자인을 하고싶었으나 어디서부터 어떻게 풀어갈지 고민에 빠져있다
                            유튜브에서 김종민이라는 유튜버가 웹페이지로 상상하던것을 그려가는것을 본 뒤
                            제가 원하는 디자인의 웹페이지를 만들고 싶다는 집념으로
                            우연히 접하게 된 개발공부에 시간 가는줄 모르는 매력을 느껴 개발자의 길을 걷게되었습니다.

                            지금에 안주하지않고 끝없이 발전하려고 합니다.
                            시작해 풀스택까지 달려나가고싶습니다.


                            저는 항상 새로운 도전에 대한 열정과 긍정적인 자세를 가지고 있습니다.
                            어려움을 마주할 때도 포기하지 않고 문제에 집중하여
                            해결책을 찾아내는 능력을 갖추려고 노력하고 있습니다.
                        </p>
                    </div>
                    <div className="item__bg"></div>
                </div>

                <div className="item desc_02">
                    <div className="split_text_clip">
                        <p text-split="" className="text-reg">sadas ME</p>
                    </div>
                    <div className="line_text_clip">
                        <p line-split="" className="line-reg">
                            문제에서 기회를 포착하고, 해결을 통한 성취감을 좋아합니다.
                            React 등 프레임워크 환경에서 컴포넌트 단위의 마크업 작업을 능숙하게 할 수 있어요.
                        </p>
                    </div>
                    <div className="item__bg"></div>
                </div>

                <div className="item desc_03">
                    <div className="split_text_clip">
                        <p text-split="" className="text-reg">sadas ME</p>
                    </div>
                    <div className="line_text_clip">
                        <p line-split="" className="line-reg">
                            문제에서 기회를 포착하고, 해결을 통한 성취감을 좋아합니다.
                            React 등 프레임워크 환경에서 컴포넌트 단위의 마크업 작업을 능숙하게 할 수 있어요.
                        </p>
                    </div>
                    <div className="item__bg"></div>
                </div>


                <div className='item close'>
                    <div className="split_text_clip">
                        <span text-split="" className="text-reg">
                            CLOSE
                        </span>
                        <span text-split="" className="text-reg">
                            CLOSE
                        </span>
                    </div>
                    <div className="item__bg"></div>
                </div>


            </div>
        </div>
    )
}

export default Stacks