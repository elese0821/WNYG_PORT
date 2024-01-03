import React from 'react';
import CommentArea from './comment/CommentArea';
import Comment from './comment/Comment';
import { FaCommentAlt } from "react-icons/fa";
import useNolink from '../hook/useNolink';

const About = () => {
    const noLink = useNolink();
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
                        저는 항상 새로운 도전에 대한 열정과 긍정적인 자세를 가지고 있습니다.<br />
                        어려움을 마주할 때도 포기하지 않고 문제에 집중하여 하나 하나 천천히 파고들며, 해결책을 찾아내는 능력을 갖추려고 노력합니다.<br />
                        또 신입 개발자로서 기술적인 깊이와 폭넓은 디자인 감각을 갖추고자 노력해왔습니다.<br />
                        HTML, CSS를 활용한 깔끔하고 사용자 친화적인 UI/UX 디자인부터, jQuery, Photoshop, Illustrator를 비롯한 다양한 도구를 사용하여 아이디어를 현실로 구현하는 데 필요한 기술적 소양을 쌓았습니다.<br />
                        프로그래밍의 기본이 되는 JavaScript 및 여러 프레임워크에 대해서도 지속적으로 학습하고 실제 프로젝트에 적용해보며 문제 해결 능력을 키워왔습니다.<br />
                        제가 추구하는 개발 방식은 단순한 코드 작성을 넘어서, 각 기능과 구조가 어떻게 최적으로 작동할 수 있는지에 대한 근본적인 이해를 바탕으로 합니다.<br />
                        제가 가진 지식과 열정을 활용하여, 새로운 도전을 맞이하고자 합니다.<br /><br />

                        웹 개발 분야에서 HTML과 CSS를 통한 웹사이트 구축에 능숙합니다. 시맨틱 웹 마크업을 통해 의미 있는 콘텐츠 구조를 설계하고, 다양한 CSS 기술을 활용하여 유연하고 감각적인 웹 디자인을 창조합니다. 최신 웹 트렌드를 반영한 디자인 기법, 예를 들어 이미지 스프라이트와 IR 기법을 사용해 효율적이고 빠른 로딩 시간을 제공합니다. 또한, CSS 애니메이션 기능을 활용하여 웹사이트에 생동감과 인터랙티브한 요소를 추가합니다.<br /><br />
                        자바스크립트를 활용한 이벤트 처리와 DOM 조작을 통해 사용자 인터페이스의 동적인 상호작용을 구현합니다. Ajax를 이용한 비동기 통신으로 서버와의 데이터 교환을 효과적으로 수행하며, 웹 페이지에 실시간 콘텐츠 업데이트를 가능하게 합니다. 다양한 자바스크립트 기반의 애니메이션 효과를 통해 사용자 경험을 강화합니다.<br /><br />
                        리액트를 사용한 싱글 페이지 애플리케이션 개발에도 숙련되어 있으며, 외부 API를 활용하여 유튜브 동영상 목록이나 영화 정보와 같은 데이터를 동적으로 불러오고 표시하는 기능을 구현합니다. 사용자가 원하는 정보를 쉽게 찾을 수 있도록 검색 기능을 구현하고, 리액트의 효율적인 상태 관리를 통해 웹 애플리케이션의 성능을 최적화합니다.<br /><br />
                    </p>
                    <div className="item__bg"></div>
                </div>

                <div className="item desc_02 comment__item">
                    <div className="split_text_clip">
                        <p text-split="" className="text-reg">COMMENTS</p>
                    </div>
                    <CommentArea />
                    <a href='' onClick={noLink} className="comment_icon popup__open">
                        <FaCommentAlt size={16} />
                    </a>
                    <div className="item__bg"></div>
                </div>

                <div className="item">
                    <div className="split_text_clip">
                        <span text-split="" className="text-reg">
                            COMMENTS
                        </span>
                        <span text-split="" className="text-reg">
                            COMMENTS
                        </span>
                    </div>
                    <div className="item__bg reply"></div>
                </div>

                <div className='item'>
                    <div className="split_text_clip">
                        <span text-split="" className="text-reg">
                            CLOSE
                        </span>
                        <span text-split="" className="text-reg">
                            CLOSE
                        </span>
                    </div>
                    <a href='' className="item__bg close" onClick={noLink}></a>
                </div>
            </div>
        </div>
    )
}

export default About