import React, { Component } from 'react';
import Header from './page/main/header';
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
          <Header onChange={(index) => { this.onChange(index); }} />
        </IntlProvider>
      </LocaleProvider>
    );
  }
}

export default App;
