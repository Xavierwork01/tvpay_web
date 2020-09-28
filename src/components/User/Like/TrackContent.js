import React from 'react'
import { GrFormPrevious , GrFormNext } from 'react-icons/gr'
import TrackPro from './TrackPro'
import { CSSTransition , TransitionGroup } from 'react-transition-group'

class TrackContent extends React.Component{

    state = {
        pro : [{id:1},{id:2},{id:3},{id:4},{id:5}]
    }


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
                {this.state.pro.map(v => 
                <TransitionGroup component={null}>
                    <CSSTransition timeout={1000} classNames="trackpro-ani">
                            <TrackPro key={v.id}/>
                    </CSSTransition>
                </TransitionGroup>
                )}
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