import React from 'react'
import Section from '../components/Home/Section'
import Package from '../components/Home/Package'
import Class from '../components/Home/Class'
import Timeout from '../components/Home/Timeout'
import GroupBuy from '../components/Home/GroupBuy'
import Skinny from '../components/Home/Skinny'
import Carousel from '../components/Home/Carousel'
import Most from '../components/Home/Most'
import Hot from '../components/Home/Hot'
import NewDay from '../components/Home/NewDay'
import Layout from './Layout'


class Home extends React.Component{

    render(){
        return (
            <Layout>
            <div className="home-page">
                <Section/>
                <Package/>
                <Class/>
                <Timeout/>
                <GroupBuy/>
                <Skinny/>
                <Carousel/>
                <Most/>
                <Hot/>
                <NewDay/>
            </div>
            </Layout>
        )
    }
}

export default Home