import appLocaleData from 'react-intl/locale-data/en';
// 引入组件多语言
import en_US from './en_US.message';

window.appLocale = {
  // 合并所有 messages, 加入组件的 messages
  messages: en_US,

  // locale
  locale: 'en-US',

  // react-intl locale-data
  data: appLocaleData,

  // 自定义 formates
  formats: {
    date: {
      normal: {
        hour12: false,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      },
    },
    // 货币
    money: {
      currency: 'USD',
    },
  },
};

export default window.appLocale;