import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Timer, Interlude, CustomizableBubo } from '..'
import { getBubosCollection } from '../../store/reducers/bubo'
import {Howl} from 'howler'

class LostAndFound extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interlude: true,
      random: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      lost: this.props.bubos,
      found: 0
    }
     // we will initially fill the lost array with all the bubos in user collection
    this.sounds = new Howl({
      src: ['sounds/sounds.webm', 'sounds/sounds.mp3'],
      volume: 0.2,
      sprite: {
        'bubos_atmosphere': [ 0,
          122932.24489795919],
        'LF_correct': [124000,
          2000],
        'LF_incorrect': [127000,
          2000]
      }
    })
    this.source = 0;
  }

  componentDidMount() {
    const bubosRef = this.props.user.bubosRef
    this.props.getBubos(bubosRef)
    this.source = this.sounds.play('bubos_atmosphere');
  }

  componentWillUnmount() {
    this.sounds.pause(this.source)
  }

  endInterlude = () => {
    this.setState({ interlude: false })
  }

  handleFind = (key) => {
    this.sounds.play('LF_correct');
    this.setState({
      found: this.state.found + 1,
      lost: this.state.lost.filter(bubo => bubo !== key)
    })
  }

  handleIncorrect = () => {
    this.sounds.play('LF_incorrect')
  }

  render() {
    const lostBubos = this.state.lost;

    if (this.state.interlude) return (
      <div className='lost-and-found'>
        <Interlude name='reflection' />
        <div onClick={this.endInterlude} >what soulseeking awaits...</div>
      </div>
    )

    return (
      <>
        <div className='clouds'></div>
        <div className='lost-and-found' >
        <div>
          The bubos need to find themselves in the Great Fog of Doubt. Don't let the mirrors play tricks on them.. or you! You have 30 seconds to locate your bubos and dissipate the fog, or your bubos emotional health will suffer...
        </div>
        <div>
          <Timer />
          FOUND {this.state.found}
        </div>
        <div className='lost-bubos-container'>
        {
          this.state.random.map((bubo, index) => {
            return (
              <div key={index} onClick={this.handleIncorrect} className='lost-bubo'>
                <CustomizableBubo {...bubo} />
              </div>
            )
          })
        }
        {
          lostBubos.length ? (
            lostBubos.map((bubo, index) => {
              return (
                <div key={index} className='lost-bubo' onClick={() => this.handleFind(bubo)}>
                  <CustomizableBubo {...bubo} />
                </div>
              )
            })
          ) : null
        }
        </div>
        </div>
      </>
    )
  }
}

const mapState = state => {
  return {
    user: state.user,
    bubos: state.bubos
  }
}

const mapDispatch = dispatch => {
  return {
    getBubos: buboRef => dispatch(getBubosCollection(buboRef))
  }
}

export default connect(mapState, mapDispatch)(LostAndFound)
