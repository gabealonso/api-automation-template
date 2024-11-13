/** LIBS & IMPORTS */
import * as _ from "../helpers/commons.js";
import path from '../helpers/data/path.json' with { type: 'json' };
import headers from '../helpers/data/headers.json' with { type: 'json' };
import body from '../helpers/data/body.json' with { type: 'json' };

/** FUNCTIONS */

/**
 * Authenticates a user using environment variables for credentials.
 *
 * @returns {Promise<Object>} - Returns an object containing the response body and status of the authentication request.
 */
const auth = async () => {
    const authResponse = await _.common_post(
        path.auth, 
        headers.defaultHeaders, 
        { ...body.auth, username:`${process.env.USERNAME}`, password:`${process.env.PASSWORD}` }
    );

    return {
        body: authResponse.body,
        status: authResponse.status,
    };
};

/**
 * Initiates a new booking request.
 *
 * @returns {Promise<Object>} - An object containing the response data from the booking creation request.
 * @property {Object} body - The response body with details about the created booking or an error message if unsuccessful.
 * @property {number} status - The HTTP status code of the response, indicating success or the type of error.
 */
const createBooking = async () => {
    const createBookingResponse = await _.common_post(
        path.booking, 
        headers.defaultHeaders,
        body.createBooking
    );

    return {
        body: createBookingResponse.body,
        status: createBookingResponse.status,
    };
};

/**
 * Retrieves booking information for a specified booking ID.
 *
 * @param {string} bookingId - The unique identifier of the booking to retrieve.
 * @returns {Promise<Object>} - An object containing the response data from the booking retrieval request.
 * @property {Object} body - The response body with details about the specified booking or an error message if unsuccessful.
 * @property {number} status - The HTTP status code of the response, indicating success or the type of error.
 */
const getBooking = async (bookingId) => {
    const getBookingResponse = await _.common_get(
        path.booking + "/" + bookingId,
        headers.defaultHeaders
    );

    return {
        body: getBookingResponse.body,
        status: getBookingResponse.status,
    };
};

/**
 * Deletes a booking by its ID.
 *
 * @param {string} bookingId - The unique identifier of the booking to be deleted.
 * @param {string} token - The authentication token for the user performing the deletion.
 * @returns {Promise<Object>} - The response data after attempting to delete the booking, including the body and status.
 */
const deleteBooking = async (bookingId, token) => {
    const deleteBookingResponse = await _.common_delete(
        path.booking + "/" + bookingId,
        { ...headers.defaultHeaders, Cookie: `token=${token}` }
    );

    return {
        body: deleteBookingResponse.body,
        status: deleteBookingResponse.status,
    };
};

/** EXPORTS */

export {
    auth,
    createBooking,
    getBooking,
    deleteBooking
};