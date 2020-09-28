import React from 'react'
import { Link } from 'react-router-dom'

class LikeState extends React.Component{


    render(){

        return(
            <>
                <div className="like-state columns is-gapless">
                    <Link to="/user/like/track" className="my-like column">我的追蹤</Link>
                    <Link to="/user/brand" className="my-like column">最愛品牌</Link>
                    <Link to="/user/like/history" className="my-like column">瀏覽紀錄</Link>
                </div>
            </>
        )
    }
}

export default LikeState