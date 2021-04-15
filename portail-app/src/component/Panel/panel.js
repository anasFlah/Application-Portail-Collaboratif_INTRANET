import React , { Component }from 'react'

import {Link, Route} from "react-router-dom"


import EditUser from "./edituser";
import CreateUser from "./createuser";
import UsersList from "./userlist";
export default class panel extends Component{
    constructor(props) {
        super(props)
    }
    render(){
        return (
            <div>

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                   
                    <button onClick={this.toggle} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
                        <Link to="/home" className="navbar-brand"><b></b></Link>
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">
                            <Link to="/admin/users" className="nav-link">Users</Link>
                            </li>
                            <li className="navbar-item">
                            <Link to="/admin/create" className="nav-link">Create User</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <Route path="/admin/users" component={UsersList} />
                <Route path="/admin/create" component={CreateUser} />
                <Route path="/admin/edit/:id" component={EditUser} />
            </div>
        )
    }
}
