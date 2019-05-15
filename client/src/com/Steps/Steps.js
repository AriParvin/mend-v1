import React, { Component } from 'react'
import { getSteps } from '../../service/api'
import { Link } from 'react-router-dom'

export default class Steps extends Component {
     state = {
          title: this.props.title,
          description: this.props.description
     }

     // allSteps = () => {
     //      getSteps()
     //           .then(steps => {
     //                this.setState({
     //                     steps: steps
     //                })
     //           })
     // }

     // componentDidMount() {
     //      this.allSteps()
     // }

     render() {
          const { id } = this.props
          return (
               <>
                    <div class="carousel-item active">
                         <img class="d-block w-100" src="..." alt="First slide" />

                         <Link to={`/steps/${id}`}>{this.state.title}</Link>
                         <p>{this.state.description}</p>
                    </div>
               </>
          )
     }
}

