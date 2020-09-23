import React from 'react'
import Layout from './Layout'
import ProductsTool from '../components/Products/ProductsTool'
import ProsNav from '../components/ProsNav'
import Product from '../components/Product'
import { CSSTransition , TransitionGroup } from 'react-transition-group'


class Products extends React.Component{


    product = [
        {
            id:'1',
            name:'mask'
        },
        {
            id:'2',
            name:'tom'
        },
    ]

    render(){

        return (
            <>
            <Layout>
            <div className="products">
            <ProsNav/>
            <ProductsTool/>
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
                    {/* <button className="page-dot" disabled>...</button> */}
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

export default Products