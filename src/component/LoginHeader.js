import React from 'react'


class LoginHeader extends React.Component{


    render(){

        return(
            <>
            <div className="loginheader">
                <div className="loginheader-nav">
                    <div className="login-logo-box">
                        <a href=""><img src=""></img></a>
                        <div>登入</div>
                    </div>
                    <a href="#" className="login-help">需要幫助?</a>
                </div>
            </div>
            </>
        )
    }
}


export default LoginHeader