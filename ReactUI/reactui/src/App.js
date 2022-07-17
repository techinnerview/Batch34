import logo from './logo.svg';
import './App.css';
import React from 'react';
import LifeCycleComponent from './lifeCycleComponent';
import TypeAheadComponent from './typeAheadComponent';
import CarouselComponent from './carouselComponent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalClicks: 0
    }
  }

  updateParent = (data) => {
    this.setState({ totalClicks: data });
  }

  render() {
    return (
      <CarouselComponent />
    )
    // if(this.state.totalClicks > 10) {
    //   return (
    //     <div>
    //       <h1>Number of Clicks <span>{this.state.totalClicks}</span></h1>
    //       <TypeAheadComponent messageFromParent={"Enter City Name"} />
    //     </div>
    //   )
    // } else {
    //   return (
    //     <div>
    //       <h1>Number of Clicks <span>{this.state.totalClicks}</span></h1>
    //       <LifeCycleComponent
    //         messageFromParent={"Hello Everyone !!"}
    //         callToParent={this.updateParent.bind(this)}
    //       />
    //     </div>
    //   )
    // }    

  //   return this.state.totalClicks > 10 ? (
  //     <div>
  //       <h1>Number of Clicks <span>{this.state.totalClicks}</span></h1>
  //       <TypeAheadComponent messageFromParent={"Enter City Name"} />
  //     </div>
  //   ) : (
  //     <div>
  //       <h1>Number of Clicks <span>{this.state.totalClicks}</span></h1>
  //       <LifeCycleComponent
  //         messageFromParent={"Hello Everyone !!"}
  //         callToParent={this.updateParent.bind(this)}
  //       />
  //     </div>
  //   )
    }
}

export default App;
