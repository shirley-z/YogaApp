import React from 'react';
import Countdown from 'react-countdown';

class Session extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      currentPose: this.props.selectedPoses[0]
    }
    this.onComplete = this.onComplete.bind(this);
    this.renderPose = this.renderPose.bind(this);
    this.endMsg = this.endMsg.bind(this);
  }

  renderPose() {
    return (
      <div>
        {this.state.currentPose && <img src={this.state.currentPose.picture} />}
        {this.state.currentPose && <Countdown key={this.state.index} date={Date.now() + 3000} onComplete={this.onComplete} />}
      </div>
    );
  }

  endMsg() {
    return (
      <span>Your practice has ended.</span>
    )
  }

  onComplete({ minutes, seconds, completed }) {
    if (completed) {
      if (this.state.index < this.props.selectedPoses.length) {
        this.setState({
          index: this.state.index + 1,
        }, ()=> {
          this.setState({
            currentPose: this.props.selectedPoses[this.state.index]
          })
        })
      } else {
        endMsg();
      }
    } else {
      return <span className="countdown">{minutes}:{seconds}</span>
    }
  }

  render() {
    console.log(`rendering`)
    console.log('index:', this.state.index)
    console.log('pose id:', this.state.currentPose && this.state.currentPose.id)
    return this.renderPose();
  }
}

export default Session;