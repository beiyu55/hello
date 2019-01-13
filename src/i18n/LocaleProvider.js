// 提供国际化上下文
import React, { Component } from 'react';
import PropTypes from 'prop-types'

class LocaleProvider extends Component {
  static propTypes = {
    children: PropTypes.any,
    locale: PropTypes.object,
  };

  static childContextTypes = {
    // 语言信息
    locale: PropTypes.object,
  };

  getChildContext() {
    return {
      locale: {
        ...this.props.locale,
      },
    };
  }

  render() {
    return React.Children.only(this.props.children);
  }
}

export default LocaleProvider;