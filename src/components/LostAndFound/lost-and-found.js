import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Timer, CustomizableBubo } from '..'
import { getBubosCollection } from '../../store/reducers/bubo'
import { Howl } from 'howler'

class LostAndFound extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      gameOver: false,
      won: false,
      random: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      lost: this.props.bubos,
      found: 0
    }
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
    this.source = this.sounds.play('bubos_atmosphere')
  }

  componentWillUnmount() {
    this.sounds.fade(this.sounds.volume(), 0, 1000, this.source)
  }

  shuffleOrder = () => {
    return Math.floor(Math.random() * 10)
  }

  randomizePersonality = () => {
    const traits1 = ['powerful', 'hot-headed', 'logical']
    const traits2 = ['nurturing', 'humble', 'curious']

    function randomNum (list) {
      return Math.floor(Math.random() * list.length)
    }
    const randomIndex = randomNum(traits1)
    const randomIndex2 = randomNum(traits2)
    return [traits1[randomIndex], traits2[randomIndex2]]
  }

  startGame = () => {
    this.setState({ playing: true })
  }

  endGame = () => {
    this.setState({ playing: false, gameOver: true })
  }

  handleFind = (key) => {
    this.sounds.play('LF_correct');
    if (this.state.found === 9) {
      this.setState({ won: true })
      this.endGame()
    }

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

    if (!this.state.playing && !this.state.gameOver) return (
      <>
        <div className='mirror'>
          <div className='clouds'>
            <div className='lost-and-found'>
              <div className='lf-text'>
              On the planet Aguilera, things aren't always as they seem. The mirrored terrain casts uncertain glances over every shoulder. Will the reflections cast shadows of doubt, or will they show your bubos who they truly are inside?
              </div>
              <div className='lf-text'>
                The bubos need to find themselves in the Great Fog of Doubt. Don't let the mirrors play tricks on them--or you! You have 20 seconds to locate your bubos and dissipate the fog...
              </div>
              <button onClick={this.startGame}>start</button>
            </div>
          </div>
        </div>
      </>
    )

    if (this.state.gameOver) {
      return (
        <>
          <div className='mirror'>
            <div className='clouds'>
              <div className='lost-and-found'>
                <div className='lf-text'></div>
                {
                  this.state.won ? (
                    <>
                    <h3>You helped every bubo find their inner self!</h3>
                    <h4> Your bubos self-esteem goes up +3</h4>
                    <h4>You have unlocked *next* puzzle</h4>
                    </>
                  ) : (
                    <>
                      <h3>Time's up! </h3>
                      <h4>You found {this.state.found} bubos</h4>
                      <p>Render consequences here...</p>
                    </>
                  )
                }
                </div>
            </div>
          </div>
        </>
        )
    }


    return (
    <>
      <div className='clouds'></div>
      <div className='mirror'>
          <div className='lost-and-found' >
            <div>
              <Timer
                endGame={this.endGame} />
                  FOUND {this.state.found}
            </div>
          {
            this.state.playing ? (
              <div className='lost-bubos-container'>
                {
                  this.state.random.map((bubo, index) => {
                    return (
                      <div
                        key={index}
                        onClick={this.handleIncorrect}
                        className={`lost-bubo order-${this.shuffleOrder()}`}>
                          <CustomizableBubo
                            {...lostBubos[index]}
                            personality={this.randomizePersonality()}/>
                      </div>
                    )
                  })
                }
                {
                  lostBubos.length ? (
                    lostBubos.map((bubo, index) => {
                      return (
                        <div key={index}
                          className={`lost-bubo order-${this.shuffleOrder()}`}
                          onClick={() => this.handleFind(bubo)}>
                            <CustomizableBubo {...bubo} />
                        </div>
                      )
                    })
                  ) : null
                }
                </div>
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
    getBubos: bubosRef => dispatch(getBubosCollection(bubosRef))
  }
}

export default connect(mapState, mapDispatch)(LostAndFound)
