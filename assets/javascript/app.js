'use strict';

let searchParm; 


$('document').ready(function(){


$('#searchButton').click(function() {
    searchParm = $('#searchid1').val();
    console.log(searchParm);
})


console.log(searchParm);

let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=402206c1ad1e4b02a94655a84f0d41ce&q=burglary"



$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});



})