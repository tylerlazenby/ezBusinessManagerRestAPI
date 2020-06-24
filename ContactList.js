"use strict";

/**
 * ContactList Rest API class.
 */
class ContactList extends Api {
    /**
     * Constructor method.
     */
    constructor() {
        super();
    }

    /**
     * Path getter.
     * @returns {string} Required controller path element for contact lists.
     */
    get path() {
        return 'contact-lists/';
    }
}
