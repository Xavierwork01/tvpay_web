import React from 'react'
import { BrowserRouter , Switch ,Route , Redirect } from 'react-router-dom'
import LikeState from './Like/LikeState'
import TrackContent from './Like/TrackContent'
import BrandContent from './Like/BrandContent'



class UserLike extends React.Component{


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
                            <Route path="/user/like/brand">
                                <BrandContent/>
                            </Route>
                            <Redirect to="/user/like/track" />
                        </Switch>
                    </div>
                </BrowserRouter>
            </>
        )
    }
}


export default UserLike