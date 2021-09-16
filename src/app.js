const { config } = require('dotenv');

const HTTPServer = require('./HTTPServer');

/**
 * Run webserver
 */
const run = () => {

    // Initialise environment variables
    config();

    // Express app
    const app = new HTTPServer().app;

    app.listen(process.env.APP_PORT, () => {
        console.log('SHEESH');
        console.log(`HTTP // Listening to ${process.env.APP_PORT}`);
    });

};

run();