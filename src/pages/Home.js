import React from 'react'
import Header from '../commons/Header'
import SectionBanner from '../component/SectionBanner'
import PackageBanner from '../component/PackageBanner'
import SectionClass from '../component/SectionClass'
import SectionTimeout from '../component/SectionTimeout'
import GroupBuy from '../component/GroupBuy'
import SkinnyBanner from '../component/SkinnyBanner'
import CarouselBanner from '../component/CarouselBanner'
import Footer from '../commons/Footer'


class Home extends React.Component{

    render(){
        return (
            <>
            <Header/>
            <div className="home-page">
                <SectionBanner/>
                <PackageBanner/>
                <SectionClass/>
                <SectionTimeout/>
                <GroupBuy/>
                <SkinnyBanner/>
                <CarouselBanner/>
            </div>
            <Footer/>
            </>
        )
    }
}

export default Home