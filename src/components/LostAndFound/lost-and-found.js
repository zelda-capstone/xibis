import React, { Component } from 'react'
import { Timer, Interlude } from '..'

class LostAndFound extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interlude: true,
      lost: [],
      found: 0
    }
  }

  endInterlude = () => {
    this.setState({ interlude: false })
  }

  handleFind = () => {
    this.setState({ found: this.state.found + 1})
  }

  render() {
    const lostItems = this.state.lost;
    if (this.state.interlude) return (
      <div className='lost-and-found'>
        <Interlude name='reflection' />
        <div onClick={this.endInterlude} >what mystery...</div>
      </div>
    )

    return (
      <>
        <div className='clouds'></div>
        <div className='lost-and-found'>
        <div>
          MINIGAME INSTRUCTIONS
        </div>
        {
          lostItems.length ? (
            lostItems.map((form, index) => {
              return (
                <div key='index' className='lost-item' onClick={this.handleFind}>
                  item
                </div>
              )
            })
          ) : null
        }
        <div>
          <Timer />
          FOUND {this.state.found}
        </div>
        </div>
      </>
    )
  }
}

export default LostAndFound
