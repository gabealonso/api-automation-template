/** LIBS & IMPORTS */
const _ = require("../helpers/commons.js");
const path = require('../helpers/data/path.json');
const headers = require('../helpers/data/headers.json');

/** FUNCTIONS */

const getFactData = async () => {
    const factResponse = await _.common_get(path.fact, headers.defaultHeaders);

    return factResponse.body;
};

/** EXPORTS */

module.exports = {
    getFactData
};