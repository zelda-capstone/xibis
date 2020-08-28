import React, { Component } from 'react'

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      seconds: 20
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.state.seconds === 0) {
        clearInterval(this.timer)
        this.props.endGame();
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
      </>
    )
  }
}

export default Timer
