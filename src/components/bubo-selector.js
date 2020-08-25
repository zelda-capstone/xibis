import React from 'react'
import {Redirect} from 'react-router-dom'
import {CustomizableBubo, SelectTrait} from '../components'
import { withFirebase } from '../firebase'

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
      //should draw on the global state of bubos in user's db collection
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
    const { color, sparkle, accessory } = this.state
    const bubo = { color, sparkle, accessory }

    this.setState({
      color: '',
      sparkle: '',
      accessory: '',
      personality: [],
      bubos: [...this.state.bubos, bubo]
    })

    if (this.state.bubos.length === 10) {
      //write the array to the user's bubo array in db
      console.log(this.props.user.bubos)
    }
  }

  render() {
    //console.log(this.props)
    const bubos = this.state.bubos;
    if (bubos.length === 10) {
      return <Redirect to='/map'/>
    }
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
                <option>proud</option>
                <option>assertive</option>
                {/* <div>map options from db here</div> */}
              </select>
              <select onChange={this.handlePersonality}>
                <option>brave</option>
                <option>kind</option>
                <option>confident</option>
                <option>thoughtful</option>
              </select>
            </div>
            <CustomizableBubo {...this.state} />
          </div>
          <div>
            <button className='button' onClick={this.handleCreate}>create</button>
          </div>
        </div>
        <div className='line-bottom'>
            {
              bubos ? (bubos.map((bubo) => {
                return (
                  <div key={bubo.name}>
                    <CustomizableBubo {...bubo} />
                  </div>
                )
              })) : null
            }
          </div>
      </>
    )
  }
}

export default withFirebase(BuboSelector)
