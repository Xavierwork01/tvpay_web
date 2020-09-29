import React from 'react'
import { toast } from 'react-toastify'

class Product extends React.Component{

    likePro = () => {
        toast.success('新增成功')
    }


    render(){
        return(
            <>
            
                <div className="card">
                    <div className="card-image">
                        <a href="#">
                            <figure className="image is-4by3">
                            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                            </figure>
                        </a>
                    </div>
                    <div className="card-content">
                        <div className="content">
                            <p>Product Name</p>
                            <p><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></p>
                            <div className="product-buy">
                                <div>$999</div>
                                <button className="product-buy-icon" onClick={this.likePro}><i class="fas fa-heart"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </>    
        )
    }
}


export default Product