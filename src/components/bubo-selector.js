import React from 'react'
import {CustomizableBubo} from '../components'
import firebase from '../firebase'

//after combination options are chosen, bubo will be assigned a specific imageUrl matching that particular combo, from the sprite sheet?

class BuboSelector extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: '',
      sparkle: '',
      accessory: '',
      personality: [],
      bubos: [] // map these to a line at the bottom
      // should retrigger every time 'create' is called
      // when users collection length is 10, move to next page
    }
  }

  handleColor = (evt) => {
    console.log(evt.target.value)
    this.setState({ color: evt.target.value })
    console.log(this.state.color)
  }

  handleSparkle = (evt) => {
    this.setState({ sparkle: evt.target.value })
  }

  handleAccessory = (evt) => {
    this.setState({ accessory: evt.target.value })
  }

  handlePersonality = (evt) => {
    const personality = this.state.personality;
    if (personality.length < 2) {
      this.setState({ personality: [...personality, evt.target.value] })
    } else if (personality.length === 2) {
      this.setState({ personality: [personality[0], evt.target.value] })
    }
  }

  handleCreate = async () => {
    //send state to DB and add bubo to user's bubo collection
    //animate bubo to join the line at the bottom of the screen
    const db = firebase.firestore();
    console.log(db.collection('bubos').doc('1'));
    //db.collection('users').doc().set({})
  }

  render() {
  return (
    <>
      <div className='bubos-selector-container'>
        <h2>Assemble your bubos.</h2>
        <div className='bubo-selector'>
          <div>color:
            <button onClick={this.handleColor} value='navy'>navy</button>
            <button onClick={this.handleColor} value='maroon'>maroon</button>
            <button onClick={this.handleColor} value='lavender'>lavender</button>
            <button onClick={this.handleColor} value='silver'>silver</button>
          </div>
          <div>sparkle:
            <span>green</span>
            <span>yellow</span>
          </div>
          <div>accessory:
            <span>antennae</span>
            <span>hat</span>
            <span>glasses</span>
          </div>
          <div>personality (choose two):</div>
            <div>
            <select onChange={this.handlePersonality}>
              <option>shy</option>
              <option>stubborn</option>
              {/* <div>map options from db here</div> */}
            </select>
            <select onChange={this.handlePersonality}>
              <option>brave</option>
              <option>kind</option>
            </select>
          </div>
          <CustomizableBubo {...this.state} />
        </div>
        <div>
          <button className='button' onClick={this.handleCreate}>create</button>
        </div>
      </div>
    </>
  )
  }
}

export default BuboSelector
