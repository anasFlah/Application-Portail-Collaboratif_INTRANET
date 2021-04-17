import React , { Component }from 'react';
import {Link, Route,} from "react-router-dom";
 import ReactDOM from 'react-dom';
import EditUser from "./edituser";
import CreateUser from "./createuser";
import UsersList from "./userlist";

// export default class panel extends Component{
//     constructor(props) {
//         super(props)
//     }
//     render(){
//         return (
//             <div>

//                 <nav className="navbar navbar-expand-lg navbar-light bg-light">
                   
//                     <button onClick={this.toggle} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>

//                     <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
//                         <Link to="/home" className="navbar-brand"><b></b></Link>
//                         <ul className="navbar-nav mr-auto">
//                             <li className="navbar-item">
//                             <Link to="/admin/users" className="nav-link">Users</Link>
//                             </li>
//                             <li className="navbar-item">
//                             <Link to="/admin/create" className="nav-link">Create User</Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </nav>

//                 <Route path="/admin/users" component={UsersList} />
//                 <Route path="/admin/create" component={CreateUser} />
//                 <Route path="/admin/edit/:id" component={EditUser} />
//             </div>
//         )
//     }
// }

export default class ExpandingItem extends Component {
    constructor() {
      super();
      this.state = {
        active: false
      };
    }
    
    render() {
      const activeClass = this.state.active ? "active" : "inactive";
      const task = this.props.details;
      return (
              <div className={activeClass} onClick={this.toggle}>
                <span className="summary">{task.summary}</span>
                <span className="folding-pannel link">{task.link}</span>
              </div>
      );
    }
  }
  
  class Expander extends React.Component {
    constructor() {
      super();
      this.state = {
        tasks: sampleTasks,
      };
      this.renderTask = this.renderTask.bind(this);
    }
    renderTask(key) {
      return <ExpandingItem key={key} index={key} details={this.state.tasks[key]} />
    }
    render() {
      return(
        <div>
          <h1>Expander Module (React/TypeScript)</h1>
          <div className="accordion-container">{Object.keys(this.state.tasks).map(this.renderTask)} </div>
          {/* this for user list */}
                    <Route path="/admin/users" component={UsersList} />
                    {/* this for creting user */}
                 <Route path="/admin/create" component={CreateUser} />
                 {/* this for edit user */}
              <Route path="/admin/edit/:id" component={EditUser} />
        </div>    
      )
    }
  }
  const sampleTasks = {
    Task1: {summary:'user 1', link:'link to Github Issue here'},
    Task2: {summary:'user 2', link:'link to Github Issue here'},
    Task3: {summary:'user 2', link:'link to Github Issue here'},
    Task4: {summary:'user 2', link:'link to Github Issue here'},
    Task5: {summary:'user 2', link:'link to Github Issue here'}
  };
  
               
  ReactDOM.render(
    <Expander />,
    document.getElementById('mount-point')
  );
