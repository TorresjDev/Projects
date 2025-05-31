/* eslint-disable max-len */
// eslint-disable-next-line no-unused-vars
const projectName = "random-quote-machine";
let quotesData = [];

var colors = [
	"#16a085",
	"#27ae60",
	"#2c3e50",
	"#f39c12",
	"#e74c3c",
	"#9b59b6",
	"#FB6964",
	"#342224",
	"#472E32",
	"#BDBB99",
	"#77B1A9",
	"#73A857",
];
var currentQuote = "",
	currentAuthor = "";

function getQuotes() {
	return $.ajax({
		headers: {
			Accept: "application/json",
		},
		// url: "http://localhost:8000/quotes",
		url: "https://gist.githubusercontent.com/TorresjDev/9083c20703e545dda74823a0dff49515/raw/fb6a713390a16b96a44e9df1766f1594d49ee218/.json",
		success: function (jsonQuotes) {
			const result = JSON.stringify(jsonQuotes);
			quotesData = JSON.parse(result);
			console.log(quotesData);
			console.log(result);
		},
	});
}

function getRandomQuote() {
	return quotesData[Math.floor(Math.random() * quotesData.length)];
}

function getQuote() {
	let randomQuote = getRandomQuote();

	currentQuote = randomQuote.quote;
	currentAuthor = randomQuote.author;

	$("#tweet-quote").attr(
		"href",
		"https://twitter.com/intent/tweet?hashtags=quotes&text=" +
			encodeURIComponent('"' + currentQuote + '" ' + currentAuthor),
	);

	$("#linkedin-quote").attr(
		"href",
		"https://www.linkedin.com/sharing/share-offsite/?text=" +
			encodeURIComponent('"' + currentQuote + '" ' + currentAuthor),
	);

	$("#tumblr-quote").attr(
		"href",
		"https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=" +
			encodeURIComponent(currentAuthor) +
			"&content=" +
			encodeURIComponent(currentQuote) +
			"&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button",
	);

	$(".quote-text").animate({ opacity: 0 }, 500, function () {
		$(this).animate({ opacity: 1 }, 500);
		$("#text").text(randomQuote.quote);
	});

	$(".quote-author").animate({ opacity: 0 }, 500, function () {
		$(this).animate({ opacity: 1 }, 500);
		$("#author").html(randomQuote.author);
	});

	var color = Math.floor(Math.random() * colors.length);
	$("html body").animate(
		{
			backgroundColor: colors[color],
			color: colors[color],
		},
		1000,
	);
	$(".button").animate(
		{
			backgroundColor: colors[color],
		},
		1000,
	);
}

$(document).ready(function () {
	getQuotes().then(() => {
		getQuote();
	});

	$("#new-quote").on("click", getQuote);
});
