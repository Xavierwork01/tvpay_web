import React from 'react'
import { GrFormPrevious , GrFormNext } from 'react-icons/gr'
import TrackPro from './TrackPro'

class TrackContent extends React.Component{


    render(){

        return(

            <>
                <div className="track-content">
                    <div className="track-title columns is-gapless">
                        <div className="column is-half">
                            <input type="checkbox"/>
                            <span>商品內容</span>
                        </div>
                        <div className="column price">價格</div>
                        <div className="column operating">操作</div>
                    </div>
                    <TrackPro/>
                    <TrackPro/>
                    <TrackPro/>
                    <TrackPro/>
                    <TrackPro/>
                </div>
                <div className="user-page">
                    <a href="#" className="button btn-prev">
                        <GrFormPrevious/>
                    </a>
                    <a href="#" className="button btn-num">1</a>
                    <a href="#" className="button btn-num">2</a>
                    <a href="#" className="button btn-num">3</a>
                    <a href="#" className="button btn-next">
                        <GrFormNext/>
                    </a>
                </div>
            </>

        )
    }
}

export default TrackContent