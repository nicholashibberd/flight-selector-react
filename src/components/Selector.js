import React, { Component } from 'react';
import '../styles/App.css';

class Selector extends Component {
  render() {
    return (
      <div className="form-group">
        <select onChange={this.props.handleChange} className="form-control">
          {
            this.props.options.map((option) => {
              return <option key={option}>{option}</option>
            })
          }
        </select>
      </div>
    );
  }
}

export default Selector;
