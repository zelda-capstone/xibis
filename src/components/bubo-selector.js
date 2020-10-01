import React from 'react'
import {Howl} from 'howler'
import {connect} from 'react-redux'
import {withFirebase} from '../firebase'
import {CustomizableBubo, SelectTrait} from '../components'
import {addBuboToDb} from '../store/reducers/bubo'
import createRandomBubo from './create-random-bubo'

class BuboSelector extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: '',
      accessory: '',
      personality: [],
      bubos: this.props.bubos || [],
      warning: false,
      bubosAssembled: false
    }
    this.music = new Howl({
      src: ['audio/music/bubos_170bpm.mp3'],
      html5: true,
      loop: true
    })
  }

  componentDidMount() {
    this.music.play()
  }

  componentWillUnmount() {
    this.music.fade(this.music.volume(), 0, 1000)
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

  handleRandom = () => {
    const newRandom = createRandomBubo()
    this.setState({
      color: newRandom.color,
      accessory: newRandom.accessory,
      personality: newRandom.personality,
      warning: false
    })
  }

  handleCreate = async () => {
    const {color, accessory, personality} = this.state
    const bubo = {color, accessory, personality}

    if (!color || !accessory || !(personality.length === 2)) {
      if (this.state.bubos.length === 10) {
        this.setState({ bubosAssembled: true })
      } else {
        this.setState({ warning: true })
      }
    } else if (this.state.bubos.length < 10) {
      const bubosRef = this.props.user.bubosRef
      this.props.addBubo(bubo, bubosRef)

      this.setState({
        color: '',
        accessory: '',
        personality: [],
        bubos: [...this.state.bubos, bubo],
        warning: false
      })
    } else {
      this.setState({ bubosAssembled: true })
    }
  }

  render() {
    const bubos = this.props.bubos

    return (
      <>
        <div className="bubo-selector-container">
          <h2>assemble your Xibis</h2>
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
            <div className='personality-select-container'>personality (choose two):
              <select className='personality-select' onChange={this.handlePersonality}>
                <option>shy</option>
                <option>stubborn</option>
                <option>proud</option>
                <option>assertive</option>
                <option>outspoken</option>
                <option>spontaneous</option>
                <option>soft-spoken</option>
              </select>
              <select className='personality-select' onChange={this.handlePersonality}>
                <option>brave</option>
                <option>kind</option>
                <option>confident</option>
                <option>thoughtful</option>
                <option>nurturing</option>
                <option>charismatic</option>
                <option>patient</option>
              </select>
              </div>
            {
              this.state.warning &&
              <div className='warning'>all traits are required</div>
            }
             {
              this.state.bubosAssembled ?
              <div className='warning'>only 10 Xibis are allowed</div> : null
            }
            <CustomizableBubo {...this.state} hover={false} />
            {
              <div
                className='bubo-count'>
                  {
                    this.state.bubos.length === 10 ? <div>assembled!</div> : <div>{10 - this.state.bubos.length} remaining</div>
                  }
              </div>
            }
          </div>
          <div>
            <button className="button" onClick={this.handleRandom}>
              randomize
            </button>
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
    addBubo: (bubo, bubosRef) => dispatch(addBuboToDb(bubo, bubosRef)),
  }
}

export default connect(mapState, mapDispatch)(withFirebase(BuboSelector))
