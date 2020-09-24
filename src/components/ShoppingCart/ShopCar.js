import React from 'react'


class ShopCar extends React.Component{


    render(){

        return(

            <>
                <div className="shop-car">
                    <div className="shop-car-chk"><input type="checkbox" /></div>
                    <div className="shop-img">
                        <img src=""/>
                    </div>
                    <div className="shop-text">在台現貨/贈10禮 免運 可到付 酷貝樂/艾尚寶 高景觀 可坐可躺 雙向推在台現貨/贈10禮 免運 可到付 酷貝樂/艾尚寶 高景觀 可坐可躺 雙向推</div>
                    <div className="shop-format">
                        規格
                    </div>
                    <div className="shop-unitprice">$245000</div>
                    <div className="shop-mount">
                        <div className="button">-</div>
                        <input type="number" className="input" defaultValue="1" />
                        <div className="button">+</div>
                    </div>
                    <div className="shop-total">$200000</div>
                    <div className="shop-del">
                        <button className="button">刪除</button>
                    </div>
                </div>
            </>

        )
    }
}

export default ShopCar