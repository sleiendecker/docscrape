const scrape = require('website-scraper'),
cheerio      = require('cheerio'),
request      = require('request'),
utils        = {}


utils.getPages = (url, cb) => {
  var urls = [];
  request(url, (err, response, html) => {
    if (!err) {
      var $ = cheerio.load(html);
      $('.api-menu a').each(function(i, element){
        urls.push(`${url}${element.attribs.href}`);
      });
      cb(null, urls);
    }
  });
}

utils.downloadDocs = (opts) => {
  scrape(opts, (err, result) => {
    if (err) console.log(err);
  });
}

utils.formatDirName = (urlString) => {
  return urlString.substr(urlString.indexOf("#") + 1);
}

module.exports = utils;