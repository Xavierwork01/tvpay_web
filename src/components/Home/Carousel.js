import React from 'react'
import { Swiper , SwiperSlide } from 'swiper/react'
import SwiperCode,{ Navigation , Pagination , Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'

SwiperCode.use([Navigation , Pagination ,Autoplay])

class CarouselBanner extends React.Component{
    


    render(){

        return(
            <>
            <div className="carousel">
                <div className="carousel-header">
                    <a href="#">商城</a>
                    <div className="">
                        <span>-----</span>
                        <span>-----</span>
                        <span>-----</span>
                    </div>
                    <a href="">查看全部 &gt;</a>
                </div>
                <a className="carousel-banner">
                    <div className="">
                        <img src=""></img>
                    </div>
                </a>
                <Swiper
                navigation
                slidesPerColumn={2}
                slidesPerView={4}
                slidesPerColumnFill={'row'}
                autoplay={{
                    delay:3000,
                    disableOnInteraction:false
                }}
                speed={1000}
                className="carousel-items"
                >
                    <SwiperSlide className="carousel-slider">
                        <div className="carousel-box">
                            <a href="#">
                                <img src=""></img>
                            </a>
                            <div>Product</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="carousel-slider">
                        <div className="carousel-box">
                            <a href="#">
                                <img src=""></img>
                            </a>
                            <div>Product</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="carousel-slider">
                        <div className="carousel-box">
                            <a href="#">
                                <img src=""></img>
                            </a>
                            <div>Product</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="carousel-slider">
                        <div className="carousel-box">
                            <a href="#">
                                <img src=""></img>
                            </a>
                            <div>Product</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="carousel-slider">
                        <div className="carousel-box">
                            <a href="#">
                                <img src=""></img>
                            </a>
                            <div>Product</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="carousel-slider">
                        <div className="carousel-box">
                            <a href="#">
                                <img src=""></img>
                            </a>
                            <div>Product</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="carousel-slider">
                        <div className="carousel-box">
                            <a href="#">
                                <img src=""></img>
                            </a>
                            <div>Product</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="carousel-slider">
                        <div className="carousel-box">
                            <a href="#">
                                <img src=""></img>
                            </a>
                            <div>Product</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="carousel-slider">
                        <div className="carousel-box">
                            <a href="#">
                                <img src=""></img>
                            </a>
                            <div>Product</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="carousel-slider">
                        <div className="carousel-box">
                            <a href="#">
                                <img src=""></img>
                            </a>
                            <div>Product</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="carousel-slider">
                        <div className="carousel-box">
                            <a href="#">
                                <img src=""></img>
                            </a>
                            <div>Product</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="carousel-slider">
                        <div className="carousel-box">
                            <a href="#">
                                <img src=""></img>
                            </a>
                            <div>Product</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="carousel-slider">
                        <div className="carousel-box">
                            <a href="#">
                                <img src=""></img>
                            </a>
                            <div>Product</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="carousel-slider">
                        <div className="carousel-box">
                            <a href="#">
                                <img src=""></img>
                            </a>
                            <div>Product</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="carousel-slider">
                        <div className="carousel-box">
                            <a href="#">
                                <img src=""></img>
                            </a>
                            <div>Product</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="carousel-slider">
                        <div className="carousel-box">
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