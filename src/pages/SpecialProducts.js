import React from 'react'
import Layout from './Layout'
import Product from '../component/Product'

class SpecialProducts extends React.Component{


    render(){

        return (
            <>
            <Layout>
                <div className="specialproducts">
                    <div className="specialproducts-nav">
                        <div className="specialproducts-items">
                            <a href="#">Link</a>
                            <a href="#">Link</a>
                            <a href="#">Link</a>
                            <a href="#">Link</a>
                            <a href="#">Link</a>
                            <a href="#">Link</a>
                            <a href="#">Link</a>
                            <div class="dropdown is-hoverable">
                                <div class="dropdown-trigger">
                                    <div className="drop-div" aria-haspopup="true" aria-controls="dropdown-menu4">
                                    <span>查看更多</span>
                                    <span class="icon is-small">
                                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                                    </span>
                                    </div>
                                </div>
                                <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                                    <div class="dropdown-content">
                                    <div class="dropdown-item">
                                        <div>
                                            <a href="#">item1</a>
                                        </div>
                                        <div>
                                            <a href="#">item1</a>
                                        </div>
                                        <div>
                                            <a href="#">item1</a>
                                        </div>
                                        <div>
                                            <a href="#">item1</a>
                                        </div>
                                        <div>
                                            <a href="#">item1</a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="specialproduct-header">
                        <div></div>
                        <p>SpecailProducts</p>
                        <div></div>
                    </div>
                    <div className="product">
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                    </div>

                    <div className="products-page">
                        <button className="page-prev">
                            <i class="fas fa-chevron-left"></i>
                        </button>
                        <div className="page-num">
                            <button className="page-btn">1</button>
                            <button className="page-btn">2</button>
                            <button className="page-btn">3</button>
                            <button className="page-btn">4</button>
                            <button className="page-btn">5</button>
                            <button className="page-dot" disabled>...</button>
                        </div>
                        <button className="page-next">
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </Layout>
            </>
        )
    }
}


export default SpecialProducts