import React from 'react'
import CheckNav from '../components/CheckOut/CheckNav'
import Footer from '../commons/Footer'



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
                        <img src="" />
                        <div className="">在台現貨/贈10禮 免運 可到付 酷貝樂/艾尚寶 高景觀 可坐可躺 雙向推車 請詢問確認再下單</div>
                        <div>規格</div>
                        <div>$1000</div>
                        <div>
                            <div className="button">-</div>
                            <input type="number" className="input" />
                            <div className="button">+</div>
                        </div>
                        <div>$1000</div>
                    </div>
                    <div className="check-send">
                        <div>留言</div>
                        <div>寄送資訊</div>
                    </div>
                    <div className="check-ordermoney">訂單金額</div>
                </div>
                <div>
                    <div>全站折價券</div>
                    <div>內容</div>
                </div>
                <div>
                    <div>付款方式</div>
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