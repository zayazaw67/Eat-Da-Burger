var orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        orm.all("burgers", function (result) {
            cb(result);
        });
    },
    // next method
}
console.log(burger);
module.exports = burger;