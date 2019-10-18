var orm = require("../config/orm.js");

var burger = {
  selectAll: function (cb) {
    orm.selectAll('burgers', function (res) {
      cb(res);
    });
  },
  create: function (columnName, value, cb) {
    orm.create("burgers", columnName, value, function (res) {
      cb(res);
    });
  },
}
console.log(burger);
module.exports = burger;