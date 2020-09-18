import React from 'react'
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
import Layout from './Layout'


class Home extends React.Component{

    render(){
        return (
            <Layout>
            <div className="home-page">
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
            </div>
            </Layout>
        )
    }
}

export default Home