import React from 'react'
//import {Redirect} from 'react-router-dom'
import {CustomizableBubo, SelectTrait} from '../components'
import {withFirebase} from '../firebase'
import {connect} from 'react-redux'
import {addBuboToDb} from '../store/reducers/bubo'

class BuboSelector extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: '',
      accessory: '',
      personality: [],
      bubos: this.props.bubos || [],
    }
  }

  handleColor = (evt) => {
    this.setState({color: evt.target.value})
  }

  handleAccessory = (evt) => {
    this.setState({accessory: evt.target.value})
  }

  handlePersonality = (evt) => {
    const personality = this.state.personality
    if (personality.length < 2) {
      this.setState({personality: [...personality, evt.target.value]})
    } else if (personality.length === 2) {
      this.setState({personality: [personality[0], evt.target.value]})
    }
  }

  handleCreate = async () => {
    const {color, accessory, personality} = this.state
    const bubo = {color, accessory, personality}

    if (this.state.bubos.length < 10) {
      const bubosRef = this.props.user.bubosRef
      this.props.addBubo(bubo, bubosRef)

      this.setState({
        color: '',
        accessory: '',
        personality: [],
        bubos: [...this.state.bubos, bubo],
      })
    }
  }

  render() {
    const bubos = this.props.bubos

    return (
      <>
        <div className="bubo-selector-container">
          {bubos.length === 10 ? (
            <div>No more than 10 bubos allowed</div>
          ) : null}
          <h2>assemble your bubos</h2>
          <div className="bubo-selector">
            <div>
              color:
              <SelectTrait handleClick={this.handleColor} value="purple" />
              <SelectTrait handleClick={this.handleColor} value="blue" />
              <SelectTrait handleClick={this.handleColor} value="green" />
              <SelectTrait handleClick={this.handleColor} value="yellow" />
              <SelectTrait handleClick={this.handleColor} value="orange" />
              <SelectTrait handleClick={this.handleColor} value="red" />
            </div>
            <div>
              accessory:
              <SelectTrait
                handleClick={this.handleAccessory}
                value="antennae"
              />
              <SelectTrait handleClick={this.handleAccessory} value="hat" />
              <SelectTrait handleClick={this.handleAccessory} value="glasses" />
              <SelectTrait
                handleClick={this.handleAccessory}
                value="monobrow"
              />
              <SelectTrait handleClick={this.handleAccessory} value="bow" />
              <SelectTrait
                handleClick={this.handleAccessory}
                value="sunglasses"
              />
              <SelectTrait
                handleClick={this.handleAccessory}
                value="eyestalk"
              />
            </div>
            <div>personality (choose two):</div>
            <div>
              <select onChange={this.handlePersonality}>
                <option>shy</option>
                <option>stubborn</option>
                <option>proud</option>
                <option>assertive</option>
                <option>outspoken</option>
                <option>spontaneous</option>
                <option>soft-spoken</option>
              </select>
              <select onChange={this.handlePersonality}>
                <option>brave</option>
                <option>kind</option>
                <option>confident</option>
                <option>thoughtful</option>
                <option>nurturing</option>
                <option>charismatic</option>
                <option>patient</option>
              </select>
            </div>
            <CustomizableBubo {...this.state} hover={false}/>
          </div>
          <div>
            <button className="button" onClick={this.handleCreate}>
              create
            </button>
          </div>
        </div>
        <div className="line-bottom">
          {bubos
            ? bubos.map((bubo, index) => {
                return (
                  <div key={index}>
                    <CustomizableBubo {...bubo} hover={true} />
                  </div>
                )
              })
            : null}
        </div>
      </>
    )
  }
}

const mapState = (state) => {
  return {
    user: state.user,
    bubos: state.bubos,
  }
}

const mapDispatch = (dispatch) => {
  return {
    addBubo: (bubo, buboRef) => dispatch(addBuboToDb(bubo, buboRef)),
  }
}

export default connect(mapState, mapDispatch)(withFirebase(BuboSelector))
