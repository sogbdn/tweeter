/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const tweetData = {
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
}

// Function createTweetElement: take tweet object and give back tweet HTML elt
function createTweetElement(tweetData) {
	// Create container = article elt with classe 'tweet'
	let $tweet = $('<article>').addClass('tweet');
	let $header = $('<header>').addClass('Name');
	let $img = $('<img>').addClass('photo').attr('src', tweet.user.avatars.regular);
	let $div1 = $('<div>').addClass('author');
	let $div2 = $('<div>').addClass('arobase');
	let $div3 = $('<div>').addClass('text');
	let $footer = $('<footer>').attr("date")

	return $tweet;
}

var $tweet = createTweetElement(tweetData);
// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet);