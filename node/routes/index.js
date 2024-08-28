const tb01 = require('./tb01Router.js');
const login = require('./loginRouter.js');

module.exports = app => {
  app.use(
    tb01,
    login
  );
};
