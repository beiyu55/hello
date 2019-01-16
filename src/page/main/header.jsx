import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../style/app.scss';
import Grid from '../../components/common/grid';
import PropTypes from 'prop-types';
import {
  // FormattedMessage,
  // FormattedHTMLMessage,
  FormattedDate,
  FormattedTime,
  // FormattedRelative,
  // FormattedNumber,
  // FormattedPlural,
} from 'react-intl';
import { getComponentLocale } from '../../i18n/getLocale';

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
      <div className="App">
        <header className="App-header">
          <Grid container spacing={20}>
            <Grid item xs={2} spacing={10}>
              <img src={logo} className="App-logo" alt="logo" />
              <span className="logo-title">{currentlocale.react}</span>
            </Grid>
            <Grid item xs={16}>{currentlocale.navArea}</Grid>
            <Grid item xs={6}>
              <Grid container>
                <Grid item xs={12}>
                  <FormattedDate  value={this.state.curTime}/> &nbsp;
                  <FormattedTime  value={this.state.curTime}/>
                </Grid>
                <Grid item xs={4}>admin</Grid>
                <Grid item xs={8}>
                  <div className="changeLan">
                    <div
                      className={langSelectedIndex === 1 ? 'select' : ''}
                      onClick={() => {
                        this.onChange(1);
                      }}
                    >English</div>
                    <div
                      className={langSelectedIndex === 0 ? 'select' : ''}
                      onClick={() => {
                        this.onChange(0);
                      }}
                    >中文</div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </header>
        <div className="App-wrapper">
          <Grid container spacing={0}>
            <Grid item xs={4}></Grid>
            <Grid item xs={20}>
              <div></div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Header;
