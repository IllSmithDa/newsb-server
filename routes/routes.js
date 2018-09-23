const NewsController = require('../controllers/NewsController')

module.exports = (server) => {
  server.route('/getNewsResults')
    .post(NewsController.getNewsResults);
  server.route('/getLiberalBias')
    .post(NewsController.getLiberalFull);
  server.route('/getConservativeBias')
    .post(NewsController.getConservativeFull);
  server.route('/findGoogleTrends')
    .get(NewsController.findGoogleTrends);
}