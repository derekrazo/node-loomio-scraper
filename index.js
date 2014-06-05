var request = require('request');
var fs = require('graceful-fs');
var cheerio = require('cheerio');
var _ = require('lodash');

var url = 'https://www.loomio.org/d/pVkZouXx/comms-strategy';

/*

	MAIN FUNCTION

*/

request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    //console.log(body) // Print the google web page.

    console.log(getCommentors(body));
  }
});












/*

	LOOMIO SCRAPING / PREPROCESSING FUNCTIONS

  These functions simply retrieve data from the page and do light preprocessing. 
  They are to be helpers for higher level functions which implement learning and 
  NLP algorithms on these page elements and combinations of page elements.

*/

//Returns an array containing all people who have commented in the loomio thread
function getCommentors(body) {
  $ = cheerio.load(body);
  var commentors = [];

  $('.user-name', '.activity-item-comment-actor')
    .each(function(i,elem){
      commentors.push($(this).text());
    });

  return unique(commentors);
}

//Returns a JSON object containing relevant info from a discussion thread

/*

  Example psudo-JSON:
    
    Discussion object
      
      title:
      context:
      contibutors:

      ARRAY OF:

        Comment object
          comment: id
          text:
          author:
          links:
          likedBy:
          peopleTagged:
          postedTime:

*/

function getDiscussion(){

}


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