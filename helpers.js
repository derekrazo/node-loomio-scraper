/*

  HELPER FUNCTIONS

  Because abstraction is good.

*/


/*

Downloads an HTML page as a file.

EXAMPLE USE:

download('./doc.text',url,function(err,result){
      //handle error
      //console.log('creating ' + fileName);
});  

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

/*

Returns an array that has only unique elements

Incredible bullshit that I need this but  
got bored looking for a nicer way to do it

*/
function unique (array){
  uniqueArray = array.filter(function(elem, pos) {
      return array.indexOf(elem) == pos;
    });
  return uniqueArray;
}