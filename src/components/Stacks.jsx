import React from 'react';
import useLoad from '../hook/useLoad'
import useClose from '../hook/useClose'
import useSplitType from '../hook/useSplitType'
import useSet from '../hook/useSet';

const Stacks = () => {
    useSplitType();
    useSet()
    useLoad();
    useClose();
    return (
        <div id='section' className='stacks'>
            <div className="textWrap-tit">
                <div className="title-text">
                    <h1 text-split="" className="LoadingText">
                        USED STACKS
                    </h1>
                </div>
            </div>
            <div className="main_grid">
                <div className="item">
                    <div className="split_text_clip">
                        <div text-split="" className="text-reg">USED STACKS</div>
                        <div text-split="" className="text-reg">USED STACKS</div>
                    </div>
                    <div className="item__bg"></div>
                </div>

                <div className="item desc_01">
                    <div className="split_text_clip">
                        <p text-split="" className="text-reg">TOOLS</p>
                    </div>
                    <div className="line_text_clip">
                        <p line-split="" className="line-reg">
                            즐기면 더 잘한다는 마음으로

                            저는 항상 새로운 도전에 대한 열정과 긍정적인 자세를 가지고 있습니다.
                            어려움을 마주할 때도 포기하지 않고 문제에 집중하여
                            해결책을 찾아내는 능력을 갖추려고 노력하고 있습니다.
                        </p>
                    </div>
                    <div className="item__bg"></div>
                </div>

                <div className="item desc_02">
                    <div className="split_text_clip">
                        <p text-split="" className="text-reg">Databases</p>
                    </div>
                    <div className="line_text_clip">
                        <p line-split="" className="line-reg">
                            즐기면 더 잘한다는 마음으로

                            저는 항상 새로운 도전에 대한 열정과 긍정적인 자세를 가지고 있습니다.
                            어려움을 마주할 때도 포기하지 않고 문제에 집중하여
                            해결책을 찾아내는 능력을 갖추려고 노력하고 있습니다.
                        </p>
                    </div>
                    <div className="item__bg"></div>
                </div>
                <div className="item desc_03">
                    <div className="split_text_clip">
                        <p text-split="" className="text-reg">FRAMEWORK</p>
                    </div>
                    <div className="line_text_clip">
                        <p line-split="" className="line-reg">
                            문제에서 기회를 포착하고, 해결을 통한 성취감을 좋아합니다.
                            React 등 프레임워크 환경에서 컴포넌트 단위의 마크업 작업을 능숙하게 할 수 있어요.
                        </p>
                    </div>
                    <div className="item__bg"></div>
                </div>
                <div className="item desc_04">
                    <div className="split_text_clip">
                        <p text-split="" className="text-reg">LIBRARY</p>
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