var twitter = require('ntwitter');
var credentials = require('./credentials.js');

var t = new twitter({
	consumer_key: credentials.consumer_key,
	consumer_secret: credentials.consumer_secret,
	access_token_key: credentials.access_token_key,
	access_token_secret: credentials.access_token_secret
});

t.stream(
	'statuses/filter',
	//{ track: ['orioles'] },
	// baltimore bbox
	{'locations':'-76.71, 39.19, -76.52, 39.37'},
	function(stream) {
		stream.on('data', function(tweet) {
			console.log('tweet: ' + tweet.text);
		});
	}
);