'use strict';

// var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";


//url += '?' + $.param({
//  'api-key': "402206c1ad1e4b02a94655a84f0d41ce"
//});

url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=402206c1ad1e4b02a94655a84f0d41ce&q=burglary"

$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});