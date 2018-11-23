import React from 'react';
import _ from 'lodash';

const cryptocompare = require('cryptocompare');

export const AppContext = React.createContext();

const MAX_FAVOURITES = 10;

export class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'dashboard',
      favourites: ['BTC', 'ETH', 'XMR', 'DOGE'],
      ...this.savedSettings(),
      setPage: this.setPage,
      addCoin: this.addCoin,
      removeCoin: this.removeCoin,
      isInFavourites: this.isInFavourites,
      confirmFavourites: this.confirmFavourites
    };
  }

  // adds coin to favourites
  addCoin = key => {
    let favourites = [...this.state.favourites];
    if (favourites.length < MAX_FAVOURITES) {
      favourites.push(key);
      this.setState({ favourites });
    }
  };

  // remove coin from favourites
  removeCoin = key => {
    let favourites = [...this.state.favourites];
    // _.pull is lodash command to pull a value out of the array and then return new array with value removed
    this.setState({ favourites: _.pull(favourites, key) });
  };

  // check if value is already in favourites
  isInFavourites = key => _.includes(this.state.favourites, key);

  // want coin api to load on mount
  componentDidMount = () => {
    this.fetchCoins();
  };

  // fetches coin data from crypto compare api
  fetchCoins = async () => {
    let coinList = (await cryptocompare.coinList()).Data;
    this.setState({ coinList });
  };

  // confirming favourites redirects to dashboard
  confirmFavourites = () => {
    this.setState({
      firstVisit: false,
      page: 'dashboard'
    });
    localStorage.setItem(
      'cryptoDashboard',
      JSON.stringify({
        test: 'hello'
      })
    );
  };

  // Check if user has used site before by looking at ls
  savedSettings() {
    let cryptoDashboardData = JSON.parse(
      localStorage.getItem('cryptoDashboard')
    );
    // if we have not visited site before
    if (!cryptoDashboardData) {
      return { page: 'settings', firstVisit: true };
    }
    return {};
  }

  setPage = page => this.setState({ page });

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
