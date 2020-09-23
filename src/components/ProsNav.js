import React from 'react'


class ProNav extends React.Component{


    render(){

        return (

            <>
                <div className="pros-nav">
                    <div className="pros-items">
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                        <div class="dropdown is-hoverable">
                            <div class="dropdown-trigger">
                                <div className="drop-div" aria-haspopup="true" aria-controls="dropdown-menu4">
                                <span>查看更多</span>
                                <span class="icon is-small">
                                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                                </span>
                                </div>
                            </div>
                            <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                                <div class="dropdown-content">
                                <div class="dropdown-item">
                                    <div>
                                        <a href="#">item1</a>
                                    </div>
                                    <div>
                                        <a href="#">item1</a>
                                    </div>
                                    <div>
                                        <a href="#">item1</a>
                                    </div>
                                    <div>
                                        <a href="#">item1</a>
                                    </div>
                                    <div>
                                        <a href="#">item1</a>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ProNav
