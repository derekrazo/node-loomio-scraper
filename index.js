var request = require('request');
var fs = require('graceful-fs');

var url = 'https://www.loomio.org/d/pVkZouXx/comms-strategy';

/*

	MAIN FUNCTION

*/

download('./doc.text',url,function(err,result){
      //handle error
      //console.log('creating ' + fileName);
});  



/*

	HELPER FUNCTIONS

*/


function download (localFile, remotePath, callback) {
  var localStream = fs.createWriteStream(localFile);

  var out = request({ uri: remotePath });
  out.on('response', function (resp) {
      if (resp.statusCode === 200){
          out.pipe(localStream);
          localStream.once('close', function () {
              callback(null, localFile);
          });
      }
      else
          callback(new Error("No file found at given url."),null);
  })
};