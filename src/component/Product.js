import React from 'react'
import {CSSTransition,TransitionGroup} from 'react-transition-group'

class Product extends React.Component{


    render(){

        return(
            <>
            <div className="product">
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="content">
                            <div>
                                <p>Product Name</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="content">
                            <div>
                                <p>Product Name</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="content">
                            <div>
                                <p>Product Name</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="content">
                            <div>
                                <p>Product Name</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="content">
                            <div>
                                <p>Product Name</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            </>
        )
    }
}


export default Product