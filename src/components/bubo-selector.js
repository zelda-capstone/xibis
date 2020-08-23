import React from 'react'
import {CustomizableBubo, SelectTrait} from '../components'
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
      bubos: [] // map these to join a line at the bottom?
      // should retrigger every time 'create' is called
      // when users collection length is 10, move to next page
    }
  }

  handleColor = (evt) => {
    this.setState({ color: evt.target.value })
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
      <div className='bubo-selector-container'>
        <h2>assemble your bubos</h2>
        <div className='bubo-selector'>
          <div>color:
            <SelectTrait handleClick={this.handleColor} value='maroon'/>
            <SelectTrait handleClick={this.handleColor} value='lavender'/>
            <SelectTrait handleClick={this.handleColor} value='silver'/>
            <SelectTrait handleClick={this.handleColor} value='navy'/>
          </div>
          <div>sparkle:
            <SelectTrait handleClick={this.handleSparkle} value='green'/>
            <SelectTrait handleClick={this.handleSparkle} value='yellow'/>
          </div>
          <div>accessory:
            <SelectTrait handleClick={this.handleAccessory} value='antennae'/>
            <SelectTrait handleClick={this.handleAccessory} value='hat'/>
            <SelectTrait handleClick={this.handleAccessory} value='glasses'/>
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
