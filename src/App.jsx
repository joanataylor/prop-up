import React, { Component } from 'react'
import PersonCard from './components/PersonCard'

export class App extends Component {
  render() {
    return (
      <div className='container border  border-primary my-3 p-3'>
        <PersonCard personFname='Jane' personLname='Doe' personAge={45} personHairColor='Black' />
        <PersonCard personFname='John' personLname='Smith' personAge={88} personHairColor='Brown' />
        <PersonCard personFname='Millard' personLname='Fillmore' personAge={50} personHairColor='Brown' />
        <PersonCard personFname='Maria' personLname='Smith' personAge={62} personHairColor='Brown' />
      </div>
    )
  }
}

export default App