import React from 'react'
import { FaSearch } from 'react-icons/fa'


class ShopNav extends React.Component{


    render(){

        return (

            <>
            <div className="shopnav">
                <div className="shopnav-hd">
                    <div className="shopnav-tool">
                        <div className="shopnav-features">
                            <a href="#">會員中心</a>
                            <div className="shopnav-download">
                                <a href="#" className="download-link">下載</a>
                            </div>
                            <a href="#">瀏覽紀錄</a>
                        </div>
                        <div className="shopnav-state">
                            <a href="#">註冊</a>
                            <a href="#">登入</a>
                        </div>
                    </div>
                </div>
                <div className="shopnav-search">
                    <div className="shopnav-search-bar">
                        <div className="logo-link">
                            <a href="">
                                <img src="https://tvott.com.tw/images/200.png"></img>
                            </a>
                            <div className="logo-text">購物車</div>
                        </div>
                        <div className="search-box">
                            <input type="" placeholder="搜尋關鍵字"></input>
                            <button className="button"><FaSearch className="" /></button>
                        </div>
                    </div>    
                </div>
            </div>
            </>
        )
    }
}


export default ShopNav