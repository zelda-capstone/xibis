import React, { Component } from 'react'
import { Timer, Interlude, Bubo, CustomizableBubo } from '..'
import {Howl} from 'howler'

class LostAndFound extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interlude: true,
      random: new Array(10).fill(<Bubo />),
      lost: new Array(10).fill(<CustomizableBubo />),
      found: 0
    }
    this.music = new Howl({
      src: ['sounds/sounds.webm', 'sounds/sounds.mp3'],
      sprite: {
        'bubos_atmosphere': [ 0,
          122932.24489795919]
      }
    })
    this.source = 0;
    // we will initially fill the lost array with all the bubos in user collection
  }

  componentDidMount() {
    this.music.play('bubos_atmosphere');
  }

  endInterlude = () => {
    this.setState({ interlude: false })
  }

  handleFind = (name) => {
    this.setState({
      found: this.state.found + 1,
      lost: this.state.lost.filter(bubo => bubo.name !== name)
    })

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
        <div className='lost-and-found'>
        <div>
          The bubos need to find themselves in the Great Fog of Doubt. Don't let the mirrors play tricks on them.. or you! You have 30 seconds to locate your bubos and dissipate the fog, or your bubos emotional health will start to suffer...
        </div>
        <div>
          <Timer />
          FOUND {this.state.found}
        </div>
        <div className='lost-bubos-container'>
        {
          this.state.random.map((bubo, index) => {
            return (
              <div key={index} className='lost-bubo'>
                {bubo}
              </div>
            )
          })
        }
        </div>
        {
          lostBubos.length ? (
            lostBubos.map((bubo, index) => {
              return (
                <div key={index} className='lost-bubo' onClick={() => this.handleFind(bubo.name)}>
                  <CustomizableBubo {...bubo} />
                </div>
              )
            })
          ) : null
        }
        </div>
      </>
    )
  }
}

export default LostAndFound
