import React,{Component} from 'react';
import axios from 'axios';
import {ClipLoader, SyncLoader} from "react-spinners/";
import { css } from "@emotion/core";
import {loginUser} from '../action';
import {connect} from 'react-redux';

class Login extends Component
{
    constructor(props) 
    { 
        super(props); 
        this.state = { userName:'', password:'',loader:false,login:false}; 
    } 

    async onLogin()
    {
        try
        {
        const baseURL =  'https://adda52.herokuapp.com/';
        this.setState({loader:true});
        var postParams =
        {
            'userName':this.state.userName.toString(),
            'password':this.state.password.toString()
        };
        console.log(postParams);
        var response = await axios.post(baseURL+"api/v1/login",postParams,{headers:{'Content-Type':'application/json','Access-Control-Allow-Origin': '*'}});
        if( response !== undefined && response.status === 200 && response.statusText.toLowerCase() === "ok")
        {
            this.setState({response:response.data.data,message:response.data.message,login:true});
            console.log(this.props);
        }else
        {
            this.setState({message:response.data.message,login:false,response:{}});
        }
        }
        catch(e)
        {
        console.log("Login error:",e);
        }
        this.setState({loader:false});
        this.props.loginUser(this.state);
    }

    onLoginClick()
    {
      if(this.state.loader)
      {
        return(
            <div className="sweet-loading">
                <SyncLoader
                css={override}
                size={5}
                color={"#3897f0"}
                loading={true}
                />
            </div>
        );
      }
      else
      {
          return(<input type="submit" class="fadeIn fourth" value="Log In" onClick={this.onLogin.bind(this)} />);
      }
    }

    render()
    {
        return(
        <div>
            <div class="wrapper fadeInDown">
            <div id="formContent">
                <h2 class="active"> Sign In </h2>
                <h2 class="inactive underlineHover">Sign Up </h2>

                <div class="fadeIn first">
                <img src="login.svg" id="icon" alt="User Icon" />
                </div>

                <form action="javascript:void(0);" method="GET">
                <input type="text" id="login" class="fadeIn second" name="login" placeholder="login" onChange={(e)=>{this.setState({userName:e.target.value})}}/>
                <input type="text" id="password" class="fadeIn third" name="login" placeholder="password" onChange={(e)=>{this.setState({password:e.target.value})}}/>
                {this.onLoginClick()}
                <p style={{color:"red"}}>{this.props.Mode.loginData.message}</p>
                </form>

                <div id="formFooter">
                <a class="underlineHover" href="#">Forgot Password?</a>
                </div>

            </div>
            </div>
        </div>);
    }
} 

const override = css`
  display: block;
  margin: 0 auto;
  text-align: center;
`;

const mapStateToProps = state =>
{
    console.log(state);
    const {Mode} = state;
    return ({Mode});
};

export default connect(mapStateToProps,{loginUser}) (Login);