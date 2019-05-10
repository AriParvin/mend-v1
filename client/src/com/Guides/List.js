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
               <>
                    <div className='guide-container is-mobile '>
                         {this.state.guides.map(el => (<div className='column'><Link to={`/guides/${el._id}`} >
                              <p className="bd-notification is-primary">{el.title}</p>
                         </Link></div>))}
                    </div >
                    <Link to='/guides/create'>Create Guide</Link>
               </>
          )
     }
}
