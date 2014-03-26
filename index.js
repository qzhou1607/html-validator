var request = require('request')
  , reqOpts = {
      uri : 'http://html5.validator.nu',
      qs: {
        out:'json'
      }
    };

module.exports = function(opts, callback){

  if(!opts.url){
    return callback(new Error('Missing required option: url'), null);
  } else {
    reqOpts.qs.doc = opts.url;
  }

  if(opts.format){
    reqOpts.qs.out = opts.format;
  }

  request(reqOpts, function(error, response, body){

    if(error){
      return callback(error, null);
    }

    var data = opts.format == 'json' ? JSON.parse(body.toString()) : body.toString();

    return callback(null, data);

  });
};