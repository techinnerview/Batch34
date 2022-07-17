import './App.css';
import React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import Restaurant from './Restaurant';
import 'react-bootstrap-typeahead/css/Typeahead.css'

class TypeAheadComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantList: [
        { label: 'Delhi' },
        { label: 'Bangalore' },
        { label: 'Mumbai' },
        { label: 'Chennai' },
        { label: 'Kolkata' },
        { label: 'Hyderabad' },
      ],
      messageFromParent: props.messageFromParent
    }
  }


  render() {
    return (
      <div>
        <h1>Welcome to Edureka</h1>
        <Typeahead options={this.state.restaurantList} placeholder={this.state.messageFromParent} />
        {this.state.restaurantList.map((item) => {
            return <p>{item.label}</p>
        })}
      </div>
    )
  }
}

export default TypeAheadComponent;
