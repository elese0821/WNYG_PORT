import React from 'react'
import useSet from '../hook/useSet'
import useClose from '../hook/useClose';
import useLoad from '../hook/useLoad';
import useSplitType from '../hook/useSplitType';
import { useLocation } from 'react-router-dom';


const Main = ({ children }) => {
    const location = useLocation();

    if (location.pathname !== '/') {
        useSplitType();
        useSet();
        useClose();
        useLoad();
    }
    return (
        <div id='mainbg'>{children}
        </div>
    )
}

export default Main