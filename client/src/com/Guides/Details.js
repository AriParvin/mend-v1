import React from "react";
import { Link } from "react-router-dom";
import EditGuide from "./Edit";
import axios from "axios";
import { getGuide } from '../../service/api'

class GuideDetails extends React.Component {
     state = {
          guide: {}
     };

     guideDetails = () => {
          const id = this.props.match.params.id;
          getGuide(id)
               .then(response => {
                    this.setState({
                         guide: response
                    });
               });
     };

     deleteGuide = () => {
          const id = this.props.match.params.id;

          axios.delete(`http://localhost:5000/api/guides/${id}`).then(response => {
               // redirects to /guides
               this.props.history.push("/guides");
          });
     };

     componentDidMount() {
          this.guideDetails();
     }

     render() {

          const { guide } = this.state;
          console.log(guide, "this is the guide details")
          //console.log(this.props);

          let editBlock = <></>;

          if (this.props.user && this.props.user._id === guide.owner) {
               editBlock = (
                    <div>
                         {/* <EditProject guide={guide} getDetails={this.getProject} /> */}
                         <button
                              style={{ marginTop: "10px" }}
                              className="btn btn-danger"
                              onClick={this.deleteProject}
                         >
                              Delete guide
          </button>
                    </div>
               );
          }
          console.log(this.state.guide)
          return (
               <div>
                    <h1>{guide.title}</h1>
                    <p>{guide.description}</p>
                    <p>{guide.time}</p>
                    <p>{guide.rating}</p>

                    {guide.steps && guide.steps.length > 0 && <h3>Steps</h3>}
                    {guide.steps &&
                         guide.steps.map(step => {
                              return (
                                   <div key={step._id}>
                                        <Link to={`/steps/${step._id}`}>{step.title}</Link>
                                   </div>
                              );
                         })}

                    {editBlock}

                    {/* <AddStep guide={guide} getGuide={this.getGuide} /> */}
                    <br />

                    <Link to="/guides">Back</Link>
               </div>
          );
     }
}

export default GuideDetails;
