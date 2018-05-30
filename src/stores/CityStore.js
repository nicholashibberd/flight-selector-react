import { EventEmitter } from "events";

const CHANGE_EVENT = "change";

class CityStore extends EventEmitter {
  constructor(dispatcher, countryStore) {
    super();
    this.dispatcher = dispatcher;
    this.countryStore = countryStore;
    this.dispatchToken = dispatcher.register(this.dispatcherCallback.bind(this));
    this.city = null;
    this.options = this.getOptions('Country');
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  dispatcherCallback(payload) {
    if (payload.actionType === 'country-update') {
      this.dispatcher.waitFor([this.countryStore.dispatchToken]);
      this.options = this.getOptions(this.countryStore.country);
      this.emitChange();
    }

    if (payload.actionType === 'city-update') {
      this.city = payload.selectedCity;
      this.emitChange();
    }
  }

  getOptions(country) {
    var cities = {
      'Australia': ['Select City', 'Melbourne', 'Sydney'],
      'England': ['Select City', 'London', 'Manchester'],
      'France': ['Select City', 'Paris', 'Lille']
    };
    return cities[country] || ['Select City'];
  }
}

export default CityStore;
