import React from 'react'
import SectionBanner from '../components/Home/SectionBanner'
import PackageBanner from '../components/Home/PackageBanner'
import ClassBanner from '../components/Home/ClassBanner'
import SectionTimeout from '../components/Home/SectionTimeout'
import GroupBuy from '../components/Home/GroupBuy'
import SkinnyBanner from '../components/Home/SkinnyBanner'
import CarouselBanner from '../components/Home/CarouselBanner'
import MostBanner from '../components/Home/MostBanner'
import HotBanner from '../components/Home/HotBanner'
import NewDayBanner from '../components/Home/NewDayBanner'
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