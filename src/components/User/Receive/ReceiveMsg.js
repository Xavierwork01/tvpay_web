import React from 'react'
import { AiOutlineRead } from 'react-icons/ai'

class ReceiveMsg extends React.Component{


    render(){

        return(
            <>
                <div className="receive-msg columns is-gapless">
                    <div className="receive-img column is-1">
                        <img src="https://tvott.com.tw/images/200.png" />
                    </div>
                    <div className="receive-text column is-8">
                        <h3>恭喜您獲得訂單8折優惠</h3>
                        <p>全站商品任你選!</p>
                        <p>2020-09-29 11:04</p>
                    </div>
                    <div className="receive-more column">
                        <div><AiOutlineRead className="read-icon" /></div>
                        <a href="#" className="button">查看更多</a>
                    </div>
                </div>
            </>
        )
    }
}


export default ReceiveMsg