const create = require("./src/create.cjs");
const update = require("./src/update.cjs");
const remove = require("./src/delete.cjs");

module.exports = {
    create,
    update,
    delete: remove
};