const express = require('express');

/**
 * HTTPServer
 */
class HTTPServer {

    /**
     * Express application
     * @type {*|Express}
     * @private
     */
    _app = express();

    constructor() {
        this._app.use(express.static('public'));
    }

    /**
     * Application
     * @return {*|Express}
     */
    get app() {
        return this._app;
    }

}

module.exports = HTTPServer;