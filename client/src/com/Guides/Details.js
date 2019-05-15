import React from "react";
import { Link, Route } from "react-router-dom";
import EditGuide from "./Edit";
import axios from "axios";
import { getGuide } from '../../service/api'
import { deleteGuide } from '../../service/api'
import AddStep from '../Steps/Add'
import Like from './Like'
import Steps from '../Steps/Steps'
import CarouselBox from '../Carousel'

export default class GuideDetails extends React.Component {
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
          let editBlock = <></>;

          const stepList = this.state.steps && this.state.steps.map((step, i) => {
               console.log(step)
               return (
                    <div>
                         <div>
                              <Steps key={i} id={step._id} title={step.title} description={step.description} />
                         </div>
                    </div>
               );
          })





          return (

               <>
                    {guide && <div className='guide-layout'> <h1>{guide.title}</h1>
                         <p>{guide.description}</p></div>}

                    {this.state.steps && this.state.steps.length > 0 && <h3>Steps</h3>}

                    <section className='guide-desc-footer'>
                         <Like /> <p id='guide-time'>Time: {guide.time} minute/s</p>
                    </section>
                    <CarouselBox steps={this.state.steps} />

                    {/* {stepList} */}

                    <AddStep handleAdd={this.handleAdd} guide={this.state.guide} />
                    <Link to="/guides">Back</Link>



               </>
          )
     }

}


