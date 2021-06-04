import express from 'express';
import stripe from 'stripe';
import cors from 'cors';

const app = express()

app.set('port', process.env.PORT || 4000)

app.get('/', (req, res) => res.send('hello world'))

app.listen(app.get('port'))

console.log('server on port: ', app.get('port'))