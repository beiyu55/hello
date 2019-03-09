import React, { Component } from 'react';
import logo from '../../logo.svg';
import PropTypes from 'prop-types';
import { getComponentLocale } from '../../i18n/getLocale';
import HeaderDate from './date'

class Header extends Component {
  static propTypes = {
    langSelectedIndex: PropTypes.number,
    onChange: PropTypes.func,
  }
  static defaultProps = {
    langSelectedIndex: 0
  }
  // 获取 context
  static contextTypes = {
    locale: PropTypes.object,
  }
  constructor(props) {
    super(props);
    const langSelectedIndex = props.langSelectedIndex;
    this.state = {
      langSelectedIndex, // 当前选中的语言序号
      curTime: new Date()
    };
  }

  componentDidMount() {
    this.updateTime();
    this.timer = setInterval(() => { this.updateTime() }, 1000);
  }

  componentWillMount() {
    this.timer && clearTimeout(this.timer);
  }

  updateTime() {
    var date = new Date();
    this.setState({
      curTime: date
    })
  }

  onChange(index) {
    if (this.state.langSelectedIndex === index) {
      return;
    }
    if (this.props.onChange) {
      this.props.onChange(index);
    }
    this.setState({
      langSelectedIndex: index,
    });
  }
  render() {
    const { langSelectedIndex } = this.state;
    const currentlocale = getComponentLocale(this.props, this.context, 'i18n_headers');
    return (
      <header className="App-header">
        <div className="logo-wrapper">
          <img src={logo} className="App-logo" alt="logo" />
          <span className="logo-title">{currentlocale.react}</span>
        </div>
        <div>
          <div className="oper-wrapper">
            <HeaderDate />
            <div>admin</div>
            <div>
              <div className="changeLan">
                <div
                  className={langSelectedIndex === 0 ? 'select' : ''}
                  onClick={() => {
                    this.onChange(0);
                  }}
                >中文
                </div>
                <div
                  className={langSelectedIndex === 1 ? 'select' : ''}
                  onClick={() => {
                    this.onChange(1);
                  }}
                >EN
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
