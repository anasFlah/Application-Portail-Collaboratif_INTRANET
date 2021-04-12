import "./LoginA.css";
import axios from 'axios';
import React ,{Component} from "react" ;
export default class loginA extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: "",
        password: "",
        username:"",
      };
    }
    //send data of login to db
    async login() {
      await axios
        .post("/loginAdmin", {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
        })
        .then(function (res) {
          if (res.data.status === "login admin successed") {
            console.log(res);
            document.cookie = `username=${res.data.adminemail},${res.data.username}`;
          
          }
        });
    }
    render() {
      return (

<div>
<div class='bold-line'></div>
<div class='container'>
  <div class='window'>
    <div class='overlay'></div>
    <div class='content'>
      <div class='welcome'>Admin Panel!</div>
      <div class='subtitle'>We're almost done. </div>
      <div class='input-fields'>
        <input type='text' placeholder='Username' class='input-line full-width'
        onChange={(e) => this.setState({ username: e.target.value })}></input>
        <input type='email' placeholder='Email' class='input-line full-width'
        onChange={(e) => this.setState({ email: e.target.value })}></input>
        <input type='password' placeholder='Password' class='input-line full-width' 
        onChange={(e) => this.setState({ password: e.target.value })}></input>

      </div>
  
      <div><button class='ghost-round full-width' value="login" onClick={this.login.bind(this)}>login Account</button></div>
    </div>
  </div>
</div>
</div>
      );
    }
  }