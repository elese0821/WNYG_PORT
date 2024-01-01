import { useEffect } from 'react';
import SplitType from 'split-type';
import { useLocation } from 'react-router-dom';

const useSplitType = (homepath) => {
    const location = useLocation();

    useEffect(() => {
        if (homepath.pathname !== '/') {
            // SplitType 인스턴스 생성
            const textSplit = new SplitType('[text-split]', {
                types: 'words, chars',
                tagName: 'span',
            });
            const lineSplit = new SplitType('[line-split]', {
                types: 'lines',
                tagName: 'span',
            });

            // 컴포넌트가 언마운트될 때 리소스 정리
            return () => {
                textSplit.revert();
                lineSplit.revert();
            };
        }
    }, [location]);
};

export default useSplitType;