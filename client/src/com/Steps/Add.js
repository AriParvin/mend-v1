import React from "react";
import axios from "axios";

class AddStep extends React.Component {
     state = {
          title: "",
          description: "",
          material: '',
          displayForm: false
     };

     handleChange = event => {
          const { name, value } = event.target;
          this.setState({ [name]: value });
     };

     handleSubmit = event => {
          event.preventDefault();

          const guide = this.props.guide._id;
          axios
               .post(
                    "http://localhost:5000/api/steps",
                    {
                         title: this.state.title,
                         description: this.state.description,
                         guide
                    },
                    { withCredentials: true }
               )
               .then(() => {
                    this.props.getProject();
                    this.setState({ title: "", description: "", displayForm: false });
               });
     };

     toggleForm = () => {
          this.setState({
               displayForm: !this.state.displayForm
          });
     };

     render() {
          return (
               <div>
                    <hr />
                    <button className="btn" onClick={this.toggleForm}>
                         Add Step
        </button>
                    {this.state.displayForm && (
                         <div>
                              <form onSubmit={this.handleSubmit}>
                                   <div className="form-group">
                                        <label>title:</label>
                                        <input
                                             className="form-control"
                                             value={this.state.title}
                                             onChange={this.handleChange}
                                             name="title"
                                             type="text"
                                        />
                                   </div>
                                   <div className="form-group">
                                        <label>description:</label>
                                        <input
                                             className="form-control"
                                             value={this.state.description}
                                             onChange={this.handleChange}
                                             type="text"
                                             name="description"
                                        />
                                   </div>
                                   <input
                                        className="btn btn-primary"
                                        type="submit"
                                        value="confirm"
                                   />
                              </form>
                         </div>
                    )}
               </div>
          );
     }
}

export default AddStep;
