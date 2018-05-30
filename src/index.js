import React from 'react';
import ReactDOM from 'react-dom';
import { Dispatcher } from 'flux';
import './index.css';
import App from './controllers/App';
import Actions from './Actions';
import CityStore from './stores/CityStore';
import CountryStore from './stores/CountryStore';
import PriceStore from './stores/PriceStore';
import registerServiceWorker from './registerServiceWorker';

var flightDispatcher = new Dispatcher();
var actions = new Actions(flightDispatcher);
var countryStore = new CountryStore(flightDispatcher);
var cityStore = new CityStore(flightDispatcher, countryStore);
var priceStore = new PriceStore(flightDispatcher, cityStore);
var app = React.createElement(App, {
  actions: actions,
  cityStore: cityStore,
  countryStore: countryStore,
  priceStore: priceStore
});
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
