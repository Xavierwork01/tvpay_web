import React from 'react'


class LoginHeader extends React.Component{


    render(){

        return(
            <>
            <div className="LR-header">
                <div className="LR-header-nav">
                    <div className="LR-logo-box">
                        <a href=""><img src=""></img></a>
                        <div>登入</div>
                    </div>
                    <a href="#" className="LR-help">需要幫助?</a>
                </div>
            </div>
            </>
        )
    }
}


export default LoginHeader