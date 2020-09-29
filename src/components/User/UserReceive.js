import React from 'react'
import ReceiveMsg from './Receive/ReceiveMsg'


class UserReceive extends React.Component{


    render(){

        return(
            <>
            <div className="userreceive">
                <div className="receive-title">
                    <div className="button">標示為已讀</div>
                </div>
                <div className="receive-content">
                    <ReceiveMsg/>
                    <ReceiveMsg/>
                    <ReceiveMsg/>
                    <ReceiveMsg/>
                    <ReceiveMsg/>
                </div>
            </div>
            </>
        )
    }
}


export default UserReceive