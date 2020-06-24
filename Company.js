"use strict";

/**
 * Company Rest API class.
 */
class Company extends Api {
    /**
     * Constructor method.
     */
    constructor() {
        super();
    }

    /**
     * Path getter.
     * @returns {string} Required controller path element for companies.
     */
    get path() {
        return 'companies/';
    }
}
