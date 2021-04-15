import React, { Component } from "react";
import axios from "axios";
import "./signup.css";
//sigin component that contain username email password
export default class signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      username: "",
    };
  }
  //send data with axios to db
  signin() {
    axios.post("/signupManager", {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    });

  }

  render() {
    return (

      <div class="container" id="container">
	<div class="form-container sign-in-container">
		<form action="#">
			<h1>Sign in</h1>
	    <span></span>
      <input type="username" placeholder="username"  onChange={(e=> this.setState({username:e.target.value}))}/>
			<input type="email" placeholder="Email"  onChange={(e=> this.setState({email:e.target.value}))}/>
			<input type="password" placeholder="Password"  onChange={(e=> this.setState({password:e.target.value}))}/>
			<span></span>
			<button>Sign In</button>
      <a href="#">Create Account </a>
      <div className="signbtn">
      <button >Sign Up</button></div>
      
		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1>Welcome To Our App</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button class="ghost" id="signIn">Sign In</button>
			</div>
			<div class="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Enter your personal details and start journey with us</p>
			
			</div>
		</div>
	</div>
</div>
     
    );
  }
}