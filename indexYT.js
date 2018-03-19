let request = require('request');
let url = `https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=
AIzaSyB5Sd0e4N-vOWao65BzhyKqt5rmyII8vME&part=snippet,contentDetails,statistics,status`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    console.log('body:', body);
  }
});

//Description: This example retrieves a video resource and identifies several
//             resource parts that should be included in the API response.

//API response:
