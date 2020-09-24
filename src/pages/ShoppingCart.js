import React from 'react'
import ShopNav from '../components/ShoppingCart/ShopNav'
import Footer from '../commons/Footer'
import ShopCar from '../components/ShoppingCart/ShopCar'
import { RiCoupon2Fill } from 'react-icons/ri'
import { RiCoupon3Fill } from 'react-icons/ri'


class ShoppingCart extends React.Component{


    render(){

        return(
            <>
            <ShopNav/>
                <div className="shoppingcart">
                    <div className="shop-voucher">
                        <a href="#">點我領取優惠券！！！</a>
                    </div>
                    <div className="shop-header">
                        <div className="shop-item1">
                            <div className="shop-car-chk"><input type="checkbox" /></div>
                            <div className="shop-name">商品</div>
                        </div>
                        <div className="shop-item2">
                            <div>單價</div>
                            <div>數量</div>
                            <div>總計</div>
                            <div>操作</div>
                        </div>
                    </div>
                    <ShopCar/>
                    <ShopCar/>
                    <ShopCar/>
                    <div className="shop-coupon">
                        <div className="shop-coupon-header">
                            <RiCoupon2Fill/>
                            <span>全站折價券</span>
                            <div className="button">選擇折價券</div>
                        </div>
                        <div className="shop-coupon-content">
                            <div className="shop-car-chk"><input type="checkbox" /></div>
                            <div className="shop-coupon-name">
                                <RiCoupon3Fill className="coupon-icon"/>
                                <span>蝦皮卷</span>
                            </div>
                            <div>-$1000</div>
                        </div>
                        <div className="shop-coupon-content">
                            <div className="shop-car-chk"><input type="checkbox" /></div>
                            <div className="shop-coupon-name">
                                <RiCoupon3Fill className="coupon-icon"/>
                                <span>蝦皮卷</span>
                            </div>
                            <div>-$1000</div>
                        </div>
                        <div className="shop-coupon-content">
                            <div className="shop-car-chk"><input type="checkbox" /></div>
                            <div className="shop-coupon-name">
                                <RiCoupon3Fill className="coupon-icon"/>
                                <span>蝦皮卷</span>
                            </div>
                            <div>-$1000</div>
                        </div>
                        <div className="shop-coupon-footer">
                            <div className="shop-select">
                                <div className="shop-car-chk"><input type="checkbox" /></div>
                                <span>全選</span>
                            </div>
                            <div className="shop-result">
                                <div className="shop-money">
                                    <div>購買總金額 : <span>$0</span></div>
                                    <p>可獲得的X幣 : 0 X幣</p>
                                </div>
                                <button className="button is-danger">去買單</button>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer/>
            </>
        )
    }
}


export default ShoppingCart