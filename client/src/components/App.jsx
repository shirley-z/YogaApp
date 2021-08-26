import React from "react";
import axios from "axios";
import Poses from "./Poses.jsx";
import Session from "./Session.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      poses: [],
      started: false,
    };
    this.fetchData = this.fetchData.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  fetchData() {
    axios
      .get("/poses")
      .then(({ data }) => {
        this.setState({
          poses: data,
        });
      })
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.fetchData();
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      started: !this.state.started,
    })
  }

  render() {
    return (
      <div>
        <h1>Cup of Tea Yoga Poses App</h1>
        {!this.state.started && this.state.poses && (
          <Poses poses={this.state.poses} fetchData={this.fetchData} />
        )}
        {this.state.started && this.state.poses && (
          <Session selectedPoses={this.state.poses.filter(pose => pose.selected)} />
        )}
        {this.state.started ? (
          <button id="begin" type="button" class="btn btn-secondary btn-lg" onClick={this.handleClick}>
            End Practice
          </button>
        ) : (
          <button id="begin" type="button" class="btn btn-secondary btn-lg" onClick={this.handleClick}>
            Begin Practice!
          </button>
        )}
      </div>
    );
  }
}

export default App;
