import React from 'react';

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'dashboard',
      ...this.savedSettings(),
      setPage: this.setPage,
      confirmFavourites: this.confirmFavourites
    };
  }

  confirmFavourites() {
    console.log('hello');
  }

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
