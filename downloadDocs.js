const utils   = require('./utils.js'),
getPages      = utils.getPages,
downloadDocs  = utils.downloadDocs,
formatDirName = utils.formatDirName;

const baseUrl = 'https://untappd.com/api/docs',
docsDir       = './docs';

getPages(baseUrl, (err, urls) => {
  var opts = {}
  if(!err) {
    for (var i = 0; i <= urls.length; i++) {
      if (urls[i] !== undefined){
        opts.directory = `${docsDir}/${formatDirName(urls[i])}`;
        opts.urls = urls[i];
        downloadDocs(opts);
      }
    }
  }
})