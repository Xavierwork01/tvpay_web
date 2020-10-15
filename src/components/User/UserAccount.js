import React from 'react'


class UserAccount extends React.Component{

    state = {

        yeararr:[],
        mountharr:[],
        dayarr:[],
        chooseyear:''

    }


    Yearselect = (e) => {

        this.setState({ chooseyear : e.target.value })

    }
        
    

    Mounthselect = (e) =>{

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

        } else{

            for(var m = 1; m <= 30;m++){

                this.state.dayarr.push(m)

            }

        }

        console.log(this.state.dayarr)

    }


    render(){

        let newdate = new Date()

        let newyear = newdate.getFullYear()
        
        for(var y = 1990; y <= newyear;y++){

            this.state.yeararr.push(y)

        }

        for(var m = 1; m <= 12;m++){

            this.state.mountharr.push(m)

        }

        

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
                                {this.state.yeararr.map(v => (
                                    <option value={v}>{v}</option>
                                ))}
                            </select>
                            <select name="mounth" className="select" onChange={this.Mounthselect}>
                                {this.state.mountharr.map(v => (
                                    <option value={v}>{v}</option>
                                ))}
                            </select>
                            <select name="day" className="select">
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
                        <div class="file has-name is-boxed is-small is-primary">
                        <div className="sticker-img">
                            <img src="" />
                        </div>
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
