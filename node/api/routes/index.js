const Tb01 = require('./tb01Router.js');
const User = require('./userRouter.js');
const Login = require('./loginRouter.js');

module.exports = app => {
  app.use(
    Tb01,
    User,
    Login
  );
};
