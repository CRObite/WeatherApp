import React from 'react';
import '../timer/timer.css';

class CurrentTimeTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date().toLocaleTimeString()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      currentTime: new Date().toLocaleTimeString()
    });
  }

  render() {
    return (
      <div className='currentTimerInfo'>
        <div className='fff'>
          <h2>Current Time:</h2>
          <h3>{this.state.currentTime}</h3>
        </div>
      </div>
    );
  }
}

export default CurrentTimeTimer;