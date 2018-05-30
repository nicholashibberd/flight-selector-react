class Actions {
  constructor(dispatcher) {
    this.dispatcher = dispatcher;
  }

  selectCity(city) {
    this.dispatcher.dispatch({
      actionType: 'city-update',
      selectedCity: city,
    })
  }

  selectCountry(country) {
    this.dispatcher.dispatch({
      actionType: 'country-update',
      selectedCountry: country,
    })
  }
}

export default Actions;
