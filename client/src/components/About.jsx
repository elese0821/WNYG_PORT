import React from 'react';
import CommentArea from './comment/CommentArea';
import Comment from './comment/Comment';
import { FaCommentAlt } from "react-icons/fa";

const About = () => {
    return (
        <div id='section' className='about'>
            <Comment />
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

                <div className="item">
                    <div className="item__bg"></div>
                    <div className="about_img photo"></div>
                </div>

                <div className="item desc_01">
                    <div className="split_text_clip">
                        <p text-split="" className="text-reg">INTRODUCE</p>
                    </div>
                    <p className='item_desc'>
                        신입 개발자로서 저는 기술적인 깊이와 폭넓은 디자인 감각을 갖추고자 노력해왔습니다. HTML, CSS를 활용한 깔끔하고 사용자 친화적인 UI/UX 디자인부터, jQuery, Photoshop, Illustrator를 비롯한 다양한 도구를 사용하여 아이디어를 현실로 구현하는 데 필요한 기술적 소양을 쌓았습니다. 프로그래밍의 기본이 되는 JavaScript 및 여러 프레임워크에 대해서도 지속적으로 학습하고 실제 프로젝트에 적용해보며 문제 해결 능력을 키워왔습니다.
                        제가 추구하는 개발 방식은 단순한 코드 작성을 넘어서, 각 기능과 구조가 어떻게 최적으로 작동할 수 있는지에 대한 근본적인 이해를 바탕으로 합니다. 제가 가진 지식과 열정을 활용하여, 새로운 도전을 맞이하고자 합니다.
                        저는 항상 새로운 도전에 대한 열정과 긍정적인 자세를 가지고 있습니다.<br />
                        어려움을 마주할 때도 포기하지 않고 문제에 집중하여
                        해결책을 찾아내는 능력을 갖추려고 노력하고 있습니다.
                        <br />
                        <br />
                        안녕하세요, 창의적이고 혁신적인 웹 경험을 창출하는 데 열정적인 프론트엔드 개발자입니다. 최신 웹 기술과 트렌드에 밝으며, 사용자 중심의 반응형 웹사이트를 구축하는 데 탁월한 능력을 갖추고 있습니다. HTML, CSS, JavaScript를 비롯한 핵심 프론트엔드 기술에 능숙하며, React.js와 같은 현대적인 프레임워크를 사용하여 동적이고 상호작용이 풍부한 웹 애플리케이션을 개발하는 데 경험이 있습니다.
                        <br /><br />
                        프로젝트를 진행하면서 사용자 경험(UX) 개선에 중점을 두고, 최적화된 코드와 효율적인 구조 설계를 통해 웹사이트의 성능을 최대화합니다. 또한, 팀워크와 협업을 중요시하며, 다양한 배경을 가진 팀원들과 의사소통하며 프로젝트를 성공적으로 이끌어나가는 능력을 갖추고 있습니다. 새로운 기술을 빠르게 습득하고 적용하는 것을 즐기며, 지속적인 학습을 통해 개발 역량을 키워나가고 있습니다.
                        <br /><br />
                        혁신적이고 사용자 친화적인 웹사이트 개발을 통해 기술과 창의성이 조화를 이루는 프론트엔드 개발자로 성장하고자 합니다. 끊임없이 변화하는 웹 개발의 세계에서 새로운 도전을 즐기며, 제 기술과 열정을 바탕으로 팀과 프로젝트에 기여하고자 합니다.
                    </p>
                    <div className="item__bg"></div>
                </div>

                <div className="item desc_02 comment__item">
                    <div className="split_text_clip">
                        <p text-split="" className="text-reg">COMMENTS</p>
                    </div>
                    <CommentArea />
                    <div className="comment_icon popup__open">
                        <FaCommentAlt size={18} />
                    </div>
                    <div className="item__bg"></div>
                </div>

                <div className="reply item">
                    <div className="split_text_clip">
                        <span text-split="" className="text-reg">
                            COMMENTS
                        </span>
                        <span text-split="" className="text-reg">
                            COMMENTS
                        </span>
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