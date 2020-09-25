import React from 'react'
import Layout from './Layout'
import { BrowserRouter , Switch ,Route } from 'react-router-dom'
import MemberMenu from '../components/MemberCentre/MemberMenu'

class MemberCentre extends React.Component{


    render(){

        return(

            <>
            <Layout>
                <div className="membercentre">
                    <MemberMenu/>
                    <div>right</div>
                </div>
            </Layout>
            </>
        )
    }
}


export default MemberCentre