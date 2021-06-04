let url = require('url');

let options = {
  // add URL options here
  protocol: 'http:', 
  host: 'search.twitter.com', 
  pathname: '/search.json',
  
  query: {
    q: 'codeschool'
  }
};

let searchURL = url.format(options);
console.log(searchURL);
