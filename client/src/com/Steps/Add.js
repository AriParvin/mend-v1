import React from "react";
import axios from "axios";
import { addStep } from '../../service/api'

class AddStep extends React.Component {
     state = {
          title: "",
          picture: '',
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
          const id = this.props.guide._id;

          const data = {
               title: this.state.title,
               // picture: this.state.picture,
               description: this.state.description,
               guide: id
          }


          addStep(id, data)
               .then((response) => {
                    this.props.handleAdd(response);
                    this.setState({ title: "", picture: '', description: "", displayForm: false });
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
                                   {/* <div className="form-group">
                                        <label>picture:</label>
                                        <input
                                             className="form-control"
                                             value={this.state.picture}
                                             onChange={this.handleChange}
                                             name="picture"
                                             type="text"
                                        />
                                   </div> */}
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
