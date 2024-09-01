const tb01 = require('./tb01Router.js');
const user = require('./userRouter.js');
const login = require('./loginRouter.js');

module.exports = app => {
  app.use(
    tb01,
    user,
    login
  );
};
