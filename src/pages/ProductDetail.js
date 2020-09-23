import React from 'react'
import Layout from './Layout'
import ProductDetailPro from '../components/ProductDetail/ProductDetailPro'
import ProductDetailContent from '../components/ProductDetail/ProductDetailContent'
import ProductDetailEva from '../components/ProductDetail/ProductDetailEva'
// import { Swiper , SwiperSlide } from 'swiper/react'
// import SwiperCode,{ Navigation , Pagination , Autoplay ,Thumbs} from 'swiper'
// import '../../node_modules/swiper/swiper-bundle.css'



// SwiperCode.use([Navigation , Pagination ,Autoplay ,Thumbs])


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