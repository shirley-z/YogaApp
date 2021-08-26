import React from 'react';
import Countdown from 'react-countdown';

class Session extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      currentPose: this.props.selectedPoses[0],
      ended: false,
    }
    this.onComplete = this.onComplete.bind(this);
  }

  onComplete({ minutes, seconds, completed }) {
    if (completed) {
      if (this.state.index < this.props.selectedPoses.length - 1) {
        this.setState({
          index: this.state.index + 1,
        }, ()=> {
          this.setState({
            currentPose: this.props.selectedPoses[this.state.index]
          })
        })
      } else {
        this.setState({
          ended: true,
        })
      }
    } else {
      return <span className="countdown">{minutes}:{seconds}</span>
    }
  }

  render() {
    return (
      <>
      {this.state.ended ? <span id="end">Your practice has endeded.</span>
      :
      (<div className="session">
        {this.state.currentPose && <img className="single-pose" src={this.state.currentPose.picture} />}
        <br />
        {this.state.currentPose && <Countdown className="countdown" key={this.state.index} date={Date.now() + this.state.currentPose.duration} onComplete={this.onComplete} />}
      </div>)}
      </>
    );
  }
}

export default Session;