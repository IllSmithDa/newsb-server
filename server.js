const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/routes');
const port = 3030;
const server = express();

server.use(bodyParser.json());

const corsOption = {
  origin: requrl.reqURL,
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false
};

server.use(cors(corsOption));
server.listen(port, () => {
  console.log(`server listening on port ${port}`);
})

routes(server);
