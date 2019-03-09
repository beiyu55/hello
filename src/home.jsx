import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style/app.scss';
import Header from './page/header/header'
import SideNav from './page/side/nav'

class Home extends Component {
  static propTypes = {
    onChange: PropTypes.func,
  }

  onChange(index) {
    if (this.props.onChange) {
      this.props.onChange(index);
    }
  }
  render() {
    return (
      <div className="home">
        <Header onChange={(index) => { this.onChange(index); }} />
        <SideNav />
      </div>
    );
  }
}

export default Home;
