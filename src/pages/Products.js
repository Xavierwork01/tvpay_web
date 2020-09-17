import React from 'react'
import Header from '../commons/Header'
import Footer from '../commons/Footer'
import ProductsTool from '../component/ProductsTool'
import Product from '../component/Product'

class Products extends React.Component{

    render(){

        return (
            <>
            <div className="products">
            <Header/>
            <ProductsTool/>
            <Product/>
            <Footer/>
            </div>
            </>
        )
    }
}

export default Products