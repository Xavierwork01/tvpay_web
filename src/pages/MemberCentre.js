import React from 'react'
import Layout from './Layout'
import { BrowserRouter , Switch ,Route } from 'react-router-dom'
import MemberMenu from '../components/MemberCentre/MemberMenu'
import MemberTrack from '../components/MemberCentre/MemberTrack'
import MemberAccount from '../components/MemberCentre/MemberAccount'

class MemberCentre extends React.Component{


    render(){

        return(

            <>
            <Layout>
            <BrowserRouter>
                <div className="membercentre">
                    <MemberMenu/>
                    <Switch>
                        <Route path="/membercentre/track">
                            <MemberTrack/>
                        </Route>
                        <Route path="/membercentre/account">
                            <MemberAccount/>
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
            </Layout>
            </>
        )
    }
}


export default MemberCentre