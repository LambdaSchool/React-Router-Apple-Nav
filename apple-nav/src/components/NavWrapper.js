import React, { Fragment, Component } from "react";
import DummyData from "./dummyData";
import Nav from "./Nav";
import { Route } from "react-router-dom";
import SubNav from "./SubNav";

export default class NavWrapper extends Component {
  constructor() {
    super();
    this.state = {
      names: []
    };
  }

  componentDidMount() {
    const linkNames = DummyData;
    this.setState({
      names: linkNames
    });
  }

  render() {
    return (
      <Fragment>
        <Nav names={this.state.names} />
        <Route
          path="/:name"
          render={props => <SubNav {...props} names={this.state.names} />}
        />
      </Fragment>
    );
  }
}
