import React from "react";
import { signup } from "../../service/api";

class Signup extends React.Component {
     state = {
          email: "",
          username: "",
          password: ""
     };

     handleChange = event => {
          const { name, value } = event.target;

          this.setState({
               [name]: value
          });
     };

     handleSubmit = event => {
          event.preventDefault();

          const { email, username, password } = this.state;

          signup(email, username, password).then(user => {
               this.props.setUser(user);
               this.setState({
                    email: "",
                    username: "",
                    password: ""
               });
          });
     };

     render() {
          return (
               <div>
                    <form onSubmit={this.handleSubmit}>
                         <div>
                              <label>e-mail: </label>
                              <input
                                   value={this.state.email}
                                   onChange={this.handleChange}
                                   type="text"
                                   name="email"
                              />
                         </div>
                         <div>
                              <label>username: </label>
                              <input
                                   value={this.state.username}
                                   onChange={this.handleChange}
                                   type="text"
                                   name="username"
                              />
                         </div>
                         <div>
                              <label>password: </label>
                              <input
                                   value={this.state.password}
                                   onChange={this.handleChange}
                                   type="password"
                                   name="password"
                              />
                         </div>
                         <input type="submit" value="signup" />
                    </form>
               </div>
          );
     }
}

export default Signup;
