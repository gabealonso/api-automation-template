import { use } from 'chai';
import chaiHttp from 'chai-http/index.js';
const chai = use(chaiHttp);

/**
     * @param { String } path endpoint route
     * Common get flow
*/
const common_get = async (path, headers) => {
     const response = await chai.request.execute(`${process.env.HOST}`).get(path).set(headers);
     
     if (response.status !== 200) {
          console.log(`Path: ${path}`);
          console.log(`Status: ${response.status}`);
          console.log(`Status: ${response.body}`);
     };
     
     return response;
};

/**
     * @param { String } path endpoint route
     * @param { Object } path auth/config
     * @param { Object } body data to send
*/
const common_post = async (path, headers, body) => {
     const response = await chai.request.execute(`${process.env.HOST}`).post(path).set(headers).send(body);
     
     if (response.status !== 200) {
          console.log(`Path: ${path}`);
          console.log(`Status: ${response.status}`);
          console.log(`Status: ${response.body}`);
     };
     
     return response;
};

/**
     * @param {string} path - The endpoint route to send the request to.
     * @param {object} headers - The request headers, typically containing authentication or configuration details.
     * @returns {Promise<object>} - The HTTP response object from the request.
     * @throws {Error} - Throws an error if the request fails or the server returns an unexpected status.
 */

const common_delete = async (path, headers) => {
     const response = await chai.request.execute(`${process.env.HOST}`).delete(path).set(headers);
     
     if (response.status !== 200) {
          console.log(`Path: ${path}`);
          console.log(`Status: ${response.status}`);
          console.log(`Status: ${response.body}`);
     };
     
     return response;
};

/**
     * @param { Object } obtained_result api response
     * Check if the API is on.
*/
const status_200 = obtained_result => obtained_result.should.have.status(200);

/**
     * @param { Array | String } value value from api response
     * @param { Number } len length of the value
*/
const lengthOf = (value, len) => value.should.have.lengthOf(len);

/**
     * @param { Any } obtained_result from API
     * @param { Any } expected_result from local
     * obtained_result and expected_result types should be the same.
*/
const check_model_and_data = (obtained_result, expected_result) => obtained_result.should.to.deep.equal(expected_result);

/**
     * @param { Any } obtained_result from API
     * @param { Any } expected_result from local
     * obtained_result and expected_result types should be the same.
*/
const deep_object_keys = (obj) => {
    return Object.keys(obj).filter(key => obj[key] instanceof Object).map(key => deep_object_keys(obj[key]).map(k => `${key}.${k}`)).reduce((x,y) => x.concat(y), Object.keys(obj));
};

export {
    common_get,
    common_post,
    common_delete,
    status_200,
    lengthOf,
    check_model_and_data,
    deep_object_keys
}