import React from "react";
import axios from "axios";

class EditGuide extends React.Component {
     state = {
          title: "",
          description: "",
          material: [],
          time: 0,
          steps: [],
          rating: 0
     };

     handleSubmit = event => {
          event.preventDefault();

          const id = this.props.project._id;

          axios
               .put(
                    `http://localhost:5000/api/guides/${id}`,
                    {
                         title: this.state.title,
                         description: this.state.description,
                         material: this.state.material,
                         time: this.state.time,
                         rating: this.state.rating,
                         steps: this.state.steps
                    },
               )
               .then(() => {
                    this.props.getDetails();
                    this.setState({
                         title: "",
                         description: "",
                         material: [],
                         time: 0,
                         rating: 0,
                         steps: []
                    });
               });
     };

     handleChange = event => {
          const name = event.target.name;
          const value = event.target.value;

          this.setState({ [name]: value });
     };

     render() {
          return (
               <div>
                    <hr />
                    <h3>Edit form</h3>
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
                         <div className="form-group">
                              <label>material:</label>
                              <input
                                   className="form-control"
                                   value={this.state.material}
                                   onChange={this.handleChange}
                                   type="array"
                                   name="material"
                              />
                         </div>
                         <div className="form-group">
                              <label>time:</label>
                              <input
                                   className="form-control"
                                   value={this.state.time}
                                   onChange={this.handleChange}
                                   type="number"
                                   name="time"
                              />
                         </div>
                         <div className="form-group">
                              <label>rating:</label>
                              <input
                                   className="form-control"
                                   value={this.state.rating}
                                   onChange={this.handleChange}
                                   type="number"
                                   name="rating"
                              />
                         </div>
                         <div className="form-group">
                              <label>steps:</label>
                              <input
                                   className="form-control"
                                   value={this.state.steps}
                                   onChange={this.handleChange}
                                   type="array"
                                   name="steps"
                              />
                         </div>
                         <input
                              className="btn btn-primary"
                              type="submit"
                              value="Create Guide"
                         />
                    </form>
               </div>
          );
     }
}

export default EditGuide;
