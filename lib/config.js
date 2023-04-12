'use strict';

module.exports = {
  paypal: {
      businessEmail: '',
      url: 'https://www.sandbox.paypal.com/cgi-bin/webscr',
      currency: 'USD'
  },
  secret: 'newsession',
  name: 'nodeStore',
  db: {
      url: 'mongodb://127.0.0.1:27017/test?directConnection=true',
      sessions: 'sessions'
  },
  locale: {
      lang: 'en-JP',
      currency: 'JPY'
  }
};