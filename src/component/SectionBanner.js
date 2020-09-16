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
                        autoplay={{delay:3000}}
                        speed={1000}
                        >
                            <SwiperSlide className="swiper-slider-box">
                                <img src=""></img>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slider-box">
                                <img src=""></img>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slider-box">
                                <img src=""></img>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="banner1-box">
                        <div className="banner1-top">
                            <img src="" />
                        </div>
                        <div className="banner1-down">
                            <img src="" />
                        </div>
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