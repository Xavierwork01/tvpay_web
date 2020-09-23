import React from 'react'
import LoginHeader from '../components/Login/LoginHeader'
import Footer from '../commons/Footer'
import { AiFillFacebook } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { AiFillApple } from 'react-icons/ai'

class Login extends React.Component{

    render(){

        return(
            <>
            <div className="login-wrapper">
            <LoginHeader/>
            <form className="box login-box">
                <h1>登入</h1>
                <div class="field">
                    <div class="control">
                        <input class="input is-success" type="text" placeholder="信箱"/>
                    </div>
                    {/* <p className="help is-danger">請填寫正確的格式</p> */}
                    <p className="help is-success">格式正確</p>
                </div>
                <div class="field">
                    <div class="control has-icons-right">
                        <input class="input is-danger" type="email" placeholder="密碼"/>   
                    </div>
                    <p className="help is-danger">密碼不正確</p>
                </div>
                <div class="control">
                    <button class="button is-primary">登入</button>
                </div>
                <div className="login-features">
                    <div className="login-others">
                        <div><a href="#">忘記密碼</a></div>
                        <div><a href="#">使用XX登入</a></div>
                    </div>
                    <div className="login-text">
                        <div></div>
                        <span>或</span>
                        <div></div>
                    </div>
                    <div className="login-otherinter">
                        <button className="login-facebook">
                            <AiFillFacebook className="login-facebook-icon" />
                        </button>
                        <button className="login-google">
                            <FcGoogle className="login-google-icon" />
                        </button>
                        <button className="login-apple">
                            <AiFillApple className="login-apple-icon" />
                        </button>
                    </div>
                    <div className="login-newmember">
                        <span>新朋友?</span>
                        <a href="#">註冊</a>
                    </div>
                </div>
            </form>
            <Footer/>
            </div>
            </>
        )
    }
}

export default Login