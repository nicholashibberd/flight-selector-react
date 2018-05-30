import React, { Component } from 'react';

class Price extends Component {
  render() {
    if (!this.props.price) return "";

    return (
      <div className="price">
        <small>from</small> ${this.props.price}
      </div>
    );
  }
}

export default Price;
