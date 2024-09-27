/** LIBS & IMPORTS */
import * as _ from "../helpers/commons.js";
import path from '../helpers/data/path.json' with { type: 'json' };
import headers from '../helpers/data/headers.json' with { type: 'json' };

/** FUNCTIONS */

const getFactData = async () => {
    const factResponse = await _.common_get(path.fact, headers.defaultHeaders);

    return factResponse.body;
};

/** EXPORTS */

export {
    getFactData
};