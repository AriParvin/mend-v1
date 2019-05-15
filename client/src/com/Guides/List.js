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
                    <div className='guide-container'>
                         {this.state.guides.map(el =>
                              (<Link
                                   className='guide'
                                   to={`/guides/${el._id}`}><img src={el.image} />

                                   {/* <p className='guide-title'>
                                        {el.title}</p> */}

                              </Link>))}
                    </div >
                    <Link to='/guides/create'>Create Guide</Link>
               </>
          )
     }
}
