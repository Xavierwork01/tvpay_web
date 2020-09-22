import React from 'react'
import Layout from './Layout'
import { Swiper , SwiperSlide } from 'swiper/react'
import SwiperCode,{ Navigation , Pagination , Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'

SwiperCode.use([Navigation , Pagination ,Autoplay])




class ProductDetail extends React.Component{

    render(){

        return(
            <>
            <Layout>
                <div className="productdetail">
                <div className="productdetail-slider">
                    <Swiper
                    className="productdetail-preview"
                    slidesPerView={1}
                    >
                        <SwiperSlide className="preview-box">
                            <img src=""></img>
                        </SwiperSlide>
                    </Swiper>
                    <Swiper
                    className="productdetail-gallery"
                    navigation
                    slidesPerView={5}
                    freeMode={true}
                    watchSlidesVisibility={true}
                    watchSlidesProgress={true}
                    width={450}
                    height={95}
                    >
                        <SwiperSlide className="gallery-box">
                            <img src="../public/images/2.png"></img>
                        </SwiperSlide>
                        <SwiperSlide className="gallery-box">
                            <img src=""></img>
                        </SwiperSlide>
                        <SwiperSlide className="gallery-box">
                            <img src=""></img>
                        </SwiperSlide>
                        <SwiperSlide className="gallery-box">
                            <img src=""></img>
                        </SwiperSlide>
                        <SwiperSlide className="gallery-box">
                            <img src=""></img>
                        </SwiperSlide>
                        <SwiperSlide className="gallery-box">
                            <img src=""></img>
                        </SwiperSlide>
                    </Swiper>
                </div>
                    <div className="productdetail-content">
                        <div className="productdetail-title">
                        <span>ASUS 華碩 VivoBook S533 S533FL 15吋 獨顯 筆電 幻彩白/搖滾黑/魔力紅</span>
                        </div>
                        <div className="productdetail-state">
                            <div className="score">
                            <a href="#">5.0</a>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            </div>
                            <div className="eva"><a href="#">36</a> 評價</div>
                            <div className="sell">已售出</div>
                        </div>
                        <div className="productdetail-money">
                            <div className="price1">$34000</div>
                            <div className="price2">$29973</div>
                            <div className="onsale">8.6折</div>
                        </div>
                        <div className="productdetail-items">
                            <div className="productdetail-item1">
                                <label>折價券</label>
                                <div>現折$200</div>
                            </div>
                            <div className="productdetail-item2">
                                <label>加價購</label>
                                <div>加價購</div>
                            </div>
                            <div className="productdetail-item3">
                                <label>X幣</label>
                                <div>下單現賺100X幣</div>
                            </div>
                            <div className="productdetail-item4">
                                <label>運送</label>
                                <div>
                                    <div>免運</div>
                                    <div>運費</div>
                                </div>
                            </div>
                            <div className="productdetail-item5">
                                <label>顏色</label>
                                <button className="button">顏色1</button>    
                                <button className="button">顏色2</button>    
                                <button className="button">顏色3</button>    
                            </div>
                            <div className="productdetail-item6">
                                <label>數量</label>
                                <button className="button">-</button>
                                <input type="number" className="input"/>
                                <button className="button">+</button>
                                <div>還剩11件</div>
                            </div>
                        </div>
                        <div className="productdetail-cart">
                            <button className="button cart-btn1">加入購物車</button>
                            <button className="button is-danger cart-btn2">直接購買</button>
                        </div>
                        {/* <div className="productdetail-message">
                            <div>15天鑑賞期</div>
                            <div>退貨無負擔</div>
                            <div>假一賠二</div>
                        </div> */}
                    </div>
                </div>
            </Layout>
            </>
        )
    }
}


export default ProductDetail