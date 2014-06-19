/*

	DOM SCRAPING / PREPROCESSING FUNCTIONS

  These functions simply retrieve data from the page and do light preprocessing. 
  They are to be helpers for higher level functions which implement learning and 
  NLP algorithms on these page elements and combinations of page elements.

*/


//Returns a JSON object containing relevant info from a discussion thread

/*

  Example psudo-JSON:
    
    Discussion object
      
      Context object:
        title:
        context:
        contibutors:
        commentors:

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

function getDiscussion(body){
  $ = cheerio.load(body);

  return getCommentors(body);

}

//Returns 
function getContext(){

}

//Returns 
function getTitle(body){

}

//Returns 
function getContextAsString(body) {
  
}

//Returns an array containing all the people who have contributed to the discussion
function getContributors(body) {
  
}

//Returns an array containing all people who have commented in the discussion
function getCommentors(body) {
  $ = cheerio.load(body);
  var commentors = [];

  $('.user-name', '.activity-item-comment-actor')
    .each(function(i,elem){
      commentors.push($(this).text());
    });

  return unique(commentors);
}


//Returns a JSON object containing an array of comments 

/*

  Example psudo-JSON:
    
    Returns:
  
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


//Returns 
function getComments(body) {
  
}

//Returns 
function getCommentText(comment) {
  
}

//Returns 
function getCommentAuthor(comment) {
  
}

//Returns 
function getCommentLinks(comment) {
  
}

//Returns 
function getCommentLikedBy(comment) {
  
}

//Returns 
function getPeopleTaggedInComment(comment) {
  
}
