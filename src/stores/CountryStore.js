import { EventEmitter } from "events";

const CHANGE_EVENT = "change";

class CountryStore extends EventEmitter {
  constructor(dispatcher) {
    super();
    this.dispatchToken = dispatcher.register(this.dispatcherCallback.bind(this));
    this.country = null;
    this.options = ['Select Country', 'Australia', 'England', 'France'];
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  dispatcherCallback(payload) {
    if (payload.actionType === 'country-update') {
      this.country = payload.selectedCountry;
      this.emitChange();
    }
  }
}

export default CountryStore;
