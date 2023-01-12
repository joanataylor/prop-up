import React, { Component } from 'react'
import PersonCard from './components/PersonCard'
import people from './data/people'

export class App extends Component {

  render() {
    return (
      <div className='container border  border-primary my-3 p-3'>
        {/* map method allows to get info from data folder and make code more DRY */}
        {
          people.map((person, idx) => {
            return(
              <PersonCard
              // must have key - in console will give error - each child must have unique ID
                key={idx}
                fName={person.fname}
                lName={person.lname}
                age={person.age}
                hairColor={person.hairColor}
              />
            )
          })
        }
        {/* <PersonCard personFname='Jane' personLname='Doe' personAge={45} personHairColor='Black' />
        <PersonCard personFname='John' personLname='Smith' personAge={88} personHairColor='Brown' />
        <PersonCard personFname='Millard' personLname='Fillmore' personAge={50} personHairColor='Brown' />
        <PersonCard personFname='Maria' personLname='Smith' personAge={62} personHairColor='Brown' /> */}
      </div>
    )
  }
}

export default App 