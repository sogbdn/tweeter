/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Function createTweetElement: take tweet object and give back tweet HTML elt
function createTweetElement(tweetdata) {
	// Create container = article html elt with classe 'tweet'
	let newtweet = $("<article>").addClass("tweet");
	let header = $("<header>").addClass("Name");
	let img = $("<img>")
		.addClass("photo")
		.attr("src", tweetdata.user.avatars.regular);
	let div1 = $("<div>")
		.addClass("author")
		.text(tweetdata.user.name);
	let div2 = $("<div>")
		.addClass("arobase")
		.text(tweetdata.user.handle);
	let div3 = $("<div>")
		.addClass("text")
		.text(tweetdata.content.text);
	let footer = $("<footer>")
		.addClass("date")
		.text(tweetdata.created_at);
	// Create DOM tree
	$(newtweet).append(header);
	$(header).append(img);
	$(header).append(div1);
	$(header).append(div2);
	$(newtweet).append(div3);
	$(newtweet).append(footer);
	return newtweet;
}
// Take and append array of tweet object in #tweet-container
function renderTweets(tweets) {
	// loops through tweets
	for (let elt of tweets) {
		// calls createTweetElement for each tweet
		let tweetHTML = createTweetElement(elt);
		// takes return value and appends it to the HTML tweets container
		$("#tweet-container").prepend(tweetHTML);
	}
}
// To load the DOM in external JS file
$(document).ready(function () {

	// Cancel the default action of form submission by HTTP request POST
	$("#form_submit").on("submit", function (event) {
		event.preventDefault(); //prevent form from submitting
		// Delete error message when submitting
		$("#empty").slideUp();
		$("#toolong").slideUp();

		if (this[0].value === "") {
			$("#empty").slideDown();
		}
		if (this[0].value.length > 140) {
			$("#toolong").slideDown();
		} else {
			var dataSt = $(this).serialize(); //turn form data (object) to query string 
			// AJAX request POST: send dataSt to the server
			$.ajax({
				url: $(this).attr("action"), //location of the script to send the data
				method: "POST", //HTTP method POST used for the request
				data: dataSt,
				success: function renderTweetswithoutLoop(data) {
					// calls createTweetElement for each tweet
					let tweetHTML = createTweetElement(data);
					// takes return value and appends it to the HTML tweets container
					$("#tweet-container").prepend(tweetHTML);
				}
			})
		}
	});
	// AJAX request GET
	function loadTweets() {
		$.ajax({
			url: "http://localhost:8080/tweets", //location of the script to get data
			method: "GET", //HTTP method GET used for the request
			datatype: "json",
			success: renderTweets
		})
	}
	loadTweets();

	$("#nav-bar button").click(function () {
		// Implement Toogle on Compose button
		$(".new-tweet").slideToggle();
		// Select and focus on textarea
		$(".new-tweet textarea").focus();
	});
});