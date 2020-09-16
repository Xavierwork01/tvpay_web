import React from 'react'


class Footer extends React.Component{


    render(){

        return(
            <>
            <div className="footer">
                <div className="footer-top">
                    <div className="footer-items-box">
                        <div>客服中心</div>
                        <ul>
                            <li><a href="#">item1</a></li>
                            <li><a href="#">item1</a></li>
                            <li><a href="#">item1</a></li>
                        </ul>
                    </div>
                    <div className="footer-items-box">
                        <div>關於我們</div>
                        <ul>
                            <li><a href="#">item1</a></li>
                            <li><a href="#">item1</a></li>
                            <li><a href="#">item1</a></li>
                        </ul>
                    </div>
                    <div className="footer-items-box">
                        <div>物流合作</div>
                        <ul>
                            <li><a href="#">item1</a></li>
                            <li><a href="#">item1</a></li>
                            <li><a href="#">item1</a></li>
                        </ul>
                    </div>
                    <div className="footer-items-box">
                        <div>關注我們</div>
                        <ul>
                            <li><a href="#">item1</a></li>
                            <li><a href="#">item1</a></li>
                            <li><a href="#">item1</a></li>
                        </ul>
                    </div>
                    <div className="footer-items-box">
                        <div>下載TvPay</div>
                        <ul>
                            <li><a href="#">item1</a></li>
                            <li><a href="#">item1</a></li>
                            <li><a href="#">item1</a></li>
                        </ul>
                    </div>
                </div>
                <hr/>    
                <div className="footer-down">
                    <p>© 2020 TvPay. 版權所有。</p>
                    <div className="footer-language-box">
                        <div>國家語言 : </div>
                        <div className="footer-language-link"><a href="#">語言</a></div>
                        <div className="footer-language-link"><a href="#">語言</a></div>
                        <div className="footer-language-link"><a href="#">語言</a></div>
                        <div className="footer-language-link"><a href="#">語言</a></div>
                        <div className="footer-language-link"><a href="#">語言</a></div>
                        <div className="footer-language-link"><a href="#">語言</a></div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}


export default Footer