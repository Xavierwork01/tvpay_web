import React from 'react'
import { BrowserRouter , Switch ,Route , Redirect } from 'react-router-dom'
import LikeState from './Like/LikeState'
import TrackContent from './Like/TrackContent'
import BrandContent from './Like/BrandContent'
import HistoryContent from './Like/HistoryContent'

class UserBrand extends React.Component{


    render(){

        return(

            <>
            <BrowserRouter>
                <div className="userlike">
                    <LikeState/>
                    <Switch>
                        <Route path="/user/like/track">
                            <TrackContent/>
                        </Route>
                        <Route path="/user/brand">
                            <BrandContent/>
                        </Route>
                        <Route path="/user/like/history">
                            <HistoryContent/>
                        </Route>
                        <Redirect to="/user/brand" />
                    </Switch>
                </div>
            </BrowserRouter>
            </>
        )
    }
}


export default UserBrand