import React from "react";
import { Link, Route } from "react-router-dom";
import EditGuide from "./Edit";
import axios from "axios";
import { getGuide } from '../../service/api'
import { deleteGuide } from '../../service/api'
import AddStep from '../Steps/Add'
import Like from './Like'
import Steps from '../Steps/Steps'

class GuideDetails extends React.Component {
     state = {
          guide: {},
          steps: []
     };

     handleAdd = (newStep) => {
          this.setState({
               steps: [...this.state.steps, newStep]
          })
     }

     guideDetails = () => {
          const id = this.props.match.params.id;
          getGuide(id)
               .then(response => {
                    this.setState({
                         guide: response,
                         steps: response.steps
                    });
               });
     };


     removeGuide = () => {
          const id = this.props.match.params.id;

          deleteGuide(id).then(res => {
               // redirects to /guides
               console.log(res)
               this.props.history.push("/");

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
                         {/* <button
                              style={{ marginTop: "10px" }}
                              className="btn btn-danger"
                              onClick={this.removeGuide}
                         >
                              Delete guide
          </button> */}
                    </div>
               );
          }
          console.log(this.state.steps, 'steps added')
          console.log(this.state.guide)
          return (

               < >
                    {guide && <div className='guide-layout'> <h1>{guide.title}</h1>
                         <p>{guide.description}</p>
                         {/* <Link to={`/guides/edit/${guide._id}`} > Edit</Link> */}
                         {/* <button onClick={this.removeGuide}>Remove</button> */}
                         {this.state.steps && this.state.steps.length > 0 && <h3>Steps</h3>}

                         <section className='guide-desc-footer'>
                              <Like /><p id='guide-time'>Time: {guide.time} minute/s</p>
                         </section>

                         {/* {editBlock} */}
                         {this.state.steps &&
                              this.state.steps.map((step, i) => {
                                   console.log(step)
                                   return (
                                        <div key={step._id}>
                                             <div>
                                                  <Steps key={i} title={step.title} description={step.description} />
                                             </div>
                                             <Link to={`/steps/${step._id}`}>{step.title}</Link>
                                        </div>
                                   );
                              })}
                         <AddStep handleAdd={this.handleAdd} guide={this.state.guide} />
                         <Link to="/guides">Back</Link> </div>}

               </>
          );
     }
}

export default GuideDetails;
