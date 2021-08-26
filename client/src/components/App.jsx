import React from 'react';
import axios from 'axios';
import Poses from './Poses.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      poses: [],
      started: false,
    }

    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {
    axios.get('/poses')
    .then(({ data }) => {
      this.setState({
        poses: data,
      })
    })
    .catch(err => console.error(err));
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return(
      <div>
        <h1>Cup of Tea Yoga Poses App</h1>
        {this.state.poses && <Poses poses={this.state.poses} fetchData={this.fetchData} />}
      </div>
    )
  }
}

export default App;