import React from 'react'
import Layout from './Layout'
import Product from '../components/Product'
import ProsNav from '../components/ProsNav'

class SpecialProducts extends React.Component{


    render(){

        return (
            <>
            <Layout>
                <div className="specialproducts">
                    <ProsNav/>
                    <div className="specialproducts-header">
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