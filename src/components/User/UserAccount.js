import React from 'react'


class UserAccount extends React.Component{

    state = {

        yeararr:[],
        mountharr:[],
        dayarr:[],
        chooseyear:'',
        Userbirthday:'1995/12/12',
        Useryear:'',
        Usermounth:'',
        Userday:''

    }


    Yearselect = (e) => {

        this.setState({ chooseyear : e.target.value })

    }
        
    

    Mounthselect = (e) =>{

        console.log(e.target.value)

        if(e.target.value == 1 || e.target.value == 3 || e.target.value == 5 || e.target.value == 7 || e.target.value == 8 || e.target.value == 10 || e.target.value == 12){

            for(var m = 1; m <= 31;m++){

                this.state.dayarr.push(m)

                
            }

        } else if(e.target.value == 2){

            if((this.state.chooseyear % 4 == 0 && this.state.chooseyear != 0) || (this.state.chooseyear % 400 == 0)){

                for(var m = 1; m <= 29;m++){

                    this.state.dayarr.push(m)
    
                }

            } else{

                for(var m = 1; m <= 28;m++){

                    this.state.dayarr.push(m)
    
                }


            }

        } else if(e.target.value == 4 || e.target.value == 6 || e.target.value == 9 || e.target.value == 11){

            for(var m = 1; m <= 30;m++){

                this.state.dayarr.push(m)

            }

        }

        console.log(this.state.dayarr)

    }

    componentDidMount(){

        // user的生日取值
        let userbirthday = this.state.Userbirthday

        userbirthday = userbirthday.replace(/\//g,'')

        let useryear = userbirthday.substr(0,4)
        let usermounth = userbirthday.substr(4,2)
        let userday = userbirthday.substr(6,2)

        usermounth = usermounth.replace(/^0/,'')
        userday = userday.replace(/^0/,'')

        // 將user的生日放入狀態

        this.setState({
            Useryear : useryear,
            Usermounth : usermounth,
            Userday : userday
        })

        // 渲染生日選擇器

        let newdate = new Date()

        let newyear = newdate.getFullYear()
        
        for(var y = 1990; y <= newyear;y++){

            this.state.yeararr.push(y)

        }

        for(var m = 1; m <= 12;m++){

            this.state.mountharr.push(m)

        }

        if(this.state.Usermounth == 1 || this.state.Usermounth == 3 || this.state.Usermounth == 5 || this.state.Usermounth == 7 || this.state.Usermounth == 8 || this.state.Usermounth == 10 || this.state.Usermounth == 12){

            for(var m = 1; m <= 31;m++){

                this.state.dayarr.push(m)

                
            }

        } else if(this.state.Usermounth == 2){

            if((this.state.chooseyear % 4 == 0 && this.state.chooseyear != 0) || (this.state.chooseyear % 400 == 0)){

                for(var m = 1; m <= 29;m++){

                    this.state.dayarr.push(m)
    
                }

            } else{

                for(var m = 1; m <= 28;m++){

                    this.state.dayarr.push(m)
    
                }


            }

        } else if(this.state.Usermounth == 4 || this.state.Usermounth == 6 || this.state.Usermounth == 9 || this.state.Usermounth == 11){

            for(var m = 1; m <= 30;m++){

                this.state.dayarr.push(m)

            }

        }


    }


    render(){

    

        return(
            <>
            <div className="useraccount">
                <div className="account-head">
                    <div>
                        <div>個人資料</div>
                        <p>管理您的檔案以保護你的帳戶</p>
                    </div>
                </div>
                <div className="account-content">
                    <div className="account-info">
                        <div className="account-items">
                            <label>使用者帳號</label>
                            <div>xxxxxxxx</div>
                        </div>
                        <div className="account-items">
                            <label>姓名</label>
                            <input type="text" className="input" />
                        </div>
                        <div className="account-items">
                            <label>Email</label>
                            <div>user@gmail.com</div>
                        </div>
                        <div className="account-items">
                            <label>手機號碼</label>
                            <input type="text" value='09xxxxxxxx' className="input"/>
                        </div>
                        <div className="account-items">
                            <label>賣場名稱</label>
                            <input type="text" value='xxxxxxxx' className="input" />
                        </div>
                        <div className="account-items">
                            <label>性別</label>
                            <select className="select">
                                <option>男姓</option>
                                <option>女姓</option>
                            </select>
                        </div>
                        <div className="account-items">
                            <label>生日</label>
                            <select name="years" className="select" onChange={this.Yearselect}>
                                <option>{this.state.Useryear}</option>
                                {this.state.yeararr.map(v => (
                                    <option value={v}>{v}</option>
                                ))}
                            </select>
                            <select name="mounth" className="select" onChange={this.Mounthselect}>
                                <option>{this.state.Usermounth}</option>
                                {this.state.mountharr.map(v => (
                                    <option value={v}>{v}</option>
                                ))}
                            </select>
                            <select name="day" className="select">
                                <option>{this.state.Userday}</option>
                                {this.state.dayarr.map(v => (
                                    <option value={v}>{v}</option>
                                ))}
                            </select>
                        </div>
                        <div className="account-save">
                            <button className="button">儲存</button>
                        </div>
                    </div>
                    <div className="account-sticker">
                        <div className="sticker-img">
                            <img src="/images/2.jpg" />
                        </div>
                        <div class="file has-name is-boxed is-small is-primary">
                        <label class="file-label">
                            <input class="file-input" type="file" name="resume"/>
                            <span class="file-cta">
                            <i class="fas fa-upload"></i>
                            <span class="file-label">
                                選擇圖片
                            </span>
                            </span>
                            <span class="file-name">
                            Screen Shot 2017-07-29 at 15.54.25.png
                            </span>
                        </label>
                        </div>
                        <p>檔案格式 : .JPEG、.PNG</p>
                    </div>
                </div>
            </div>
            </>
        )
    }
}


export default UserAccount
