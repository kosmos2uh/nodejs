const config = require('../config');

module.exports = {
  index: (req, res) => {
    res.render('blog/index', { appTitle: config.get('app:appTitle'), title: 'Blog', data: '' });
  },

  list: (req, res) => {
    res.render('blog/list', { appTitle: config.get('app:appTitle'), title: 'Blog List', data: '' });
  },

  detail: (req, res) => {
    res.render('blog/detail', { appTitle: config.get('app:appTitle'), title: 'Blog Detail', data: '' });
  },
};
