import React from 'react'


class MemberTrack extends React.Component{


    render(){

        return(
            <>
            <div className="membertrack">
                <div className="track-state columns is-gapless">
                    <a className="my-track column">我的追蹤</a>
                    <button className="my-track column">最愛品牌</button>
                    <button className="my-track column">瀏覽紀錄</button>
                </div>
                <div className="track-content">
                    <div>
                        
                    </div>
                </div>
            </div>
            </>
        )
    }
}


export default MemberTrack