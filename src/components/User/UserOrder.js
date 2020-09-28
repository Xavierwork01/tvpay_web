import React from 'react'
import { GrFormPrevious , GrFormNext } from 'react-icons/gr'
import OrderPro from './Order/OrderPro'


class UserOrder extends React.Component{

    render(){

        return(
            <>
            <div className="userorder">
                <div className="order-title">
                    <p>訂單列表</p>
                </div>
                <OrderPro/>
                <OrderPro/>
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
            </div>
            </>
        )
    }
}

export default UserOrder