import React, { useEffect } from 'react';
import useLoad from '../hook/useLoad'
import useClose from '../hook/useClose'
import useSplitType from '../hook/useSplitType'
import useSet from '../hook/useSet'

const About = () => {
    useSplitType();
    useSet();
    useLoad();
    useClose();

    return (
        <div id='section' className='about'>
            <div className="textWrap-tit">
                <div className="title-text">
                    <h1 text-split="" className="LoadingText">
                        ABOUT
                    </h1>
                </div>
            </div>

            <div className="main_grid">

                <div className="item">
                    <div className="split_text_clip">
                        <div text-split="" className="text-reg">ABOUT ME</div>
                        <div text-split="" className="text-reg">ABOUT ME</div>
                    </div>
                    <div className="item__bg"></div>
                </div>

                <div className="exp">
                    <div className="split_text_clip">
                        <p text-split="" className="text-reg">저의 포트폴리오에 오신 것을 환영합니다.</p>
                    </div>
                </div>

                <div className="item photo">
                    <div className="item__bg about_img"></div>
                </div>

                <div className="item desc_01">
                    <div className="split_text_clip">
                        <p text-split="" className="text-reg">INTRODUCE</p>
                    </div>
                    <div className="line_text_clip">
                        <p line-split="" className="line-reg">
                            신입 개발자로서 저는 기술적인 깊이와 폭넓은 디자인 감각을 갖추고자 노력해왔습니다. HTML, CSS를 활용한 깔끔하고 사용자 친화적인 UI/UX 디자인부터, jQuery, Photoshop, Illustrator를 비롯한 다양한 도구를 사용하여 아이디어를 현실로 구현하는 데 필요한 기술적 소양을 쌓았습니다. 프로그래밍의 기본이 되는 JavaScript 및 여러 프레임워크에 대해서도 지속적으로 학습하고 실제 프로젝트에 적용해보며 문제 해결 능력을 키워왔습니다.
                            제가 추구하는 개발 방식은 단순한 코드 작성을 넘어서, 각 기능과 구조가 어떻게 최적으로 작동할 수 있는지에 대한 근본적인 이해를 바탕으로 합니다. 제가 가진 지식과 열정을 활용하여, 새로운 도전을 맞이하고자 합니다.
                        </p>
                    </div>
                    <div className="item__bg"></div>
                </div>

                <div className="item desc_02">
                    <div className="split_text_clip">
                        <p text-split="" className="text-reg">ABOUT ME</p>
                    </div>
                    <div className="line_text_clip">
                        <p line-split="" className="line-reg">
                            저는 항상 새로운 도전에 대한 열정과 긍정적인 자세를 가지고 있습니다.
                            어려움을 마주할 때도 포기하지 않고 문제에 집중하여
                            해결책을 찾아내는 능력을 갖추려고 노력하고 있습니다.
                        </p>
                    </div>
                    <div className="item__bg"></div>
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

export default About