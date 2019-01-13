import appLocaleData from 'react-intl/locale-data/zh';
// 引入组件多语言
import zh_CN from './zh_CN.message';

window.appLocale = {
  // 合并所有 messages, 加入组件的 messages
  messages: zh_CN,
  // locale
  locale: 'zh-CN',

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
      currency: 'CNY',
    },
  },
};

export default window.appLocale;