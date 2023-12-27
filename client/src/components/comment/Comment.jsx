import React from 'react'
import CommentArea from './CommentArea'
import { IoCloseOutline } from "react-icons/io5";

const Comment = () => {

    return (
        <div id='commentModal'>
            <div className="commentModal">
                <h4>COMMENTS</h4>
                <CommentArea />
                <button className='popupClose btnStyle'>
                    <IoCloseOutline size={20} />
                </button>
            </div>
        </div>
    )
}

export default Comment