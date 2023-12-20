import $ from 'jquery';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import img from '../assets/img/youtube.jpg'
import useLoad from '../hook/useLoad'
import useClose from '../hook/useClose'
import useSplitType from '../hook/useSplitType'

const Teamreact = () => {
    useSplitType();

    useEffect(() => {

        // setting 
        gsap.set(".photo_img", {
            scaleX: 0,
            opacity: 0,
        });
        gsap.set("#section", {
            display: "none",
        });
        gsap.set(".item", {
            scaleY: 0,
        });
        gsap.set($(".exp").find(".char"), {
            yPercent: 120,
        });
        gsap.set($(".item").find(".char"), {
            yPercent: 150,
        });
        // line
        gsap.set($(".line_text_clip").find(".line"), {
            opacity: 0,
        });
        gsap.set("#section", {
            display: "grid",
        });
        gsap.defaults({
            ease: "power3.inOut",
            duration: 0.8,
        });
        gsap.set(".textWrap-tit", {
            display: "grid",
        });

        gsap.set($(".textWrap-tit").find(".char"), {
            yPercent: 150,
        });

        gsap.set($(".close").find(".char"), {
            yPercent: 100,
        });

    }, []);

    useLoad();
    useClose();

    return (
        <div id='section' className='project'>
            <div className="textWrap-tit">
                <div className="title-text">
                    <h1 text-split="" className="LoadingText">
                        PROJECT
                    </h1>
                </div>
            </div>

            <div className="main_grid">

                <div className="item">
                    <div className="split_text_clip">
                        <div text-split="" className="text-reg">TEAM PROJECT</div>
                        <div text-split="" className="text-reg">TEAM PROJECT</div>
                    </div>
                    <div className="item__bg"></div>
                </div>

                <div className="exp">
                    <div className="split_text_clip">
                        <p text-split="" className="text-reg">저의 포트폴리오에 오신 것을 환영합니다.</p>
                    </div>
                </div>

                <div className="item photo">
                    <img className='photo_img' src={img} alt="wy" />
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
                        <p text-split="" className="text-reg">project ME</p>
                    </div>
                    <div className="line_text_clip">
                        <p line-split="" className="line-reg">
                            문제에서 기회를 포착하고, 해결을 통한 성취감을 좋아합니다.
                            React 등 프레임워크 환경에서 컴포넌트 단위의 마크업 작업을 능숙하게 할 수 있어요.
                        </p>
                    </div>
                    <div className="item__bg"></div>
                </div>

                <div className="item">
                    <div className="split_text_clip">
                        <p text-split="" className="text-reg">CODE</p>
                        <p text-split="" className="text-reg">CODE</p>
                    </div>
                    <a href='' className="item__bg hover_effect"></a>
                </div>

                <div className="item">
                    <div className="split_text_clip">
                        <p text-split="" className="text-reg">VIEW</p>
                        <p text-split="" className="text-reg">VIEW</p>
                    </div>
                    <a href='' className="item__bg hover_effect"></a>
                </div>

                <div className='close item'>
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

export default Teamreact