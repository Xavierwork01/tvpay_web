import React from 'react'



class ProductDetailEva extends React.Component{


    render(){

        return (

            <>
                <div className="productdetail-eva">
                        <div className="eva-header">商品評價</div>
                        <div className="eva-rating">
                            <div className="eva-box">
                                <div className="eva-num">
                                    <span className="num-mag">5</span>
                                    <span>/5</span>
                                </div>
                                <div className="eva-star">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                            </div>
                            <button className="button">全部</button>
                            <button className="button">5星</button>
                            <button className="button">4星</button>
                            <button className="button">3星</button>
                            <button className="button">2星</button>
                            <button className="button">1星</button>
                            <button className="button">附上評論</button>
                            <button className="button">附上照片/影片</button>
                        </div>
                        <div className="eva-comment">
                            <div className="eva-leave">
                                <div className="eva-head">
                                    <img src="https://tvott.com.tw/images/200.png"></img>
                                </div>
                                <div className="eva-body">
                                    <div>Name</div>
                                    <div className="eva-personal">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <div>規格 : 白色</div>
                                    <div>選擇蝦皮平台是因為有蝦皮聯名卡 由經銷商出貨 使用上沒遇到問題 可惜沒有無線充電</div>
                                    <br/>
                                    <br/>
                                    <div>2020-09-17 23:37</div>
                                    <div>
                                        <i class="fas fa-thumbs-up"></i>
                                        <span>0</span>
                                    </div>
                                </div>
                                <hr/>
                            </div>
                            <div className="eva-leave">
                                <div className="eva-head">
                                    <img src="https://tvott.com.tw/images/200.png"></img>
                                </div>
                                <div className="eva-body">
                                    <div>Name</div>
                                    <div className="eva-personal">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <div>規格 : 白色</div>
                                    <div>選擇蝦皮平台是因為有蝦皮聯名卡 由經銷商出貨 使用上沒遇到問題 可惜沒有無線充電</div>
                                    <br/>
                                    <br/>
                                    <div>2020-09-17 23:37</div>
                                    <div>
                                        <i class="fas fa-thumbs-up"></i>
                                        <span>0</span>
                                    </div>
                                </div>
                                <hr/>
                            </div>
                            <div className="eva-leave">
                                <div className="eva-head">
                                    <img src="https://tvott.com.tw/images/200.png"></img>
                                </div>
                                <div className="eva-body">
                                    <div>Name</div>
                                    <div className="eva-personal">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <div>規格 : 白色</div>
                                    <div>選擇蝦皮平台是因為有蝦皮聯名卡 由經銷商出貨 使用上沒遇到問題 可惜沒有無線充電</div>
                                    <br/>
                                    <br/>
                                    <div>2020-09-17 23:37</div>
                                    <div>
                                        <i class="fas fa-thumbs-up"></i>
                                        <span>0</span>
                                    </div>
                                </div>
                                <hr/>
                            </div>
                        </div>
                        <div className="products-page">
                                <button className="page-prev">
                                    <i class="fas fa-chevron-left"></i>
                                </button>
                                <div className="page-num">
                                    <button className="page-btn">1</button>
                                    <button className="page-btn">2</button>
                                </div>
                                <button className="page-next">
                                    <i class="fas fa-chevron-right"></i>
                                </button>
                            </div>
                    </div>
            </>
        )
    }
}


export default ProductDetailEva