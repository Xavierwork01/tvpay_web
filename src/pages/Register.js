import React from 'react'
import RegisterHeader from '../component/RegisterHeader'
import Footer from '../commons/Footer'
import { AiFillFacebook } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { AiFillApple } from 'react-icons/ai'

class Register extends React.Component{

    render(){

        return(
            <>
            <RegisterHeader/>
            <div className="login-wrapper">
            <form className="box login-box">
                <h1>註冊</h1>
                <div class="field">
                    <div class="control">
                        <input class="input is-success" type="text" placeholder="姓名"/>
                    </div>
                    {/* <p className="help is-danger">請填寫正確的格式</p> */}
                    <p className="help is-success">格式正確</p>
                </div>
                <div class="field">
                    <div class="control has-icons-right">
                        <input class="input is-danger" type="text" placeholder="手機"/>   
                    </div>
                    <p className="help is-danger">格式不正確</p>
                </div>
                <div class="field">
                    <div class="control has-icons-right">
                        <input class="input" type="email" placeholder="信箱"/>   
                    </div>
                    {/* <p className="help is-danger">密碼不正確</p> */}
                    <p className="help">undefined</p>
                </div>
                <div class="field">
                    <div class="control has-icons-right">
                        <input class="input" type="password" placeholder="密碼"/>   
                    </div>
                    {/* <p className="help is-danger">密碼不正確</p> */}
                    <p className="help">undefined</p>
                </div>
                <div class="control">
                    <button class="button is-primary">註冊</button>
                </div>
                <div className="login-features">
                    <div className="login-newmember">
                        <span>已有帳號?</span>
                        <a href="#">登入</a>
                    </div>
                </div>
            </form>
            </div>
            <Footer/>
            </>
        )
    }
}

export default Register