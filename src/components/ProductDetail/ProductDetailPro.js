import React from 'react'
import { Swiper , SwiperSlide } from 'swiper/react'
import SwiperCode,{ Navigation , Pagination , Autoplay ,Thumbs} from 'swiper'
import '../../../node_modules/swiper/swiper-bundle.css'


SwiperCode.use([Navigation , Pagination ,Autoplay ,Thumbs])


class ProductDetailPro extends React.Component{


    render(){

        return (

            <>
                <div className="productdetail-pro">
                        <div className="productdetail-slider">
                            <Swiper
                            className="productdetail-preview"
                            thumbs={{
                                swiper:{
                                    el:'.productdetail-gallery',
                                    slidesPerView:5,
                                    watchSlidesProgress:true,
                                    watchSlidesVisibility:true,
                                }
                            }}
                            watchSlidesVisibility={true}
                            simulateTouch={false}
                            
                            >
                                <SwiperSlide className="preview-box">
                                    <img src="/images/image1.png"/>
                                </SwiperSlide>
                                <SwiperSlide className="preview-box">
                                    <img src="/images/2.jpg"/>
                                </SwiperSlide>
                                <SwiperSlide className="preview-box">
                                    <img src="/images/下載.jpg"/>
                                </SwiperSlide>
                                <SwiperSlide className="preview-box">
                                    <img src="/images/HtwPzgej.jpg"/>
                                </SwiperSlide>
                                <SwiperSlide className="preview-box">
                                    <img src="/images/246x0w.png"/>
                                </SwiperSlide>
                                <SwiperSlide className="preview-box">
                                    <img src="/images/image1.png"/>
                                </SwiperSlide>
                                <SwiperSlide className="preview-box">
                                    <img src="/images/2.jpg"/>
                                </SwiperSlide>
                                <SwiperSlide className="preview-box">
                                    <img src="/images/下載.jpg"/>
                                </SwiperSlide>
                                <SwiperSlide className="preview-box">
                                    <img src="/images/HtwPzgej.jpg"/>
                                </SwiperSlide>
                                <SwiperSlide className="preview-box">
                                    <img src="/images/246x0w.png"/>
                                </SwiperSlide>
                            </Swiper>
                            <Swiper
                            navigation
                            className="productdetail-gallery"
                            slidesPerView={5}
                            width={450}
                            height={90}
                            >
                                <SwiperSlide className="gallery-box">
                                    <img src="/images/image1.png"/>
                                </SwiperSlide>
                                <SwiperSlide className="gallery-box">
                                    <img src="/images/2.jpg"/>
                                </SwiperSlide>
                                <SwiperSlide className="gallery-box">
                                    <img src="/images/下載.jpg"/>
                                </SwiperSlide>
                                <SwiperSlide className="gallery-box">
                                    <img src="/images/HtwPzgej.jpg"/>
                                </SwiperSlide>
                                <SwiperSlide className="gallery-box">
                                    <img src="/images/246x0w.png"/>
                                </SwiperSlide>
                                <SwiperSlide className="gallery-box">
                                    <img src="/images/image1.png"/>
                                </SwiperSlide>
                                <SwiperSlide className="gallery-box">
                                    <img src="/images/2.jpg"/>
                                </SwiperSlide>
                                <SwiperSlide className="gallery-box">
                                    <img src="/images/下載.jpg"/>
                                </SwiperSlide>
                                <SwiperSlide className="gallery-box">
                                    <img src="/images/HtwPzgej.jpg"/>
                                </SwiperSlide>
                                <SwiperSlide className="gallery-box">
                                    <img src="/images/246x0w.png"/>
                                </SwiperSlide>
                            </Swiper>
                            <div className="productdetail-tool">
                                <div className="productdetail-share">
                                    <div>分享 : </div>
                                    <button><i class="fab fa-facebook"></i></button>
                                    <button><i class="fab fa-google-plus"></i></button>
                                    <button><i class="fab fa-line"></i></button>
                                </div>
                                <div className="productdetail-like">
                                    <button><i class="far fa-heart"></i></button>
                                    <div>喜歡</div>
                                </div>
                            </div>
                        </div>
                        <div className="productdetail-minutiae">
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
                                        <div>免運 : 滿500，免運</div>
                                        <div>運費 : 100</div>
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
                                <button className="button cart-btn1 is-white">加入購物車</button>
                                <button className="button is-danger cart-btn2">直接購買</button>
                            </div>
                            {/* <div className="productdetail-message">
                                <div>15天鑑賞期</div>
                                <div>退貨無負擔</div>
                                <div>假一賠二</div>
                            </div> */}
                        </div>
                    </div>
            </>

        )
    }
}

export default ProductDetailPro