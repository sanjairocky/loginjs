const Login = function () {};

Login.prototype.Login = function (name) {
  alert(`logged in as : ${name}`);
};

Login.prototype.logout = function () {
  alert(`logged out sucessfully`);
};

module.exports = Login;
