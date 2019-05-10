import React, { Component } from 'react'
import { getGuides } from '../../service/api'
import { Link } from 'react-router-dom'

export default class List extends Component {
     state = {
          guides: []
     }

     allGuides = () => {
          getGuides()
               .then(guides => {
                    this.setState({
                         guides: guides
                    })
               })
     }

     componentDidMount() {
          this.allGuides()
     }

     render() {
          console.log(this.state.guides)
          return (
               <div>
                    {this.state.guides.map(el => (<Link to={`/guides/${el._id}`} >
                         <p>{el.title}</p>
                    </Link>))}

               </div >
          )
     }
}
