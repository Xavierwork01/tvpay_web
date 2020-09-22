import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { CgShoppingCart } from 'react-icons/cg'

class Header extends React.Component{
    render(){
        return (
            <>
            <div className="header-wrapper">
                <div className="header">
                    <div className="header-left">
                        <a href="#">會員中心</a>
                        <div className="tvpay-download">
                            <a href="#" className="tvpay-drawer">下載</a>
                        </div>
                        <a href="#">瀏覽紀錄</a>
                    </div>
                    <div className="header-right">
                        <a href="#">註冊</a>
                        <a href="#">登入</a>
                    </div>
                </div>
                <div className="header-search">
                    <div className="logo-link">
                        <a href="">
                            <img src="https://tvott.com.tw/images/200.png"></img>
                        </a>
                    </div>
                    <div className="search-box">
                        <div className="search-input">
                            <input type="text" placeholder="搜尋關鍵字"></input>
                            <button className="button"><FaSearch className="search-btn-icon" /></button>
                        </div>
                        <div className="search-link">
                                <a href="#">3C</a>
                                <a href="#">衣服</a>
                                <a href="#">家電</a>
                                <a href="#">口罩</a>
                                <a href="#">酒精</a>
                        </div>
                    </div>
                    <div className="shopping-cart dropdown is-right is-hoverable">
                            <CgShoppingCart className="shopping-icon dropdown-trigger" />
                            <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                                <div class="dropdown-content">
                                <div class="dropdown-item">
                                    <div>這裡好空哦~</div>
                                </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Header