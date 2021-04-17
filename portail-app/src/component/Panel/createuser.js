import React from 'react';
import axios from 'axios';

class CreateUser extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            userId: '',
            userFirstName: '',
            userLastName: '',
            userPassword: '',
            userRole: ''
        };
    }

    onChangeUserId = (event) => {
        this.setState({ userId: event.target.value})
    }

    onChangeUserFirstName = (event) => {
        this.setState({ userFirstName: event.target.value})
    }

    onChangeUserLastName = (event) => {
        this.setState({ userLastName: event.target.value})
    }

    onChangeUserPassword = (event) => {
        this.setState({ userPassword: event.target.value})
    }

    onChangeUserRole = (event) => {
        this.setState({ userRole: event.target.value})
    }

    onSubmit = (event) => {
        event.preventDefault();

        const newUser = {
            userId: this.state.userId,
            userFirstName: this.state.userFirstName,
            userLastName: this.state.userLastName,
            userPassword: this.state.userPassword,
            userRole: this.state.userRole
        }

        axios.post('http://localhost:3500/users/create', newUser)
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) =>{
                console.log(error)
            })

        this.setState({
            userId: '',
            userFirstName: '',
            userLastName: '',
            userPassword: '',
            userRole: ''
        })
        this.props.history.push('/admin/users')
    }


    render() {
        return (
            <div style={{marginTop: 20}} className="container">
                <h3>Create User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>User ID:</label>
                        <input type="text" className="form-control" value={this.state.userId} onChange={this.onChangeUserId} />
                    </div>
                    <div className="form-group">
                        <label>First Name:</label>
                        <input type="text" className="form-control" value={this.state.userFirstName} onChange={this.onChangeUserFirstName} />
                    </div>
                    <div className="form-group">
                        <label>Last Name:</label>
                        <input type="text" className="form-control" value={this.state.userLastName} onChange={this.onChangeUserLastName} />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="text" className="form-control" value={this.state.userPassword} onChange={this.onChangeUserPassword} />
                    </div>
                    <div className="form-group">
                        <label>Role:</label>
                        {/* <input type="text" className="form-control" value={this.state.userRole} onChange={this.onChangeUserRole} /> */}
                        <select className="form-control" value={this.state.userRole} onChange={this.onChangeUserRole}>
                            <option></option>
                            <option>Admin</option>
                            <option>User</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateUser;