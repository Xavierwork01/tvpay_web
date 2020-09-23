import React from 'react'
import Layout from './Layout'
import { RiCoupon2Fill } from 'react-icons/ri'
import { RiCoupon3Fill } from 'react-icons/ri'


class ShoppingCart extends React.Component{


    render(){

        return(
            <>
            <Layout>
                <div className="shoppingcart">
                    <div className="shop-voucher">
                        點我領取運費抵用券！！！ 領取優惠券
                    </div>
                    <div className="shop-header">
                        <div className="shop-item1">
                            <input type="checkbox" />
                            <div>商品</div>
                        </div>
                        <div className="shop-item2">
                            <div>單價</div>
                            <div>數量</div>
                            <div>總計</div>
                            <div>操作</div>
                        </div>
                    </div>
                    <div className="shop-car">
                        <input type="checkbox"  />
                        <div className="shop-img">
                            <img src=""/>
                        </div>
                        <div className="shop-name">在台現貨/贈10禮 免運 可到付 酷貝樂/艾尚寶 高景觀 可坐可躺 雙向推</div>
                        <div className="shop-format">
                            規格
                        </div>
                        <div className="shop-unitprice">$2450</div>
                        <div className="shop-mount">
                            <button>-</button>
                            <input type="number" />
                            <button>+</button>
                        </div>
                        <div className="shop-total">總計</div>
                        <div className="shop-del">刪除</div>
                    </div>
                    <div className="shop-coupon">
                        <div className="shop-coupon-header">
                        <RiCoupon2Fill/>
                        全站折價券
                            <button className="button">選擇折價券</button>
                        </div>
                        <div className="shop-coupon-content">
                            <div>
                                <RiCoupon3Fill/>
                                <p>蝦皮卷</p>
                            </div>
                            <div>$1000</div>
                        </div>
                        <div className="shop-coupon-footer">
                            <div className="shop-select">
                                <input type="checkbox" />
                                <div>全選</div>
                            </div>
                            <div className="shop-result">
                                <div className="shop-money">
                                    <div>購買總金額 : </div>
                                    <span>$0</span>
                                    <div>可獲得的X幣 : 0 X幣</div>
                                </div>
                                <button className="button">去買單</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
            </>
        )
    }
}


export default ShoppingCart