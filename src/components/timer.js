import React, { Component } from 'react'

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      seconds: 30
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.state.seconds === 0) {
        clearInterval(this.timer)
        return
      }
      this.countDown()
    }, 1000)
  }

  countDown = () => {
    const seconds = this.state.seconds - 1;
    this.setState({
      seconds
    });
  }

  // startTimer = () => {
  //   this.timer = setInterval(() => {
  //     if (this.state.seconds === 0) {
  //       clearInterval(this.timer)
  //       return
  //     }
  //     this.countDown()
  //   }, 1000)
  // }

  resetTimer = () => {
    this.setState({ timer: 30 })
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <>
        <div>{this.state.seconds} sec</div>
        {
          this.state.seconds === 0 ? (
            <div>Time's up!</div>
          ) : null
        }
      </>
    )
  }
}

export default Timer
