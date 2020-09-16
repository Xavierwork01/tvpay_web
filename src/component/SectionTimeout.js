import React from 'react'
import $ from 'jquery'
import { Swiper , SwiperSlide } from 'swiper/react'
import SwiperCode,{ Navigation , Pagination , Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'


SwiperCode.use([Navigation , Pagination ,Autoplay])




class SectionTimeout extends React.Component{


    componentDidMount(){
        var timeHr = document.querySelector('.time-hr')
        var timeMin = document.querySelector('.time-min')
        var timeSec = document.querySelector('.time-sec')

        setInterval(function (){

            var time = new Date()
            var nowtime = time.getTime();

            time.setMonth(11)
            time.setDate(31)
            time.setHours(24)
            time.setMinutes(0)
            time.setSeconds(0)

            var endtime = time.getTime();
            var offsetTime = (endtime - nowtime) /1000;
            var hr = parseInt(offsetTime / 60 / 60);
            var min = parseInt((offsetTime / 60) % 60);
            var sec = parseInt(offsetTime % 60);

            timeHr.textContent = hr
            timeMin.textContent = min
            timeSec.textContent = sec
        },1000)
    }

    

    render(){
        // $(".swiper-slider-box").mouseenter(function(){
        //     Swiper.stopAutoPlay();
        //     });
        // $(".swiper-slider-box").mouseleave(function(){
        //     Swiper.startAutoPlay();
        //     });
        return(
            <>
            <div className="sectiontimeout">
                <div className="sectiontimeout-header">
                    <div className="sectiontimeout-sales">
                        <div className="saletime-text">限時特賣</div>
                        <div className="saletime-box">
                            <div className="time-hr"></div>:
                            <div className="time-min"></div>:
                            <div className="time-sec"></div>
                        </div>
                    </div>
                    <a href="#">查看全部 &gt;</a>
                </div>
                <Swiper
                slidesPerView={6}
                navigation
                autoplay={{delay:3000}}
                speed={1000}
                className="sectiontimeout-items"
                width={1200}
                height={240}
                
                >
                    <SwiperSlide className="swiper-slider-box">
                        <a href="#" className="sectiontimeout-product">
                        <div className="sectiontimeout-img">
                            <img src=""></img>
                        </div>
                        <div className="sectiontimeout-price">$600</div>
                        <button className="sectiontimeout-saled">已售出0</button>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slider-box">
                        <a href="#" className="sectiontimeout-product">
                        <div className="sectiontimeout-img">
                            <img src=""></img>
                        </div>
                        <div className="sectiontimeout-price">$600</div>
                        <button className="sectiontimeout-saled">已售出0</button>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slider-box">
                        <a href="#" className="sectiontimeout-product">
                        <div className="sectiontimeout-img">
                            <img src=""></img>
                        </div>
                        <div className="sectiontimeout-price">$600</div>
                        <button className="sectiontimeout-saled">已售出0</button>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slider-box">
                        <a href="#" className="sectiontimeout-product">
                        <div className="sectiontimeout-img">
                            <img src=""></img>
                        </div>
                        <div className="sectiontimeout-price">$600</div>
                        <button className="sectiontimeout-saled">已售出0</button>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slider-box">
                        <a href="#" className="sectiontimeout-product">
                        <div className="sectiontimeout-img">
                            <img src=""></img>
                        </div>
                        <div className="sectiontimeout-price">$600</div>
                        <button className="sectiontimeout-saled">已售出0</button>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slider-box">
                        <a href="#" className="sectiontimeout-product">
                        <div className="sectiontimeout-img">
                            <img src=""></img>
                        </div>
                        <div className="sectiontimeout-price">$600</div>
                        <button className="sectiontimeout-saled">已售出0</button>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slider-box">
                        <a href="#" className="sectiontimeout-product">
                        <div className="sectiontimeout-img">
                            <img src=""></img>
                        </div>
                        <div className="sectiontimeout-price">$600</div>
                        <button className="sectiontimeout-saled">已售出0</button>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slider-box">
                        <a href="#" className="sectiontimeout-product">
                        <div className="sectiontimeout-img">
                            <img src=""></img>
                        </div>
                        <div className="sectiontimeout-price">$600</div>
                        <button className="sectiontimeout-saled">已售出0</button>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slider-box">
                        <a href="#" className="sectiontimeout-product">
                        <div className="sectiontimeout-img">
                            <img src=""></img>
                        </div>
                        <div className="sectiontimeout-price">$600</div>
                        <button className="sectiontimeout-saled">已售出0</button>
                        </a>
                    </SwiperSlide>
                </Swiper>
            </div>
            </>
        )
    }
}


export default SectionTimeout