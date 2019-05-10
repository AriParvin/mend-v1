import React from "react";
import axios from "axios";
import { addGuide } from '../../service/api'

class AddGuide extends React.Component {
     state = {
          title: "",
          description: "",
          material: [],
          time: 0,
          steps: [],
          rating: 0
     };


     handleChange = event => {
          const name = event.target.name;
          const value = event.target.value;

          this.setState({
               [name]: value
          });
     };

     handleSubmit = event => {
          event.preventDefault();

          const data = {
               title: this.state.title,
               description: this.state.description,
               material: this.state.material,
               time: this.state.time,
               rating: this.state.rating,
               steps: this.state.steps
          }

          addGuide(data)
               .then((response) => {
                    this.props.history.push('/guides')
               })
          // this.props.getData();
          this.setState({
               title: "",
               description: "",
               material: [],
               time: 0,
               rating: 0,
               steps: []
          })
     };
     ;

     render() {
          return (
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
                              className="btn-submit-guide"
                              type="submit"
                              value="Create Guide"
                         />
                    </form>
               </div>
          );
     }
}

export default AddGuide;
