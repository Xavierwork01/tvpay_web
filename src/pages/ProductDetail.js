import React from 'react'
import Layout from './Layout'
import { Swiper , SwiperSlide } from 'swiper/react'
import SwiperCode,{ Navigation , Pagination , Autoplay ,Thumbs, Controller} from 'swiper'
import 'swiper/swiper-bundle.css'


SwiperCode.use([Navigation , Pagination ,Autoplay ,Thumbs ,Controller])


class ProductDetail extends React.Component{

    render(){

        return(
            <>
            <Layout>
                <div className="productdetail">
                    <div className="productdetail-pro">
                        <div className="productdetail-slider">
                            <Swiper
                            className="productdetail-preview"
                            watchSlidesVisibility={true}
                            effect={'fade'}
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
                            </Swiper>
                            <Swiper
                            className="productdetail-gallery"
                            thumbs={{
                                swiper:{
                                    el:'.productdetail-preview',
                                }
                            }}
                            slideThumbActiveClass={'.productdetail-gallery'}
                            slidesPerView={5}
                            spaceBetween={5}
                            watchSlidesProgress={true}
                            watchSlidesVisibility={true}
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
                    <div className="productdetail-content">
                        <div className="detail-box1">
                            <div className="detail-header">商品規格</div>
                            <div className="detail-format">
                                <div className="detail-inside">
                                    <div className="detail-hd">
                                        <label>處理器</label>
                                        <div>Intel i5-10210U</div>
                                    </div>
                                    <div className="detail-hd">
                                        <label>硬碟容量</label>
                                        <div>500GB</div>
                                    </div>
                                    <div className="detail-hd">
                                        <label>品牌</label>
                                        <div>ASUS 華碩</div>
                                    </div>
                                    <div className="detail-hd">
                                        <label>NCC</label>
                                        <div>CCAF16LP1510T2</div>
                                    </div>
                                    <div className="detail-hd">
                                        <label>庫存</label>
                                        <div>7</div>
                                    </div>
                                    <div className="detail-hd">
                                        <label>出貨地</label>
                                        <div>台北市中正區</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="detail-box2">
                            <div className="detail-header">商品詳情</div>
                            <div className="detail-info">
                            商品特色：<br/>
                            搭載第10代intel core i5處理器、全鋁機身、通過軍規測試
                            <br/>
                            <br/>
                            型號：<br/>
                            S403FA-0232C10210U 玫瑰金<br/>
                            S403FA-0242S10210U 冰河藍
                            <br/><br/>
                            商品到貨隔日享蝦皮15天鑑賞(猶豫)期之權益【鑑賞(猶豫)期非試用期】，辦理退貨商品必須是完好狀態且需以本公司或特約商所使用的外包裝(紙箱或包裝袋)，妥善包裝後交付給前往取件的物流公司；若本公司或特約商的外包裝已經遺失，請您在商品原廠外盒外，再以其他適當的外盒進行包裝，請勿於商品原廠外盒上直接黏貼任何單據或書寫文字，否則將會影響退貨權限，此外也可能依照損毀程度扣除為回復原狀所必要的費用。
                            <br/><br/>
                            ●3C相關商品，為一次性包裝商品，請務必確認有購買需求後再拆封。<br/>
                            ●網頁商品會因為使用不同的品牌螢幕以及解析度不同，造成圖片顏色呈現略有不同，請以實品顏色為準。"
                            </div>
                        </div>
                    </div>
                    <div className="productdetail-eva">
                        <div className="eva-header">商品評價</div>
                        <div className="eva-rating">
                            <div className="eva-box">
                                <div className="eva-num">
                                    <span className="num-mag">5</span>
                                    <span>/5</span>
                                </div>
                                <div className="eva-star">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                            </div>
                            <button className="button">全部</button>
                            <button className="button">5星</button>
                            <button className="button">4星</button>
                            <button className="button">3星</button>
                            <button className="button">2星</button>
                            <button className="button">1星</button>
                            <button className="button">附上評論</button>
                            <button className="button">附上照片/影片</button>
                        </div>
                        <div className="eva-comment">
                            <div className="eva-leave">
                                <div className="eva-head">
                                    <img src="https://tvott.com.tw/images/200.png"></img>
                                </div>
                                <div className="eva-body">
                                    <div>Name</div>
                                    <div className="eva-personal">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <div>規格 : 白色</div>
                                    <div>選擇蝦皮平台是因為有蝦皮聯名卡 由經銷商出貨 使用上沒遇到問題 可惜沒有無線充電</div>
                                    <br/>
                                    <br/>
                                    <div>2020-09-17 23:37</div>
                                    <div>
                                        <i class="fas fa-thumbs-up"></i>
                                        <span>0</span>
                                    </div>
                                </div>
                                <hr/>
                            </div>
                            <div className="eva-leave">
                                <div className="eva-head">
                                    <img src="https://tvott.com.tw/images/200.png"></img>
                                </div>
                                <div className="eva-body">
                                    <div>Name</div>
                                    <div className="eva-personal">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <div>規格 : 白色</div>
                                    <div>選擇蝦皮平台是因為有蝦皮聯名卡 由經銷商出貨 使用上沒遇到問題 可惜沒有無線充電</div>
                                    <br/>
                                    <br/>
                                    <div>2020-09-17 23:37</div>
                                    <div>
                                        <i class="fas fa-thumbs-up"></i>
                                        <span>0</span>
                                    </div>
                                </div>
                                <hr/>
                            </div>
                            <div className="eva-leave">
                                <div className="eva-head">
                                    <img src="https://tvott.com.tw/images/200.png"></img>
                                </div>
                                <div className="eva-body">
                                    <div>Name</div>
                                    <div className="eva-personal">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <div>規格 : 白色</div>
                                    <div>選擇蝦皮平台是因為有蝦皮聯名卡 由經銷商出貨 使用上沒遇到問題 可惜沒有無線充電</div>
                                    <br/>
                                    <br/>
                                    <div>2020-09-17 23:37</div>
                                    <div>
                                        <i class="fas fa-thumbs-up"></i>
                                        <span>0</span>
                                    </div>
                                </div>
                                <hr/>
                            </div>
                        </div>
                        <div className="products-page">
                                <button className="page-prev">
                                    <i class="fas fa-chevron-left"></i>
                                </button>
                                <div className="page-num">
                                    <button className="page-btn">1</button>
                                    <button className="page-btn">2</button>
                                </div>
                                <button className="page-next">
                                    <i class="fas fa-chevron-right"></i>
                                </button>
                            </div>
                    </div>
                </div>
            </Layout>
            </>
        )
    }
}


export default ProductDetail