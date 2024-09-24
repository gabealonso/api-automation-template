/** LIBS */
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = require('chai').should();
const fn = require("../helpers/functions.js");

/** CHAI */
chai.use(chaiHttp);

/** TEST SUITE */
describe('Suite 1', () => {

    it('Case 1 - 200 Response', async () => {
        const factData = await fn.getFactData();

        console.log('factData: ', factData);
    });

    it('Case 2 - Data Check', async () => {
        
    });

});