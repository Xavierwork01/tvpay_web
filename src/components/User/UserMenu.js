import React from 'react'
import { RiVipLine , RiCoinsLine , RiFilePaper2Line } from 'react-icons/ri'
import { FaTicketAlt , FaHeart , FaRegKissWinkHeart } from 'react-icons/fa'
import { IoMdHelpCircleOutline } from 'react-icons/io'
import { GoCreditCard } from 'react-icons/go'
import { BsWallet } from 'react-icons/bs'
import { BiPencil } from 'react-icons/bi'
import { Link } from 'react-router-dom'


class UserMenu extends React.Component{


    render(){

        return(
            <>
            <div className="usermenu">
                <div className="user-header">
                    <div className="user-img">
                        <img src="" />
                    </div>
                    <div>
                        <p>username</p>
                        <p>TV18050001</p>
                        <a href="#" className="button">
                            <BiPencil className="track-icon"/>
                            <Link to="/user/account" className="adit-account">編輯個人資料</Link>
                        </a>
                    </div>
                </div>
                <div className="user-content">
                    <Link to="/user/like" className="user-items">
                        <FaHeart className="user-icon"/>
                        <p>追蹤 | 足跡</p>
                    </Link>
                    <Link to="/user/brand" className="user-items">
                        <FaRegKissWinkHeart className="user-icon"/>
                        <p>我的愛牌</p>
                    </Link>
                    <a href="#" className="user-items">
                        <RiVipLine className="user-icon"/>
                        <p>會員福利</p>
                    </a>
                    <Link to="/user/order" className="user-items">
                        <RiFilePaper2Line className="user-icon"/>
                        <p>訂單查詢</p>
                    </Link>
                    <Link to="/user/coupon" className="user-items">
                        <FaTicketAlt className="user-icon"/>
                        <p>折價券</p>
                    </Link>
                    <a href="#" className="user-items">
                        <GoCreditCard className="user-icon"/>
                        <p>信用卡管理</p>
                    </a>
                    <Link to="/user/receive" className="user-items">
                        <BsWallet className="user-icon"/>
                        <p>收件人管理</p>
                    </Link>
                    <a href="#" className="user-items">
                        <IoMdHelpCircleOutline className="user-icon"/>
                        <p>幫助中心</p>
                    </a>
                    <a href="#" className="user-items">
                        <RiCoinsLine className="user-icon"/>
                        <p>我要賺福利金</p>
                    </a>
                </div>
            </div>　
            </>
        )
    }
}


export default UserMenu