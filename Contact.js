"use strict";

/**
 * Contact Rest API class.
 */
class Contact extends Api {
    /**
     * Constructor method.
     */
    constructor() {
        super();
    }

    /**
     * Path getter.
     * @returns {string} Required controller path element for contacts.
     */
    get path() {
        return 'contacts/';
    }
}
