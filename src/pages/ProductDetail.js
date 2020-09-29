import React from 'react'
import Layout from './Layout'
import ProductDetailPro from '../components/ProductDetail/ProductDetailPro'
import ProductDetailContent from '../components/ProductDetail/ProductDetailContent'
import ProductDetailEva from '../components/ProductDetail/ProductDetailEva'



class ProductDetail extends React.Component{

    render(){

        return(
            <>
            <Layout>
                <div className="productdetail">
                    <ProductDetailPro/>
                    <ProductDetailContent/>
                    <ProductDetailEva/>
                </div>
            </Layout>
            </>
        )
    }
}


export default ProductDetail