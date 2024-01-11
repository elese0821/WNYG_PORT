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
                        안녕하세요. 저는 코딩에 푹 빠진 개발자 이원영입니다. 새로운 도전을 즐기며, 항상 긍정적인 마인드로 어려움을 극복해 나가는 편입니다. <br />
                        문제가 발생하면 절대 포기하지 않고, 깊이 파고들어 해결책을 찾는 것이 저의 특기입니다. <br />
                        웹 개발 분야에서 저는 HTML과 CSS를 활용하여 깔끔하고 사용자 친화적인 UI/UX 디자인을 창조하는 것을 좋아합니다.  <br />
                        의미 있는 콘텐츠 구조와 독창적인 웹 디자인을 만들기 위해 시맨틱 웹 마크업과 다양한 CSS 기술을 활용하며, 최신 트렌드를 반영한 디자인 기법으로 웹사이트의 로딩 시간을 최적화하고 CSS 애니메이션으로 인터랙티브한 요소를 추가하는 것도 제 역량의 일부입니다. <br />
                        JavaScript를 사용한 이벤트 처리와 DOM 조작으로 웹 페이지에 생동감을 불어넣는 것은 제가 자신 있는 분야이며, Ajax를 이용한 비동기 통신 역시 능숙하게 수행합니다. JavaScript 기반의 애니메이션을 통해 사용자 경험을 풍부하게 만드는 것도 저의 목표 중 하나입니다. <br />
                        React를 사용한 싱글 페이지 애플리케이션 개발에도 능숙하며, 외부 API를 활용해 동적 데이터를 불러오고, 사용자가 원하는 정보를 쉽게 찾을 수 있도록 검색 기능을 구현하는 일을 즐겨 합니다. React의 효율적인 상태 관리를 통해 웹 애플리케이션의 성능을 극대화하는 데 기여하고 있습니다. <br />
                        저는 단순한 코딩을 넘어서, 각 기능과 구조가 어떻게 최적으로 작동할 수 있는지에 대한 근본적인 이해를 바탕으로 작업합니다. 제 지식과 열정을 결합해 항상 새로운 도전을 받아들이고, 끊임없이 더 나은 개발자로 성장하기 위해 노력하고 있습니다. 이 즐거운 개발 여정을 계속하며, 더 많은 것을 배우고, 나누고 싶습니다. 😊
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