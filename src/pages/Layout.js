import React from 'react'
import Header from '../commons/Header'
import Footer from '../commons/Footer'

const Layout = props =>{


    return (
        <>
        
        <div className="main">
            <Header/>
                {props.children}
            <Footer/>
        </div>
        
        </>
    )
}



export default Layout