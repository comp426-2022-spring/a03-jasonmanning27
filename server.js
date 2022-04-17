// import functions from coin.mjs
import { coinFlip, coinFlips, countFlips, flipACoin } from './modules/coin.mjs'
import { createRequire } from 'module'

const require = createRequire (import.meta.url)
// Require Express.js
const express = require('express')
const app = express()

// set up for inputs
const arv = require('minimist')(process.argv.slice(2))
argv['port']

const port = argv['port'] || process.env.PORT || 5000

// Start an app server
const server = app.listen(HTTP_PORT, () => {
    console.log('App listening on port %port%'.replace('%PORT%', HTTP_PORT))
});

// Default response for any other request
app.use(function(req, res) {
    res.status(404).send('404 NOT FOUND')
});

// checkpoints and endpoints

app.get('/app/', (req, res) => { // checkpoint
    // Respond with status 200
        res.statusCode = 200;
    // Respond with status message "OK"
        res.statusMessage = 'OK';
        res.writeHead( res.statusCode, { 'Content-Type' : 'text/plain' });
        res.end(res.statusCode+ ' ' +res.statusMessage)
});

// Flip a coin endpoint
app.get('/app/flip/', (req, res) => {

    res.statusCode = 200;
    res.statusMessage = 'OK';

    // flip a coin
    const result = coinFlip();

    // check if result = heads or tails
    if(result == "heads") {
        res.json({"flip":"heads"});
    } else {
        res.json({"flip":"tails"});
    }
});

// Flip multiple coins
app.get('/app/flip/:number', (req, res) => {

    res.statusCode = 200;
    res.statusMessage = 'OK';

    // Flip multiple coins and store results
    const result = coinFlips(req.params.number)

    const count = countFlips(result);

    res.json({"flips":result, "count":count})

});


// Guess Heads
app.get('/app/flip/call/heads', (req, res) => {

    res.statusCode = 200;
    res.statusMessage = 'OK';

    // Flip multiple coins and store results
    const result = flipACoin('heads');
    res.json(result);

});

// Guess Tails
app.get('/app/flip/call/heads', (req, res) => {

    res.statusCode = 200;
    res.statusMessage = 'OK';

    // Flip multiple coins and store results
    const result = flipACoin('tails');
    res.json(result);

});

app.use(function(req, res) {
    res.status(404).send('404 NOT FOUND')
});