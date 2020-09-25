import React from 'react'
import CheckNav from '../components/CheckOut/CheckNav'
import CheckPro from '../components/CheckOut/CheckPro'
import Footer from '../commons/Footer'
import { RiCoupon2Fill } from 'react-icons/ri'
import { RiCoupon3Fill } from 'react-icons/ri'



class CheckOut extends React.Component{


    render(){

        return(
            
            <>
            <CheckNav/>
            <div className="checkout">
                <div className="check-header">
                    <div className="check-title">
                        <div className="check-name">訂單商品</div>
                        <div className="check-money">
                            <div>單價</div>
                            <div>數量</div>
                            <div>總價</div>
                        </div>
                    </div>
                    <CheckPro/>
                    <CheckPro/>
                    <CheckPro/>
                    <div className="check-send">
                        <div className="check-leave">
                            <span>留言 : </span>
                            <input type="text" className="input" placeholder="留言給賣家"/>
                        </div>
                        <div className="check-post">
                            <div className="post-title">
                                <div>寄送資訊</div>
                                <div>$150</div>
                            </div>
                            <div className="post-address">
                                <div>中華郵政</div>
                                <button className="button">+ 新增收件人地址</button>
                            </div>
                        </div>
                    </div>
                    <div className="check-ordermoney">訂單金額 :<p>$1000</p></div>
                </div>
                <div className="check-coupon">
                    <div className="check-coupon-header">
                        <div className="check-coupon-item1">
                            <RiCoupon2Fill className="coupon-icon" />
                            <div>全站折價券</div>
                        </div>
                        <div className="check-coupon-item2 button">選擇折價券</div>
                    </div>
                    <div className="check-coupon-content">
                        <div className="check-coupon-item1">
                            <RiCoupon3Fill className="coupon-icon" />
                            <div>蝦皮券</div>
                        </div>
                        <div className="check-coupon-item2">-$1000</div>
                    </div>
                </div>
                <div className="check-pay">
                    <div className="check-pay-title">
                        <div className="pay-the-way">付款方式</div>
                        <button className="button">銀行轉帳</button>
                        <button className="button">信用卡/金融卡</button>
                    </div>
                    <div className="check-all-money">
                        <div className="check-money">
                            <div>商品總金額 :</div>
                            <p>$2400</p>
                        </div>
                        <div className="check-money">
                            <div>運費總金額 :</div>
                            <p>$150</p>
                        </div>
                        <div className="check-money">
                            <div>總付款金額 :</div>
                            <p className="settlement">$2,600</p>
                        </div>
                    </div>
                    <div className="check-neworder">
                        <button className="button is-danger">下訂單</button>
                    </div>
                </div>
            </div>
            <Footer/>
            </>
        )
    }
}


export default CheckOut