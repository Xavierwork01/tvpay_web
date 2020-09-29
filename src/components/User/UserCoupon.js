import React from 'react'
import { BiChevronRight } from 'react-icons/bi'

class UserCoupon extends React.Component{

    

        open() {

            var modal = document.querySelector('.modal')
            modal.classList.add('is-active')
        }

        close(){

            var modal = document.querySelector('.modal')
            modal.classList.remove('is-active')

        }
    

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
                <div className="coupon-class1 columns is-gapless">
                    <div className="column is-2">TvPay專屬優惠券</div>
                    <div className="column is-2">合作商家優惠券</div>
                </div>
                <div className="coupon-class2 columns is-gapless">
                    <div className="column">全部</div>
                    <div className="column">TvPay提供</div>
                    <div className="column">賣家提供</div>
                </div>
                <div className="coupon-state columns is-gapless">
                    <div className="column is-2">可使用</div>
                    <div className="column is-2">已使用</div>
                    <div className="column is-2">無效</div>
                </div>
                <div className="coupon-box">
                    <div className="coupon-card">
                        <div className="coupon-head">
                            <p>TvPay</p>
                            <div className="coupon-dot1">
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                            </div>
                            <div className="coupon-dot2"></div>
                            <div className="coupon-dot3"></div>
                        </div>
                        <div className="coupon-body">
                            <div className="coupon-text pr-5 pl-5">
                                <div>8折 低消$1 最高折 $50</div>
                                <p>有效日期. 2020.09.09</p>
                            </div>
                            <a className="coupon-use" data-target="modal" onClick={this.open}>使用規則</a>
                            
                        </div>
                    </div>
                    <div className="modal" id="modal-1">
                        <div className="modal-background"></div>
                        <div className="modal-card">
                            <header className="modal-card-head">
                            <p className="modal-card-title">使用說明</p>
                            <button className="delete" aria-label="close" onClick={this.close}></button>
                            </header>
                            <section className="modal-card-body">
                                
                            </section>
                            <footer className="modal-card-foot">
                            <button className="button is-success">確定</button>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default UserCoupon