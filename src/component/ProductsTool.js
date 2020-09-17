import React from 'react'


class ProductsTool extends React.Component{

    render(){

        return (
            <>
            <div className="productstool">
                <div className="products-title">Products</div>
                <div className="products-features">
                    <div className="products-filter">篩選</div>
                        <div class="dropdown is-hoverable">
                            <div class="dropdown-trigger">
                                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                                <span>價格</span>
                                <span class="icon is-small">
                                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                                </span>
                                </button>
                            </div>
                            <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                                <div class="dropdown-content">
                                    <div class="dropdown-item ">
                                    <a>價格 : 低到高</a>
                                    <hr class="dropdown-divider"/>
                                    <a>價格 : 高到低</a>
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

export default ProductsTool