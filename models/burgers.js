var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll('burgers', function(res) {
          cb(res);
        });
      },
    // next method
}
console.log(burger);
module.exports = burger;