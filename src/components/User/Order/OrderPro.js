import React from 'react'
import { RiFilePaper2Line } from 'react-icons/ri'
import { AiOutlineShop } from 'react-icons/ai'


class OrderPro extends React.Component{


    render(){

        return(
            <>
            <div className="order-pro">
                <div className="order-header">
                    <div className="logo-img">
                        <img src="https://tvott.com.tw/images/200.png" />
                    </div>
                    <p>seller</p>
                    <div className="button"><AiOutlineShop/>查看賣場</div>
                </div>
                <div className="order-content">
                    <a href="#" className="order-link">
                        <div className="order-img">
                            <img src="" />
                        </div>
                        <div className="order-name">
                            <p>8/17奪寶戰 Apple Airpods2 真無線耳機</p>
                            <p>x1</p>
                        </div>
                    </a>
                    <div className="order-price">
                        <p className="price-del">$6290</p>
                        <p className="price-sales">$1</p>
                    </div>
                </div>
                <div className="order-cost">
                    <div className="cost-box">
                        <RiFilePaper2Line/>
                        <div>訂單金額 : </div>
                        <p>$1</p>
                    </div>
                </div>
                <div className="order-buy">
                    <div className="order-number">序號</div>
                    <div className="order-btns">
                        <div className="button btn1 is-danger">再買一次</div>
                        <div className="button btn2">取消訂單</div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}


export default OrderPro