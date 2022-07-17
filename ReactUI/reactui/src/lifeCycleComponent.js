import logo from './logo.svg';
import './App.css';
import React from 'react';

class LifeCycleComponent extends React.Component {
  // Mounting Phase
  constructor(props) {
    super(props);
    this.state = {
      noOfClicks: 0,
      messageFromParent: props.messageFromParent
    }
  }
  // Mounting Phase
  componentWillMount() {
  }
  // Mounting Phase
  static getDerivedStateFromProps(props, state) {
  }
  // Mounting Phase
  componentDidMount() {
    console.log("ComponentDidMount");
  }

  // Updation
  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  // Updation
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  // Unmounting 
  componentWillUnmount() {

  }

  //custom function
  UpdateMe = (e) => {
    if (e === 'click' || e.type === 'click') {
      this.setState({ noOfClicks: this.state.noOfClicks + 1 });
      this.props.callToParent(this.state.noOfClicks + 1);
    }
  }

  render() {
    console.log("Render")
    return (
      <div>
        <h2>{this.state.messageFromParent}</h2>
        <h3><button onClick={e => this.UpdateMe(e)}>{this.state.noOfClicks}</button></h3>
      </div>
    )
  }
}

export default LifeCycleComponent;
