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
  eatOne: function (column, condition, cb) {
    orm.eatOne("burgers", column, condition, function (res) {
      cb(res);
    });
  },
  delete: function (condition, cb) {
    orm.delete("burgers", condition, function (res) {
      cb(res);
    });
  }
}
// console.log(burger);
module.exports = burger;