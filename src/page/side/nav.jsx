import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { getComponentLocale } from '../../i18n/getLocale';
import MyReact from '../api/myReact';  // 导入App组件
import Components from '../api/components';

class SideNav extends Component {
  // 获取 context
  static contextTypes = {
    locale: PropTypes.object,
  }

  render() {
    const locale = getComponentLocale(this.props, this.context, 'i18n_nav');
    return (
      <Router>
        <div className="main">
          <ul className="nav">
            <li><NavLink to="/" exact={true} activeClassName="selected">{locale.abstract}</NavLink></li>
            <li><NavLink to="/component" activeClassName="selected">{locale.component}</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={MyReact} />
            <Route exact path="/component" component={Components} />
          </div>
        </div>
      </Router>
    )
  }
}

export default SideNav