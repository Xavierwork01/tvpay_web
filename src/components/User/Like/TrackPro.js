import React from 'react'
import TrackContent from './TrackContent'


class TrackPro extends React.Component{



    render(){

        return(
            <>
            
            <div className="track-pro columns is-gapless">
                <a href="#" className="column is-half">
                    <input type="checkbox" />
                    <div className="track-img">
                        <img src="/images/image1.png" />
                    </div>
                    <p>筆記型電腦筆記型電腦筆記型電腦筆記型電腦筆記型電腦筆記型電腦筆記型電腦筆記型電腦筆記型電腦</p>
                </a>    
                <div className="column price">$100000</div>
                <div className="column operating">
                    <button className="button is-danger">刪除</button>
                </div>
            </div>
                
            </>
        )
    }
}


export default TrackPro