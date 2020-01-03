import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerStarted: false,
      timerStopped: true,
      minutes: 0,
      seconds: 0
    };
  }

  handleTimerStart(e) {
    e.preventDefault();
    if (this.state.timerStopped) {
      this.timer = setInterval(() => {
        this.setState({ timerStarted: true, timerStopped: false });
        if (this.state.timerStarted) {
          if (this.state.seconds >= 60) {
            this.setState(prevState => ({
              minutes: prevState.minutes + 1,
              seconds: 0
            }));
          }
          this.setState(prevState => ({ seconds: prevState.seconds + 1 }));
        }
      }, 1000);
    }
  }

  handleTimerStop(e) {
    e.preventDefault();
    this.setState({ timerStarted: false, timerStopped: true });
    clearInterval(this.timer);
  }

  handleTimerReset() {
    this.setState({
      timerStarted: false,
      timerStopped: true,
      minutes: 0,
      seconds: 0
    });
    clearInterval(this.timer);
  }

  render() {
    const { count } = this.state;
    return (
      <div className="container">
        <h2 className="text-center">Time left</h2>
        <div className="timer-container">
          <div className="current-timer">
            {this.state.minutes + ":" + this.state.seconds}
          </div>
          <div className="timer-controls">
            <button
              className="btn btn-success"
              onClick={this.handleTimerStart.bind(this)}
            >
              Start Timer
            </button>
            <button
              className="btn btn-alert"
              onClick={this.handleTimerStop.bind(this)}
            >
              Stop Timer
            </button>
            <button
              className="btn btn-danger"
              onClick={this.handleTimerReset.bind(this)}
            >
              Reset!
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Timer;
