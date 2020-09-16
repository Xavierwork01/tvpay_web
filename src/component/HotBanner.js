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
                speed={1000}
                slidesPerView={3}
                width={1200}
                height={324}
                className="hotbanner-content"
                >
                    <SwiperSlide className="hotbanner-box">
                        <a href="#">
                            <div className="hotbanner-picture">
                                <div><img src=""></img></div>
                                <div><img src=""></img></div>
                                <div><img src=""></img></div>
                            </div>
                            <div>熱門精選</div>
                        </a>
                    </SwiperSlide>
                </Swiper>
            </div>
            </>
        )
    }
}


export default HotBanner