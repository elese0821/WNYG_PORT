import React from 'react';
import useMain from '../hook/useMain';

const Home = () => {
    useMain();
    return (
        <main id="mainSection">
            <div className="title_wrap">
                <div className="title_clip">
                    <h1 className="mainText" text-split="">Developer</h1>
                </div>
            </div>

            <div className="wonyoungWrap">
                <div className="wonyoung">
                    <h1 text-split="" className="LoadingText lt_top">
                        won
                    </h1>
                    <h1 text-split="" className="LoadingText lt_btm">
                        young
                    </h1>
                </div>
            </div>

            <div className="main__gird">
                <div className="item i1">
                    <div>
                        <div className="split_text_clip">
                            <div text-split="" className="text-reg">ABOUT ME</div>
                            <div text-split="" className="text-reg">ABOUT ME</div>
                        </div>
                        <div className="item__bg"></div>
                    </div>
                </div>
                <div className="item i2">
                    <div>
                        <div className="split_text_clip">
                            <div text-split="" className="text-reg">SIMPLE BLOG</div>
                            <div text-split="" className="text-reg">SIMPLE BLOG</div>
                        </div>
                        <div className="item__bg"></div>
                    </div>
                </div>
                <div className="item i3">
                    <div>
                        <div className="split_text_clip">
                            <div text-split="" className="text-reg">YOUTUBE PROJECT</div>
                            <div text-split="" className="text-reg">YOUTUBE PROJECT</div>
                        </div>
                        <div className="item__bg"></div>
                    </div>
                </div>
                <div className="item i4">
                    <div>
                        <div className="split_text_clip">
                            <div text-split="" className="text-reg">MOVIE PROJECT</div>
                            <div text-split="" className="text-reg">MOVIE PROJECT</div>
                        </div>
                        <div className="item__bg"></div>
                    </div>
                </div>
                <div className="item i5 text-btm">
                    <div>
                        <div className="split_text_clip">
                            <div text-split="" className="text-reg">PERRAR</div>
                            <div text-split="" className="text-reg">PERRAR</div>
                        </div>
                        <div className="item__bg"></div>
                    </div>
                </div>
                <div className="item i6 text-btm">
                    <div>
                        <div className="split_text_clip">
                            <div text-split="" className="text-reg">SEXYBRAIN</div>
                            <div text-split="" className="text-reg">SEXYBRAIN</div>
                        </div>
                        <div className="item__bg"></div>
                    </div>
                </div>
                <div className="item i7 text-btm">
                    <div>
                        <div className="split_text_clip">
                            <div text-split="" className="text-reg">QUIZ PROJECT</div>
                            <div text-split="" className="text-reg">QUIZ PROJECT</div>
                        </div>
                        <div className="item__bg"></div>
                    </div>
                </div>
                <div className="item i8 text-btm">
                    <div>
                        <div className="split_text_clip">
                            <div text-split="" className="text-reg">Javascript</div>
                            <div text-split="" className="text-reg">Javascript</div>
                        </div>
                        <div className="item__bg"></div>
                    </div>
                </div>
                <div className="item i9 text-btm">
                    <div>
                        <div className="split_text_clip">
                            <div text-split="" className="text-reg">CONTACT ME</div>
                            <div text-split="" className="text-reg">CONTACT ME</div>
                        </div>
                        <div className="item__bg"></div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home