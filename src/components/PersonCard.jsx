import React, { Component } from 'react'

export class PersonCard extends Component {
  render() {
    return (
      <div className='card mb-3'>
        <div className="card-body">
          <h2>{this.props.personLname}, {this.props.personFname}</h2>
          <p className="card-text">Age: {this.props.personAge}</p>
          <p className="card-text">Hair Color: {this.props.personHairColor}</p>
        </div> 
      </div>
    )
  }
}

export default PersonCard