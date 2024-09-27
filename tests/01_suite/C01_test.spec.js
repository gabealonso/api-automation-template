/** LIBS */
import {use, expect} from 'chai';
import chaiHttp from 'chai-http';
import chaiJsonEqual from 'chai-json-equal';
import * as fn from '../helpers/functions.js'

/** CHAI */
use(chaiHttp);
use(chaiJsonEqual);

/** TEST SUITE */
describe('Suite 1', () => {

    it('Case 1 - fact property check', async () => {
        const factData = await fn.getFactData();

        expect(factData.fact).to.be.a('string', 'fact property is not a string');
    });

    it('Case 2 - length property check', async () => {
        const factData = await fn.getFactData();

        expect(factData.length).to.be.a('number', 'length property is not a number');
    });

});