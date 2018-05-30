import { EventEmitter } from "events";

const CHANGE_EVENT = "change";

class PriceStore extends EventEmitter {
  constructor(dispatcher, cityStore) {
    super();
    this.dispatcher = dispatcher;
    this.cityStore = cityStore;
    this.dispatchToken = dispatcher.register(this.dispatcherCallback.bind(this));
    this.price = null;
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  dispatcherCallback(payload) {
    if (payload.actionType === 'country-update') {
      this.price = null;
      this.emitChange();
    }

    if (payload.actionType === 'city-update') {
      this.dispatcher.waitFor([this.cityStore.dispatchToken]);
      this.price = this.getPrice(this.cityStore.city);
      this.emitChange();
    }
  }

  getPrice(city) {
    var prices = {
      'Melbourne': 100,
      'Sydney': 110,
      'London': 1000,
      'Manchester': 1200,
      'Paris': 900,
      'Lille': 800
    };
    return prices[city];
  }
}

export default PriceStore;

