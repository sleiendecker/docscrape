const utils   = require('./utils.js'),
getPages      = utils.getPages,
downloadDocs  = utils.downloadDocs,
formatName    = utils.formatName;

const baseUrl = 'https://untappd.com/api/docs',
docsDir       = './docs';

var opts = {
  directory: docsDir,
  urls: []
}

getPages(baseUrl, (err, urls) => {
  if(!err) {
    for (var i = 0; i <= urls.length; i++) {
      if (urls[i] !== undefined){
        var methodName = formatName(urls[i]);
        opts.urls.push(`${baseUrl}/v4#${formatName(urls[i])}`)
      }
    }
    downloadDocs(opts, (err, res) => {
      if (err) console.log(err);
    });
  }
})