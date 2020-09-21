import React from 'react'
import { Swiper , SwiperSlide } from 'swiper/react'
import SwiperCode,{ Navigation , Pagination , Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'


SwiperCode.use([Navigation , Pagination ,Autoplay])

class SectionBanner extends React.Component{

    render(){
        return(
            <>
            <div className="section">
                <div className="banner1-content">
                    <div className="slider-banner1">
                        <Swiper
                        navigation
                        pagination
                        autoplay={{
                            delay:3000,
                            disableOnInteraction:false
                        }}
                        speed={1000}
                        
                        >
                            <SwiperSlide className="swiper-slider-box">
                                <a href="#"><img src=""></img></a>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slider-box">
                                <a href="#"><img src=""></img></a>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slider-box">
                                <a href="#"><img src=""></img></a>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="banner1-box">
                        <a href="" className="banner1-top">
                            <img src="" />
                        </a>
                        <a href="" className="banner1-down">
                            <img src="" />
                        </a>
                    </div>
                </div>
                <div className="buy-items">
                    <a href="" className="buy-11">
                        <div className="buy-box">
                            <div className="buy-img"><img href=""></img></div>
                            <div className="buy-text">name</div>
                        </div>
                    </a>
                    <a href="" className="buy-11">
                        <div className="buy-box">
                            <div className="buy-img"><img href=""></img></div>
                            <div className="buy-text">name</div>
                        </div>
                    </a>
                    <a href="" className="buy-11">
                        <div className="buy-box">
                            <div className="buy-img"><img href=""></img></div>
                            <div className="buy-text">name</div>
                        </div>
                    </a>
                    <a href="" className="buy-11">
                        <div className="buy-box">
                            <div className="buy-img"><img href=""></img></div>
                            <div className="buy-text">name</div>
                        </div>
                    </a>
                    <a href="" className="buy-11">
                        <div className="buy-box">
                            <div className="buy-img"><img href=""></img></div>
                            <div className="buy-text">name</div>
                        </div>
                    </a>
                    <a href="" className="buy-11">
                        <div className="buy-box">
                            <div className="buy-img"><img href=""></img></div>
                            <div className="buy-text">name</div>
                        </div>
                    </a>
                    <a href="" className="buy-11">
                        <div className="buy-box">
                            <div className="buy-img"><img href=""></img></div>
                            <div className="buy-text">name</div>
                        </div>
                    </a>
                    <a href="" className="buy-11">
                        <div className="buy-box">
                            <div className="buy-img"><img href=""></img></div>
                            <div className="buy-text">name</div>
                        </div>
                    </a>
                    <a href="" className="buy-11">
                        <div className="buy-box">
                            <div className="buy-img"><img href=""></img></div>
                            <div className="buy-text">name</div>
                        </div>
                    </a>
                    <a href="" className="buy-11">
                        <div className="buy-box">
                            <div className="buy-img"><img href=""></img></div>
                            <div className="buy-text">name</div>
                        </div>
                    </a>
                    <a href="" className="buy-11">
                        <div className="buy-box">
                            <div className="buy-img"><img href=""></img></div>
                            <div className="buy-text">name</div>
                        </div>
                    </a>
                </div>
            </div>
            </>
        )
    }
}


export default SectionBanner