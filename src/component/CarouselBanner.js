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
                    <div className="carouselbanner-box">
                        <img src=""></img>
                    </div>
                </a>
                <Swiper
                navigation
                slidesPerColumn={2}
                slidesPerColumnFill={'row'}
                autoplay={{delay:3000}}
                width={800}
                height={472}
                speed={1000}
                className="carouselbanner-items"
                >  
                <SwiperSlide>
                    <SwiperSlide className="carouselbanner-slider">
                        <a className="carouselbanner-box">1</a>
                        <a className="carouselbanner-box">2</a>
                        <a className="carouselbanner-box">3</a>
                        <a className="carouselbanner-box">4</a>
                    </SwiperSlide>
                    <SwiperSlide className="carouselbanner-slider">
                        <a className="carouselbanner-box">1</a>
                        <a className="carouselbanner-box">2</a>
                        <a className="carouselbanner-box">3</a>
                        <a className="carouselbanner-box">4</a>
                    </SwiperSlide>
                </SwiperSlide>
                
                </Swiper>
            </div>
            </>
        )
    }
}


export default CarouselBanner