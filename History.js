"use strict";

/**
 * History Rest API class.
 */
class History extends Api {
    /**
     * Constructor method.
     */
    constructor() {
        super();
    }

    /**
     * Path getter.
     * @returns {string} Required controller path element for histories.
     */
    get path() {
        return 'histories/';
    }
}
