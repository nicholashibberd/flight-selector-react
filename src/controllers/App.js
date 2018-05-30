import React, { Component } from 'react';
import Selector from '../components/Selector.js'
import Price from '../components/Price.js'

class App extends Component {
  constructor(props) {
    super();
    this.selectCountry = this.selectCountry.bind(this);
    this.selectCity = this.selectCity.bind(this);
    this.state = {
      cities: props.cityStore.options,
      selectedCity: props.cityStore.city,
      countries: props.countryStore.options,
      price: null
    };
  }

  componentDidMount() {
    this.props.countryStore.addChangeListener(() => {
      this.setState({countries: this.props.countryStore.options});
    });

    this.props.cityStore.addChangeListener(() => {
      this.setState({cities: this.props.cityStore.options});
    });

    this.props.priceStore.addChangeListener(() => {
      this.setState({price: this.props.priceStore.price});
    });
  }

  selectCountry(event) {
    this.props.actions.selectCountry(event.target.value);
  }

  selectCity(event) {
    this.props.actions.selectCity(event.target.value);
  }

  render() {
    return (
      <div>
        <Selector
          options={this.state.countries}
          handleChange={this.selectCountry}
        />
        <Selector
          options={this.state.cities}
          handleChange={this.selectCity}
        />
        <Price price={this.state.price} />
      </div>
    )
  }
}

export default App;
