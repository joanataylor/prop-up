import React, { Component } from 'react'

export class PersonCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      age: this.props.age,
    };
  }

  render() {
    //by deconstruting it allows us to only write {personAge} and not have to write this.props everytime
    const {fName, lName, hairColor} = this.props;
    const {age} = this.state;
    const birthday = () => this.setState({age:this.state.age +1});

    return (
      <div className='card mb-3'>
        <div className="card-body">
          <h2>{lName}, {fName}</h2>
          <p className="card-text">Age: {age}</p>
          <p className="card-text">Hair Color: {hairColor}</p>
          <button className="btn btn-success" onClick={birthday}>Birthday</button>
        </div> 
      </div>
    )
  }
}

export default PersonCard