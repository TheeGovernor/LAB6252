/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');
//var SpotifyWebApi = require("../");
//var authorizationCode = '<insert authorization code>';

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

    
// create a new express server
var app = express();

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();
   

  var clientId ='e08932f0814b4d36a1cc22cab827e217';
  var clientSecret ='f219e8adec224ced9e61d014634709bb';
  var redirectUri ='<insert redirect URI>';


/*
spotifyApi.authorizationCodeGrant(authorizationCode)
  .then(function(data) {

    // Save the access token so that it's used in future requests
    spotifyApi.setAccessToken(data['access_token']);
});

spotifyApi.authorizationCodeGrant(authorizationCode)
  .then(function(data) {
    spotifyApi.setAccessToken(data.body['access_token']);
    return spotifyApi.addTracksToPlaylist('thelinmichael', '5ieJqeLJjjI8iJWaxeBLuK', ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh", "spotify:track:1301WleyT98MSxVHPZCA6M"],
      {
        position : 10
      })
  }).then(function(data) {
    console.log('Added tracks to the playlist!');
  }).catch(function(err) {
    console.log('Something went wrong!', err.message);
  });
  */

app.post('/hi',function(req,res) {
	console.log(req.params);
    res.send("Hello Worldddd!");
});


var http = require('http');

//The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
var options = {
  host: 'www.random.org',
  path: '/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
};

var callback = function(response) {
  var str = '';

  //another chunk of data has been recieved, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been recieved, so we just print it out here
  response.on('end', function () {
    console.log(str);
  });
};

http.request(options, callback).end();

// start server on the specified port and binding host
app.listen(appEnv.port|5000, '0.0.0.0', function() {

	// print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});
