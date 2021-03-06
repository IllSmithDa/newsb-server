const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/routes');
const port = 3030;
const server = express();
const requrl = require('./reqURL');

server.use(bodyParser.json());

server.options('/findGoogleTrends', cors());
/*
server.use((req, res, next) => {
  console.log('reached');
  console.log(req.headers)
  res.setHeader("Access-Control-Allow-Origin", requrl.reqURL );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
*/
const corsOption = {
  origin: requrl.reqURL,
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false
};


console.log(requrl.reqURL)

server.use(cors(corsOption));
//https://stackoverflow.com/questions/15693192/heroku-node-js-error-web-process-failed-to-bind-to-port-within-60-seconds-of
// add process.env.PORT to avoid this issue
server.listen(process.env.PORT || port, () => {
  console.log(`server listening on port ${port}`);
})

routes(server);
