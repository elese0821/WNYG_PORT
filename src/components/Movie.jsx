import $ from 'jquery';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';
import { useNavigate } from 'react-router-dom';

const Movie = () => {
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
        gsap.set(".photo_img", {
            scaleX: 0,
            opacity: 0,
        });
        gsap.set("#aboutSection", {
            display: "none",
        });
        gsap.set(".item", {
            scaleY: 0,
        });
        gsap.set($(".exp").find(".char"), {
            yPercent: 100,
        });
        gsap.set($(".item").find(".char"), {
            yPercent: 100,
        });
        // line
        gsap.set($(".line_text_clip").find(".line"), {
            opacity: 0,
        });
        gsap.set("#aboutSection", {
            display: "grid",
        });
        gsap.defaults({
            ease: "power3.inOut",
            duration: 0.8,
        });
        gsap.set(".about", {
            display: "grid",
        });

        gsap.set($(".about").find(".char"), {
            yPercent: 150,
        });

        gsap.set($(".goback").find(".char"), {
            yPercent: 100,
        });


        // 로드 시 
        gsap.to($(".about").find(".char"), {
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

        const goback = document.querySelector(".goback");

        goback.addEventListener('mouseover', () => handleMouseOver());
        goback.addEventListener('mouseout', () => handleMouseOut());
        goback.addEventListener('click', () => handleClick());

        const handleClick = () => {
            let gridItems = Array.from(document.querySelectorAll(".item"));

            gridItems.forEach((gridItem, index) => {
                gridItem.addEventListener("click", function () {
                    let before = gridItems.slice(0, index).reverse();
                    let after = gridItems.slice(index + 1); ``
                    let outwardLinks = [];

                    for (let i = 0; i < Math.max(before.length, after.length); i++) {
                        if (before[i]) outwardLinks.push(before[i]);
                        if (after[i]) outwardLinks.push(after[i]);
                    }

                    outwardLinks.unshift(gridItem);

                    gsap.to($(".aboutWrap").find(".char"), {
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
        <div id='aboutSection'>

            <div className="aboutWrap">
                <div className="about">
                    <h1 text-split="" className="LoadingText">
                        ABOUT
                    </h1>
                </div>
            </div>

            <div className="about_grid">

                <div className="item about_tit">
                    <div className="split_text_clip">
                        <div text-split="" className="text-reg">ABOUT ME</div>
                        <div text-split="" className="text-reg">ABOUT ME</div>
                    </div>
                    <div className="item__bg"></div>
                </div>

                <div className="exp">
                    <div className="split_text_clip Bigger">
                        <p text-split="" className="text-reg">저의 포트폴리오에 오신 것을 환영합니다.</p>
                    </div>
                </div>

                <div className="item photo">
                    <img className='photo_img' src="https://images.unsplash.com/photo-1702221422565-60f734cd90b1?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="wy" />
                    <div className="item__bg"></div>
                </div>

                <div className="item desc_01">
                    <div className="split_text_clip">
                        <p text-split="" className="text-reg">ABOUT ME</p>
                    </div>
                    <div className="line_text_clip">
                        <p line-split="" className="line-reg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo sequi, officia commodi sed possimus soluta neque eaque? Nemo consectetur quo soluta facilis sequi cumque quam culpa ratione autem! Id, consequuntur!</p>
                    </div>
                    <div className="item__bg"></div>
                </div>

                <div className="item desc_02">
                    <div className="split_text_clip">
                        <p text-split="" className="text-reg">ABOUT</p>
                    </div>
                    <div className="line_text_clip">
                        <p line-split="" className="line-reg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus eligendi quam at ullam ratione fuga sapiente pariatur nulla nostrum, tenetur porro aut enim voluptas! Aliquam doloremque veniam excepturi asperiores officiis.</p>
                    </div>
                    <div className="item__bg"></div>
                </div>

                <div className='goback item'>
                    <div className="split_text_clip backBtn">
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

export default Movie