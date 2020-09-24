import React from 'react'
import CheckNav from '../components/CheckOut/CheckNav'
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
                    <div className="check-content">
                        <a href="#">
                            <img src="" />
                            <div className="check-text">在台現貨/贈10禮 免運 可到付 酷貝樂/艾尚寶 高景觀 可坐可躺 雙向推車 請詢問確認再下單</div>
                        </a>
                        <div className="check-format">規格</div>
                        <div className="check-unitprice">$1000</div>
                        <div className="check-mount">1</div>
                        <div className="check-total">$1000</div>
                    </div>
                    <div className="check-send">
                        <div className="check-leave">
                            <span>留言 : </span>
                            <input type="text" className="input" />
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
                    <div>
                        <div>付款方式</div>
                        <div></div>
                        <div></div>
                    </div>
                    <div>內容</div>
                    <div>下訂單</div>
                </div>
            </div>
            <Footer/>
            </>
        )
    }
}


export default CheckOut