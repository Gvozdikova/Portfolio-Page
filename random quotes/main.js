$(document).ready(function()
{
	var quote;
	var author;
	$("#btn").on("click", function(){
		getQuote();
});

	function getQuote()
	{
		$.ajax({
			url:"http://api.forismatic.com/api/1.0/",
			jsonp: "jsonp",
			dataType: "jsonp",
			data: {
				method: "getQuote",
				lang: "en",
				format: "jsonp"
			},
			success: function(response) {
				quote = response.quoteText;
				author = response.quoteAuthor;
				$("#quote").text(quote);
				if (author)
				{
					$("#author").text('said by ' + author);
				} else {
					$("#author").text(" - by Unknown Hero");
				}
			}
		});
		
	}
	getQuote();

});

function shareTweet ()
{
	
	var quoteToTweet = quote.innerHTML;
	if(quoteToTweet.length >100)
	{
		quoteToTweet = quoteToTweet.substring(0, 100).match(/(^.+)\s/)[1] + "...";
	}
	quoteToTweet = encodeURI("\"" + quoteToTweet);
	var quoteAuthorTweet = author.innerHTML;
	quoteAuthorTweet = encodeURI(quoteAuthorTweet);
	window.open("https://twitter.com/intent/tweet?text=" + quoteToTweet + "\"" + "%0A" + quoteAuthorTweet + "&hashtags=worthsharing");
}

$(function(){

$(".twitter-share-button").click(shareTweet);

})
