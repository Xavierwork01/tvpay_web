import React from 'react'
import Header from '../commons/Header'
import SectionBanner from '../component/SectionBanner'
import PackageBanner from '../component/PackageBanner'
import ClassBanner from '../component/ClassBanner'
import SectionTimeout from '../component/SectionTimeout'
import GroupBuy from '../component/GroupBuy'
import SkinnyBanner from '../component/SkinnyBanner'
import CarouselBanner from '../component/CarouselBanner'
import MostBanner from '../component/MostBanner'
import HotBanner from '../component/HotBanner'
import NewDayBanner from '../component/NewDayBanner'
import Footer from '../commons/Footer'


class Home extends React.Component{

    render(){
        return (
            <>
            
            <div className="home-page">
            <Header/>
                <SectionBanner/>
                <PackageBanner/>
                <ClassBanner/>
                <SectionTimeout/>
                <GroupBuy/>
                <SkinnyBanner/>
                <CarouselBanner/>
                <MostBanner/>
                <HotBanner/>
                <NewDayBanner/>
            <Footer/>
            </div>
            
            </>
        )
    }
}

export default Home