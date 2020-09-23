import React from 'react'



class ProductDetailContent extends React.Component{


    render(){

        return (

            <>
                <div className="productdetail-content">
                    <div className="detail-box1">
                        <div className="detail-header">商品規格</div>
                        <div className="detail-format">
                            <div className="detail-inside">
                                <div className="detail-hd">
                                    <label>處理器</label>
                                    <div>Intel i5-10210U</div>
                                </div>
                                <div className="detail-hd">
                                    <label>硬碟容量</label>
                                    <div>500GB</div>
                                </div>
                                <div className="detail-hd">
                                    <label>品牌</label>
                                    <div>ASUS 華碩</div>
                                </div>
                                <div className="detail-hd">
                                    <label>NCC</label>
                                    <div>CCAF16LP1510T2</div>
                                </div>
                                <div className="detail-hd">
                                    <label>庫存</label>
                                    <div>7</div>
                                </div>
                                <div className="detail-hd">
                                    <label>出貨地</label>
                                    <div>台北市中正區</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="detail-box2">
                        <div className="detail-header">商品詳情</div>
                        <div className="detail-info">
                        商品特色：<br/>
                        搭載第10代intel core i5處理器、全鋁機身、通過軍規測試
                        <br/>
                        <br/>
                        型號：<br/>
                        S403FA-0232C10210U 玫瑰金<br/>
                        S403FA-0242S10210U 冰河藍
                        <br/><br/>
                        商品到貨隔日享蝦皮15天鑑賞(猶豫)期之權益【鑑賞(猶豫)期非試用期】，辦理退貨商品必須是完好狀態且需以本公司或特約商所使用的外包裝(紙箱或包裝袋)，妥善包裝後交付給前往取件的物流公司；若本公司或特約商的外包裝已經遺失，請您在商品原廠外盒外，再以其他適當的外盒進行包裝，請勿於商品原廠外盒上直接黏貼任何單據或書寫文字，否則將會影響退貨權限，此外也可能依照損毀程度扣除為回復原狀所必要的費用。
                        <br/><br/>
                        ●3C相關商品，為一次性包裝商品，請務必確認有購買需求後再拆封。<br/>
                        ●網頁商品會因為使用不同的品牌螢幕以及解析度不同，造成圖片顏色呈現略有不同，請以實品顏色為準。"
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


export default ProductDetailContent