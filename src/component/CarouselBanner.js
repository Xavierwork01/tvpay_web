import React from 'react'
import { Swiper , SwiperSlide } from 'swiper/react'
import SwiperCode,{ Navigation , Pagination , Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'

SwiperCode.use([Navigation , Pagination ,Autoplay])

class CarouselBanner extends React.Component{
    


    render(){

        return(
            <>
            <div className="carouselbanner">
                <div className="carouselbanner-header">
                    <a href="#">商城</a>
                    <div className="">
                        <span>-----</span>
                        <span>-----</span>
                        <span>-----</span>
                    </div>
                    <a href="">查看全部 &gt;</a>
                </div>
                <a className="carouselbanner-banner">
                    <div className="">
                        <img src=""></img>
                    </div>
                </a>
                <Swiper
                navigation
                slidesPerColumn={2}
                slidesPerView={4}
                slidesPerColumnFill={'row'}
                autoplay={{delay:3000}}
                speed={1000}
                className="carouselbanner-items"
                >
                    <SwiperSlide className="carouselbanner-slider">
                        <div className="carouselbanner-box">
                            <a href="#">
                                <img src=""></img>
                            </a>
                            <div>Product</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="carouselbanner-slider">
                        <div className="carouselbanner-box">
                            <a href="#">
                                <img src=""></img>
                            </a>
                            <div>Product</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="carouselbanner-slider">
                        <div className="carouselbanner-box">
                            <a href="#">
                                <img src=""></img>
                            </a>
                            <div>Product</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="carouselbanner-slider">
                        <div className="carouselbanner-box">
                            <a href="#">
                                <img src=""></img>
                            </a>
                            <div>Product</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="carouselbanner-slider">
                        <div className="carouselbanner-box">
                            <a href="#">
                                <img src=""></img>
                            </a>
                            <div>Product</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="carouselbanner-slider">
                        <div className="carouselbanner-box">
                            <a href="#">
                                <img src=""></img>
                            </a>
                            <div>Product</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="carouselbanner-slider">
                        <div className="carouselbanner-box">
                            <a href="#">
                                <img src=""></img>
                            </a>
                            <div>Product</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="carouselbanner-slider">
                        <div className="carouselbanner-box">
                            <a href="#">
                                <img src=""></img>
                            </a>
                            <div>Product</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="carouselbanner-slider">
                        <div className="carouselbanner-box">
                            <a href="#">
                                <img src=""></img>
                            </a>
                            <div>Product</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="carouselbanner-slider">
                        <div className="carouselbanner-box">
                            <a href="#">
                                <img src=""></img>
                            </a>
                            <div>Product</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="carouselbanner-slider">
                        <div className="carouselbanner-box">
                            <a href="#">
                                <img src=""></img>
                            </a>
                            <div>Product</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="carouselbanner-slider">
                        <div className="carouselbanner-box">
                            <a href="#">
                                <img src=""></img>
                            </a>
                            <div>Product</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="carouselbanner-slider">
                        <div className="carouselbanner-box">
                            <a href="#">
                                <img src=""></img>
                            </a>
                            <div>Product</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="carouselbanner-slider">
                        <div className="carouselbanner-box">
                            <a href="#">
                                <img src=""></img>
                            </a>
                            <div>Product</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="carouselbanner-slider">
                        <div className="carouselbanner-box">
                            <a href="#">
                                <img src=""></img>
                            </a>
                            <div>Product</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="carouselbanner-slider">
                        <div className="carouselbanner-box">
                            <a href="#">
                                <img src=""></img>
                            </a>
                            <div>Product</div>
                        </div>
                    </SwiperSlide>
                    
                </Swiper>
                
            </div>
            </>
        )
    }
}


export default CarouselBanner