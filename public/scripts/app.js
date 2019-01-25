/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Function createTweetElement: take tweet object and give back tweet HTML elt
function createTweetElement(tweetdata) {
	// Create container = article html elt with classe 'tweet'
	let newtweet = $('<article>').addClass('tweet');
	let header = $('<header>').addClass('Name');
	let img = $('<img>').addClass('photo').attr('src', tweetdata.user.avatars.regular);
	let div1 = $('<div>').addClass('author').text(tweetdata.user.name);
	let div2 = $('<div>').addClass('arobase').text(tweetdata.user.handle);
	let div3 = $('<div>').addClass('text').text(tweetdata.content.text);
	let footer = $('<footer>').addClass("date").text(tweetdata.created_at);
	// Create DOM tree
	$(newtweet).append(header);
	$(header).append(img);
	$(header).append(div1);
	$(header).append(div2);
	$(newtweet).append(div3);
	$(newtweet).append(footer);
	return newtweet;
}

function renderTweets(tweets) {
	// loops through tweets
	for (let elt of tweets) {
		// calls createTweetElement for each tweet
		let tweetHTML = createTweetElement(elt);
		// takes return value and appends it to the tweets container
		$('#tweet-container').append(tweetHTML);
	}
}

const data = [{
		"user": {
			"name": "Newton",
			"avatars": {
				"small": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
				"regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
				"large": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
			},
			"handle": "@SirIsaac"
		},
		"content": {
			"text": "If I have seen further it is by standing on the shoulders of giants"
		},
		"created_at": 1461116232227
	},
	{
		"user": {
			"name": "Descartes",
			"avatars": {
				"small": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
				"regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
				"large": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
			},
			"handle": "@rd"
		},
		"content": {
			"text": "Je pense , donc je suis"
		},
		"created_at": 1461113959088
	},
	{
		"user": {
			"name": "Johann von Goethe",
			"avatars": {
				"small": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
				"regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
				"large": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
			},
			"handle": "@johann49"
		},
		"content": {
			"text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
		},
		"created_at": 1461113796368
	}
];

$(document).ready(function () {
	renderTweets(data);
});