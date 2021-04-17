import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import User from './users';

class UsersList extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            users: []
        }
    }


    componentDidMount() {
        axios.get('http://localhost:3500/users')
            .then((response) => {
                this.setState({ users: response.data})
            })
            .catch((error) => console.log(error))
    }

    componentDidUpdate() {
        axios.get('http://localhost:3500/user')
            .then((response) => {
                this.setState({ users: response.data})
            })
            .catch((error) => console.log(error))
    }

    userOnList = () => {
        return (
            this.state.users.map((user, index) => {
                return <User user={ user } key={ index } />;
            })
        )
    }
    render() {
        return (
            <div className="container">
                <h3>List of Users</h3>
                <table className="table table-stripped" style={{marginTop: 20}}>
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Password</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.userOnList()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default UsersList;