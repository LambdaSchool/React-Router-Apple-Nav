import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { navData, subNavData } from './navData';

import NavWrapper from './Navigation/NavWrapper';
import SubNavWrapper from './SubNavigation/SubNavWrapper';

import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      nav: '',
      subnav: [],
    };
  }

  componentDidMount() {
    const nav = window.location.pathname.replace(/\//,'');
    this.setState({
      nav,
      subnav: subNavData
    });
  }

  selectNav = nav => {
    this.setState({ nav });
  }

  filterSubNav = () => {
    const filteredSubNav = subNavData.filter(subnav => {
      return subnav.navitem.toLowerCase() === this.state.nav.toLowerCase();
    });
    return filteredSubNav;
  }

  render() {
    return (
      <div className="app-container">
        <Route
          path="/"
          render={props => (
            <NavWrapper {...props} navData={navData} selectNav={this.selectNav} />
          )} />
        <Route
          exact
          path="/:nav"
          render={props => (
            <SubNavWrapper {...props} subnav={this.filterSubNav()} />
          )} />
      </div>
    );
  }
}
