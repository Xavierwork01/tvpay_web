import React from 'react'
import { RiVipLine , RiCoinsLine , RiFilePaper2Line } from 'react-icons/ri'
import { FaTicketAlt , FaHeart , FaRegKissWinkHeart } from 'react-icons/fa'
import { IoMdHelpCircleOutline } from 'react-icons/io'
import { GoCreditCard } from 'react-icons/go'
import { BsWallet } from 'react-icons/bs'


class MemberMenu extends React.Component{


    render(){

        return(
            <>
            <div className="membermenu">
                <div className="member-header">
                    <div className="member-img">
                        <img src="" />
                    </div>
                    <div>
                        <p>username</p>
                        <p>TV18050001</p>
                    </div>
                </div>
                <div className="member-content">
                    <a href="#" className="member-items">
                        <FaHeart className="member-icon"/>
                        <p>追蹤 | 足跡</p>
                    </a>
                    <a href="#" className="member-items">
                        <FaRegKissWinkHeart className="member-icon"/>
                        <p>我的愛牌</p>
                    </a>
                    <a href="#" className="member-items">
                        <RiVipLine className="member-icon"/>
                        <p>會員福利</p>
                    </a>
                    <a href="#" className="member-items">
                        <RiFilePaper2Line className="member-icon"/>
                        <p>訂單查詢</p>
                    </a>
                    <a href="#" className="member-items">
                        <FaTicketAlt className="member-icon"/>
                        <p>折價券</p>
                    </a>
                    <a href="#" className="member-items">
                        <GoCreditCard className="member-icon"/>
                        <p>信用卡管理</p>
                    </a>
                    <a href="#" className="member-items">
                        <BsWallet className="member-icon"/>
                        <p>收件人管理</p>
                    </a>
                    <a href="#" className="member-items">
                        <IoMdHelpCircleOutline className="member-icon"/>
                        <p>幫助中心</p>
                    </a>
                    <a href="#" className="member-items">
                        <RiCoinsLine className="member-icon"/>
                        <p>我要賺福利金</p>
                    </a>
                </div>
            </div>　
            </>
        )
    }
}


export default MemberMenu