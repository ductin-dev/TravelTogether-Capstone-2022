import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import UserInforTag from '../Common/UserInforTag'
import CommentItem from './CommentItem'

type Props = {}

const PostItem = (props: Props) => {
    return (
        <div className="card">
            <UserInforTag fullName={'Tran Phi Anh'} dateCreate={''} avatar={''} />
            <img src="https://i.imgur.com/xhzhaGA.jpg" className="img-fluid" />
            <div className="p-2">
                <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                <hr />
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex flex-row icons d-flex align-items-center"> <i className="fa fa-heart" aria-hidden="true"></i> <i className="fa fa-smile-o ml-2"></i> </div>
                    <div className="d-flex flex-row muted-color"> <span>2 comments</span> <span className="ml-2">Share</span> </div>
                </div>
                <hr />
            </div>
            <CommentItem />
        </ div>
    )
}

export default PostItem