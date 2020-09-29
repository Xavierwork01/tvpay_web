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
                    <div className="mr-3 ml-3">新增折價券</div>
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
                            <a className="coupon-use" data-target="modal" onClick={this.open}>使用說明</a>
                        </div>
                    </div>
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
                            <a className="coupon-use" data-target="modal" onClick={this.open}>使用說明</a>
                        </div>
                    </div>
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
                            <a className="coupon-use" data-target="modal" onClick={this.open}>使用說明</a>
                        </div>
                    </div>
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
                            <a className="coupon-use" data-target="modal" onClick={this.open}>使用說明</a>
                        </div>
                    </div>
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
                            <a className="coupon-use" data-target="modal" onClick={this.open}>使用說明</a>
                        </div>
                    </div>
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
                            <a className="coupon-use" data-target="modal" onClick={this.open}>使用說明</a>
                        </div>
                    </div>
                </div>
                

                <div className="modal" id="modal-1">
                    <div className="modal-background" onClick={this.close}></div>
                    <div className="modal-card">
                        <header className="modal-card-head">
                        <p className="modal-card-title">使用說明</p>
                        <button className="delete" aria-label="close" onClick={this.close}></button>
                        </header>
                        <section className="modal-card-body">
                            <div>
                                <div></div>
                                <div className="modal-content">
                                    <div>
                                        <p>優惠內容</p>
                                        <p>8折 低消$1 最高折 $50</p>
                                    </div>
                                    <div>
                                        <p>有效期限</p>
                                        <p>2020.09.09 00:00 - 2020.09.09 23:59</p>
                                    </div>
                                    <div>
                                        <p>裝置</p>
                                        <p>適用於所有付款方式</p>
                                    </div>
                                    <div>
                                        <p>商品</p>
                                        <p>僅適用於指定商品</p>
                                    </div>
                                    <div>
                                        <p>付款</p>
                                        <p>適用於所有物流方式</p>
                                    </div>
                                    <div>
                                        <p>物流</p>
                                        <p>適用於所有物流方式</p>
                                    </div>
                                    <div>
                                        <p>查看詳情</p>
                                        <p>折扣代碼【SHOPEE999】
                                        ，結帳滿$1元即可享有8折優惠
                                        ，最高現折$50元！數量有限，
                                        兌完為止。（此折扣代碼為蝦皮購物提供
                                        ，請在購物車/結帳頁內全站折價券入口輸入或選用
                                        ，同一帳號/同一人限使用一次。
                                        折扣代碼不適用於服務票券類商品、特定類別、
                                        特定店家與特定Dyson/Apple/Android/小米系列商品，
                                        若有任何使用上的問題請洽詢客服，我們將竭誠為你服務</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <footer className="modal-card-foot">
                        </footer>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default UserCoupon