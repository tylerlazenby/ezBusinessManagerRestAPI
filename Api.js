"use strict";

/**
 * Abstract Rest API class.
 */
class Api {
    /**
     * Token must be set manually for the website, otherwise this system will not work. You can get the token by signing
     * in as an admin, and going to the contact. It will be listed at the bottom.
     */
    constructor() {
        this.token = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"; // Put Customer Token Here
    }

    /**
     * Path getter.
     * @returns {string} Required controller path element.
     */
    get path() {
        return '';
    }

    /**
     * Host URL getter.
     * @returns {string} URL of the Rest API server.
     */
    get host() {
        return "https://api.ezbusinessmanager.com/";
    }

    /**
     * URL prefix getter.
     * @returns {string} Host service address plus required controller string.
     */
    get urlPrefix() {
        return this.host + this.path;
    }

    /**
     * Token suffix builder.
     * @param {boolean} isFirst If the token is the first query param passed.
     * @returns {string} User token query param string.
     */
    tokenSuffix(isFirst = true) {
        if (isFirst) {
            return '?token' + this.token;
        } else {
            return "&token" + this.token;
        }
    }

    /**
     * Numeric data checker and converter.
     * @param {*} numericData Variable data that needs to be checked and converted.
     * @returns {string} String equal to the passed data as if type casted if it wasn't a string to begin with.
     */
    ensureIsString(numericData) {
        if (typeof numericData !== 'string') {
            numericData = numericData.toString();
        }
        return numericData;
    }

    /**
     * Contacts fetcher.
     * @returns {Promise<Response>} When resolved, a serialized collection of applicable contacts or nothing.
     */
    getAll() {
        const url = this.urlPrefix + 'get-all' + this.tokenSuffix();
        try {
            return fetch(url);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    /**
     * Single contact fetcher.
     * @param {string|int} id Contact ID of the desired contact.
     * @returns {Promise<Response>} When resolved, a serialized collection of the contact's information or nothing.
     */
    get(id) {
        id = this.ensureIsString(id);
        const url = this.urlPrefix + 'get/' + id + this.tokenSuffix();
        try {
            return fetch(url);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    /**
     * Contact mutator.
     * @param {string|int} id Contact ID of the desired contact.
     * @param {object} data Information that should be changed. Note: user_id can be passed but will always be
     * overwritten.
     * @returns {Promise<Response>} When resolved, a serialized collection of the changed contact's information or
     * nothing.
     */
    change(id, data) {
        id = this.ensureIsString(id);
        let dataString = "";
        data.forEach(function (item, key) {
            dataString += "&data[" + key + "]=" + item;
        });
        const url = this.urlPrefix + 'change/' + id + this.tokenSuffix() + dataString;
        try {
            return fetch(url);
        } catch (error) {
            console.error("Error:", error);
        }
    }

    /**
     * Contact deletion method.
     * @param {string|int} id Contact ID of the desired contact.
     * @returns {Promise<Response>} When resolved, a serialized collection of the now deleted contact's data or nothing.
     */
    delete(id) {
        id = this.ensureIsString(id);
        const url = this.urlPrefix + 'delete/' + id + this.tokenSuffix();
        try {
            return fetch(url);
        } catch (error) {
            console.error("Error:", error);
        }
    }

    /**
     * Contact add method.
     * @param data All the data required to make the contact. Must contain at least a first and last name. Note: user_id
     * may be passed but will always be overwritten by the User's ID determined by the passed token.
     * @returns {Promise<Response>} When resolved, a serialized collection of the now deleted contact's data.
     */
    add(data) {
        let dataString = "";
        data.forEach(function (item, key) {
            dataString += "&data[" + key + "]=" + item;
        });
        const url = this.urlPrefix + 'sff/' + this.tokenSuffix() + dataString;
        try {
            return fetch(url);
        } catch (error) {
            console.error("Error:", error);
        }
    }
}
