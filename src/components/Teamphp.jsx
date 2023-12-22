import React from 'react';
import useLoad from '../hook/useLoad'
import useClose from '../hook/useClose'
import useSplitType from '../hook/useSplitType'
import useSet from '../hook/useSet';

const Teamphp = () => {
    useSplitType();
    useSet();
    useLoad();
    useClose();

    return (
        <div id='section' className='project'>
            <div className="textWrap-tit">
                <div className="title-text">
                    <h1 text-split="" className="LoadingText">
                        SEXYBRAIN
                    </h1>
                </div>
            </div>

            <div className="main_grid">

                <div className="item">
                    <div className="split_text_clip">
                        <div text-split="" className="text-reg">SEXYBRAIN</div>
                        <div text-split="" className="text-reg">SEXYBRAIN</div>
                    </div>
                    <div className="item__bg"></div>
                </div>

                <div className="exp">
                    <div className="split_text_clip">
                        <p text-split="" className="text-reg">저의 포트폴리오에 오신 것을 환영합니다.</p>
                    </div>
                </div>

                <div className="item photo">
                    <div className="item__bg pj03_img"></div>
                </div>

                <div className="item desc_01">
                    <div className="split_text_clip">
                        <p text-split="" className="text-reg">INTRODUCE</p>
                    </div>
                    <p className="desc">
                        YouTube API v3를 활용하여 음악 유튜브 사이트를 만들어보았습니다.
                        <li>
                            <span>Postman</span>: API 요청을 테스트하고 디버깅하는 데 사용되었습니다. Postman을 통해 YouTube API와의 통신을 검증하고, 요청 구조를 최적화했습니다.
                        </li>
                    </p>
                    <div className="item__bg"></div>
                </div>

                <div className="item desc_02">
                    <div className="split_text_clip">
                        <p text-split="" className="text-reg">TOOLS</p>
                    </div>
                    <ul className="desc">

                    </ul>
                    <div className="item__bg"></div>
                </div>


                <div className="item">
                    <div className="split_text_clip">
                        <p text-split="" className="text-reg">CODE</p>
                        <p text-split="" className="text-reg">CODE</p>
                    </div>
                    <a href='https://github.com/elese0821/php-project' className="item__bg hover_effect"></a>
                </div>

                <div className="item">
                    <div className="split_text_clip">
                        <p text-split="" className="text-reg">VIEW</p>
                        <p text-split="" className="text-reg">VIEW</p>
                    </div>
                    <a href='http://hoho.dothome.co.kr/project/php/php-project-main/home/main.php' className="item__bg hover_effect"></a>
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

export default Teamphp