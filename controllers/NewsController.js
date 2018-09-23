const googleNewsRes = require('google-news-rss');
const myGoogleNews = require('my-google-news');
const LiberalMedia = require('../Data/LiberalMedia');
const ConservativeMedia = require('../Data/ConservativeMedia');
const iGoogleNewsRSSScraper = require('googlenews-rss-scraper');
const googleTrends = require('google-trends-api');
const trends = require('node-google-search-trends');

myGoogleNews.resultsPerPage = 100;
const googleNews = new googleNewsRes();
const STATUS_SERVER_ERROR = 500;
const STATUS_OK = 200;

const getNewsResults = (req, res) => {
  const {searchTerm} = req.body;
    myGoogleNews(searchTerm, (err, results) => {
      if (err) res.status(STATUS_SERVER_ERROR).json({ error: err.message });

      res.status(STATUS_OK).json(results);
    })
}

const getLiberalBias = (req, res) => {
  const {searchTerm} = req.body;

  const liberalList = [];
  let myPublisher = '';
    myGoogleNews(searchTerm, (err, results) => {
      if (err) res.status(STATUS_SERVER_ERROR).json({ error: err.message });
      console.log(results);
      for (let i = 0; i < results.links.length; i++) {
        myPublisher = results.links[i].link;
        for (let j = 0; j < LiberalMedia.data.length; j++) {
          // console.log("data: ", LiberalMedia.data[j].link)
          if (myPublisher.match(LiberalMedia.data[j].link)) {
            results.links[i].publisher = LiberalMedia.data[j].src;
            liberalList.push(results.links[i]);
            break;
          }
        }
      } 
      res.status(STATUS_OK).json(liberalList);
    })
}
const getLiberalAlt = (req, res) => {
  const {searchTerm} = req.body;
  iGoogleNewsRSSScraper.getGoogleNewsRSSScraperData({  newsType: 'QUERY', newsTypeTerms: searchTerm}, (data) => {
    if (data.err) res.status(STATUS_SERVER_ERROR).json({ error: err.message });
    console.log(data);
  })
}

const getLiberalFull = (req, res) => {
  const {searchTerm} = req.body;
  // console.log(searchTerm);
  let dataSearch = '';
  const num = 100;
  const liberalList = [];
  let myPublisher = '';
  googleNews
    .search(searchTerm, num)
    .then((results) => {
      // console.log(results.length);
      for (let i = 0; i < results.length; i++) {
        myPublisher = results[i].link;
        // console.log(myPublisher)
        for (let j = 0; j < LiberalMedia.data.length; j++) {
          // get meta data at this point when there is a match
          // console.log(LiberalMedia.data[j].link)
          if (myPublisher.match(LiberalMedia.data[j].link)) {
            results[i].publisher = LiberalMedia.data[j].src;
            // console.log('match found');
            liberalList.push(results[i]);
            break;
          }
        }
      } 
      res.status(STATUS_OK).json(liberalList);
    })
    .catch((err) => {
      res.status(STATUS_SERVER_ERROR).json({ error: err.message });
    })
}
const getConservativeBias = (req, res) => {
  const {searchTerm} = req.body;
  // console.log('searchterm: ', searchTerm);
  const conservativeList = [];
  let myPublisher = '';
    myGoogleNews(searchTerm, (err ,results) => {
      if (err) res.status(STATUS_SERVER_ERROR).json({ error: err.message });
      console.log('results: ', results);
      for (let i = 0; i < results.links.length; i++) {
        myPublisher = results.links[i].link;
        // console.log(myPublisher)
        for (let j = 0; j < ConservativeMedia.data.length; j++) {
          // console.log("data: ", LiberalMedia.data[j].link)
          if (myPublisher.match(ConservativeMedia.data[j].link)) {
            results.links[i].publisher = ConservativeMedia.data[j].src;
            conservativeList.push(results.links[i]);
            break;
          }
        }
      } 
      res.status(STATUS_OK).json(conservativeList);
    })
}
const getConservativeFull = (req, res) => {
  const {searchTerm} = req.body;
  // console.log(searchTerm);
  let dataSearch = '';
  const conservativeList = [];
  let myPublisher = '';
  googleNews
    .search(searchTerm, 100, 'en')
    .then((results) => {
      // console.log(results);
      for (let i = 0; i < results.length; i++) {
        myPublisher = results[i].link;
        // console.log(myPublisher)
        for (let j = 0; j < ConservativeMedia.data.length; j++) {
          // get meta data at this point when there is a match
          // console.log(ConservativeMedia.data[j].link)
          if (myPublisher.match(ConservativeMedia.data[j].link)) {
            results[i].publisher = ConservativeMedia.data[j].src;
            // console.log('match found');
            conservativeList.push(results[i]);
            break;
          }
        }
      } 
      res.status(STATUS_OK).json(conservativeList);
    })
    .catch((err) => {
      res.status(STATUS_SERVER_ERROR).json({ error: err.message });
    })
}

const getConservativeAlt = (req, res) => {
  const {searchTerm} = req.body;
  iGoogleNewsRSSScraper.getGoogleNewsRSSScraperData({  newsType: 'QUERY', newsTypeTerms: searchTerm}, (data) => {
    if (data.err) res.status(STATUS_SERVER_ERROR).json({ error: err.message });
    const newsArray = JSON.stringify(data, null, 2)
    // console.log(newsArray[100]); 
  })
}
// FInd ways to make google trends work
const findGoogleTrends = (req, res) => {
  trends('United States', 10, function(err, data) {
    if (err) return console.err(err);
    let trendData = [];
    for (let i = 0; i < 10; i++) {
      trendData.push(data[`${i}`].title[0]);
    }
    // console.log(trendData);  // Pretty prints JSON 'data';
    res.status(STATUS_OK).json(trendData);
});
}

module.exports = {
  getNewsResults,
  getLiberalBias,
  getConservativeBias,
  getLiberalFull,
  getLiberalAlt,
  getConservativeAlt,
  getConservativeFull,
  findGoogleTrends,
}