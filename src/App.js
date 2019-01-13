import React, { Component } from 'react';
import logo from './logo.svg';
import './style/app.scss';
import Grid from './components/common/grid';

import { IntlProvider, addLocaleData } from 'react-intl';
import LocaleProvider from './i18n/LocaleProvider';
/**
 * 获取国际化资源文件
 *
 * @param {any} lang
 * @returns
 */
function getLocale(lang) {
  /* eslint-disable global-require */
  let result = {};
  switch (lang) {
    case 'zh-CN':
      result = require('./i18n/zh_CN');
      break;
    case 'en-US':
      result = require('./i18n/en_US');
      break;
    default:
      result = require('./i18n/zh_CN');
  }

  return result.default || result;
  /* eslint-enable global-require */
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'zh-CN',
    };
  }

  /**
   * 切换语言
   *
   * @param {any} index 语言序号
   */
  onChange = (index) => {
    const lang = index === 0 ? 'zh-CN' : 'en-US';
    this.setState({
      lang,
    });
  }

  render() {
    const { lang } = this.state;
    const appLocale = getLocale(lang);
    addLocaleData(appLocale.data);
    return (
      <LocaleProvider locale={appLocale}>
        <IntlProvider
          locale={appLocale.locale}
          messages={appLocale.messages}
          formats={appLocale.formats}
        >
          <div className="App">
            <header className="App-header">
              <Grid container spacing={20}>
                <Grid item xs={2} spacing={10}>
                  <img src={logo} className="App-logo" alt="logo" />
                  <span className="logo-title">React</span>
                </Grid>
                <Grid item xs={16}>
                导航区
                </Grid>
                <Grid item xs={6}>
                操作区
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
        </IntlProvider>
      </LocaleProvider>
    );
  }
}

export default App;
