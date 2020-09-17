import React from 'react'
import { Swiper , SwiperSlide } from 'swiper/react'
import SwiperCode,{ Navigation , Pagination , Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'

SwiperCode.use([Navigation , Pagination ,Autoplay])

class HotBanner extends React.Component{


    render(){

        return(
            <>
            <div className="hotbanner">
                <div className="hotbanner-header">
                    <div>熱門商品</div>
                    <a href="#">查看全部 &gt;</a>
                </div>
                <Swiper
                navigation
                autoplay={{delay:3000}}
                speed={1000}
                slidesPerView={3}
                width={1200}
                height={325}
                className="hotbanner-content"
                >
                    <SwiperSlide className="hotbanner-box">
                        <a href="#">
                            <div className="hotbanner-link">
                                <div className="hotbanner-img">
                                    <div className="hotbanner-pic1">
                                        <img src=""></img>
                                    </div>
                                    <div className="hotbanner-pic2">
                                        <img src=""></img>
                                        <img src=""></img>
                                    </div>
                                </div>
                                <div className="hotbanner-text">熱門專區</div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="hotbanner-box">
                        <a href="#">
                            <div className="hotbanner-link">
                                <div className="hotbanner-img">
                                    <div className="hotbanner-pic1">
                                        <img src=""></img>
                                    </div>
                                    <div className="hotbanner-pic2">
                                        <img src=""></img>
                                        <img src=""></img>
                                    </div>
                                </div>
                                <div className="hotbanner-text">熱門專區</div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="hotbanner-box">
                        <a href="#">
                            <div className="hotbanner-link">
                                <div className="hotbanner-img">
                                    <div className="hotbanner-pic1">
                                        <img src=""></img>
                                    </div>
                                    <div className="hotbanner-pic2">
                                        <img src=""></img>
                                        <img src=""></img>
                                    </div>
                                </div>
                                <div className="hotbanner-text">熱門專區</div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="hotbanner-box">
                        <a href="#">
                            <div className="hotbanner-link">
                                <div className="hotbanner-img">
                                    <div className="hotbanner-pic1">
                                        <img src=""></img>
                                    </div>
                                    <div className="hotbanner-pic2">
                                        <img src=""></img>
                                        <img src=""></img>
                                    </div>
                                </div>
                                <div className="hotbanner-text">熱門專區</div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="hotbanner-box">
                        <a href="#">
                            <div className="hotbanner-link">
                                <div className="hotbanner-img">
                                    <div className="hotbanner-pic1">
                                        <img src=""></img>
                                    </div>
                                    <div className="hotbanner-pic2">
                                        <img src=""></img>
                                        <img src=""></img>
                                    </div>
                                </div>
                                <div className="hotbanner-text">熱門專區</div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="hotbanner-box">
                        <a href="#">
                            <div className="hotbanner-link">
                                <div className="hotbanner-img">
                                    <div className="hotbanner-pic1">
                                        <img src=""></img>
                                    </div>
                                    <div className="hotbanner-pic2">
                                        <img src=""></img>
                                        <img src=""></img>
                                    </div>
                                </div>
                                <div className="hotbanner-text">熱門專區</div>
                            </div>
                        </a>
                    </SwiperSlide>
                    
                </Swiper>
            </div>
            </>
        )
    }
}


export default HotBanner