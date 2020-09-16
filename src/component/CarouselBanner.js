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
                    <a href="#">蝦皮商城</a>
                    <div className="">
                        <span>-----</span>
                        <span>-----</span>
                        <span>-----</span>
                    </div>
                    <a href="">查看全部 &gt;</a>
                </div>
                <a className="carouselbanner-banner">banner</a>
                    <Swiper
                    navigation
                    autoplay={{delay:3000}}
                    speed={1000}
                    slidesPerView={4}
                    slidesPerColumn={2}
                    slidesPerColumnFill={2}
                    className="carouselbanner-slider"
                    >
                        <SwiperSlide >
                            <a href="#" className="carouselbanner-slider-box">
                                <div></div>
                                <div>折扣碼</div>
                            </a>
                        </SwiperSlide>
                        
                    </Swiper>
                </div>
            </>
        )
    }
}


export default CarouselBanner