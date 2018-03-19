let request = require('request');
let url = 'https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=Nmbw4jPomfc&key=AIzaSyB5Sd0e4N-vOWao65BzhyKqt5rmyII8vME'
//'https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&allThreadsRelatedToChannelId=UCSO5KQBCz3GsuDOGLdu7NBw&videoId=zy3Ny5r9uSg&key=AIzaSyB5Sd0e4N-vOWao65BzhyKqt5rmyII8vME'
//`https://www.googleapis.com/youtube/v3/channels?forUsername='Vassilis Angels'&key=AIzaSyB5Sd0e4N-vOWao65BzhyKqt5rmyII8vME&part=snippet,contentDetails,statistics,status`
//'videos?id=7lCDEYXw3mM&key=AIzaSyB5Sd0e4N-vOWao65BzhyKqt5rmyII8vME&part=snippet,contentDetails,statistics,status`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let jason = JSON.parse(body);
    console.log('body:', jason);
  }
});

//Description: This example retrieves a video resource and identifies several
//             resource parts that should be included in the API response.

//API response:
