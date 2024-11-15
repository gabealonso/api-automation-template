/** LIBS */
import {use, expect} from 'chai';
import chaiHttp from 'chai-http/index.js';
import chaiJsonEqual from 'chai-json-equal';
import * as fn from '../helpers/functions.js'

/** CHAI */
use(chaiHttp);
use(chaiJsonEqual);

/** TEST SUITE */
describe('Suite 1 - Bookings', () => {

    it('Case 1 - Authentication', async () => {
        const authData = await fn.auth();

        expect(authData.body.token).to.not.be.undefined;
        expect(authData.status).to.equal(200);
    });

    it('Case 2 - Create booking', async () => {
        const createBookingData = await fn.createBooking();

        expect(createBookingData.body.bookingid).to.not.be.undefined;
        expect(createBookingData.status).to.equal(200);
    });

    it('Case 3 - GET booking', async () => {
        const createBookingData = await fn.createBooking();
        const bookingId = createBookingData.body.bookingid;
        const getBookingData = await fn.getBooking(bookingId);

        expect(getBookingData.body.firstname).to.not.be.undefined;
        expect(getBookingData.body.lastname).to.not.be.undefined;
        expect(getBookingData.body.bookingdates).to.not.be.undefined;
        expect(getBookingData.status).to.equal(200);
    });

    it('Case 4 - DELETE booking', async () => {
        const authData = await fn.auth();
        const token = authData.body.token;
        const createBookingData = await fn.createBooking();
        const bookingId = createBookingData.body.bookingid;
        const deleteBookingData = await fn.deleteBooking(bookingId, token);
        const getBookingData = await fn.getBooking(bookingId);

        expect(getBookingData.status).to.equal(404, 'booking is not deleted');
        expect(deleteBookingData.status).to.equal(201);
    });

});