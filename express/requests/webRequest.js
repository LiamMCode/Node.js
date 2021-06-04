let url = require('url');
let request = require('request');

let options = {
  protocol: "http:",
  host: "search.twitter.com",
  pathname: '/search.json',
  query: { q: "codeschool"}
};

let searchURL = url.format(options);

request(searchURL, function(err, response, body) {
  console.log(body);
});