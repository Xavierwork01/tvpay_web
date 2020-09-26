import React from 'react'
import Layout from './Layout'
import { BrowserRouter , Switch ,Route } from 'react-router-dom'
import UserMenu from '../components/User/UserMenu'
import UserLike from '../components/User/UserLike'
import UserAccount from '../components/User/UserAccount'
import TrackContent from '../components/User/Like/TrackContent'

class User extends React.Component{


    render(){

        return(

            <>
            <Layout>
            <BrowserRouter>
                <div className="user-wrapper">
                    <UserMenu/>
                    <Switch>
                        <Route path="/user/like">
                            <UserLike/>
                        </Route>
                        <Route path="/user/account">
                            <UserAccount/>
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
            </Layout>
            </>
        )
    }
}


export default User