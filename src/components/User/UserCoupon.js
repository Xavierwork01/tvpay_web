import React from 'react'
import { BiChevronRight } from 'react-icons/bi'

class UserCoupon extends React.Component{


    render(){

        return(
            <>
            <div className="usercoupon">
                <div className="coupon-title">
                    <div>我的折價券</div>
                    <a href="#">了解更多<BiChevronRight/></a>
                </div>
                <div className="coupon-enter">
                    <div>新增折價券</div>
                    <input type="text" placeholder="輸入折價卷序號" className="input" />
                    <div className="button">儲存</div>
                </div>
                <div>
                    <div>TvPay專屬優惠券</div>
                    <div>合作商家優惠券</div>
                </div>
                <div>
                    <div>全部</div>
                    <div>TvPay提供</div>
                    <div>賣家提供</div>
                </div>
                <div>
                    <div>可使用</div>
                    <div>已使用</div>
                    <div>無效</div>
                </div>
                <div>
                    <div className="coupon-box">
                        <div className="coupon-head">
                            
                            <div className="coupon-dots">
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                            </div>
                        </div>
                        <div className=""></div>
                        <div className=""></div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default UserCoupon