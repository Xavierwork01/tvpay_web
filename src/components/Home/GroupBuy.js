import React from 'react'
import { Swiper , SwiperSlide } from 'swiper/react'
import SwiperCode,{ Navigation , Pagination , Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'


SwiperCode.use([Navigation , Pagination ,Autoplay])

class GroupBuy extends React.Component{


    render(){

        return (
            <>
            <div className="groupbuy">
                <div className="groupbuy-header">
                    <div className="groupbuy-sales">團團購</div>
                    <a href="#">查看全部 &gt;</a>
                </div>
                <Swiper
                slidesPerView={6}
                navigation
                autoplay={{
                    delay:3000,
                    disableOnInteraction:false
                }}
                speed={1000}
                className="groupbuy-items"
                width={1200}
                height={294}
                
                >
                    <SwiperSlide className="swiper-slider-box">
                        <a href="#" className="groupbuy-product">
                        <div className="groupbuy-img">
                            <img src=""></img>
                        </div>
                        <div className="groupbuy-o-price">$600</div>
                        <div className="groupbuy-s-price">$600</div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slider-box">
                        <a href="#" className="groupbuy-product">
                        <div className="groupbuy-img">
                            <img src=""></img>
                        </div>
                        <div className="groupbuy-o-price">$600</div>
                        <div className="groupbuy-s-price">$600</div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slider-box">
                        <a href="#" className="groupbuy-product">
                        <div className="groupbuy-img">
                            <img src=""></img>
                        </div>
                        <div className="groupbuy-o-price">$600</div>
                        <div className="groupbuy-s-price">$600</div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slider-box">
                        <a href="#" className="groupbuy-product">
                        <div className="groupbuy-img">
                            <img src=""></img>
                        </div>
                        <div className="groupbuy-o-price">$600</div>
                        <div className="groupbuy-s-price">$600</div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slider-box">
                        <a href="#" className="groupbuy-product">
                        <div className="groupbuy-img">
                            <img src=""></img>
                        </div>
                        <div className="groupbuy-o-price">$600</div>
                        <div className="groupbuy-s-price">$600</div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slider-box">
                        <a href="#" className="groupbuy-product">
                        <div className="groupbuy-img">
                            <img src=""></img>
                        </div>
                        <div className="groupbuy-o-price">$600</div>
                        <div className="groupbuy-s-price">$600</div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slider-box">
                        <a href="#" className="groupbuy-product">
                        <div className="groupbuy-img">
                            <img src=""></img>
                        </div>
                        <div className="groupbuy-o-price">$600</div>
                        <div className="groupbuy-s-price">$600</div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slider-box">
                        <a href="#" className="groupbuy-product">
                        <div className="groupbuy-img">
                            <img src=""></img>
                        </div>
                        <div className="groupbuy-o-price">$600</div>
                        <div className="groupbuy-s-price">$600</div>
                        </a>
                    </SwiperSlide>
                    
                </Swiper>
            </div>
            </>
        )
    }
}


export default GroupBuy