const projectName = 'random-quote-machine';

var colors = [
	'#660033',
	'#003366',
	'#006633',
	'#330066',
	'#660000',
	'#000066',
	'#006600',
	'#333366',
	'#333300',
	'#330033',
	'#003333',
	'#333333',
	'#330000',
	'#000033',
	'#003300',
	'#000000',
	'#16a085',
	'#27ae60',
	'#2c3e50',
	'#f39c12',
	'#e74c3c',
	'#9b59b6',
	'#FB6964',
	'#342224',
	'#472E32',
	'#BDBB99',
	'#77B1A9',
	'#73A857',
];

let quotesData;
var currentQuote = '';
var currentAuthor = '';

function getQuotes() {
	var config = {
		headers: {
			accept: 'application/json',
		},
		url: 'https://gist.githubusercontent.com/TorresjDev/9083c20703e545dda74823a0dff49515/raw/fb6a713390a16b96a44e9df1766f1594d49ee218/.json',
		crossdomain: true,
	};
	console.log('getQuotes', { config });
	return axios(config);
}

function getRandomQuote() {
	return quotesData.quotes[Math.floor(Math.random() * quotesData.quotes.length)];
}

function getQuote() {
	let randomQuote = getRandomQuote();
	currentQuote = randomQuote.quote;
	currentAuthor = randomQuote.author;

	$('#tweet-quote').attr(
		'href',
		'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
			encodeURIComponent('"' + currentQuote + '" ' + currentAuthor),
	);

	$('#linkedin-quote').attr('href', 'https://www.linkedin.com/');

	$('#tumblr-quote').attr(
		'href',
		'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' +
			encodeURIComponent(currentAuthor) +
			'&content=' +
			encodeURIComponent(currentQuote) +
			'&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button',
	);

	$('.quote-text').animate({ opacity: 0 }, 500, function () {
		$(this).animate({ opacity: 1 }, 500);
		$('#text').text(randomQuote.quote);
	});

	$('.quote-author').animate({ opacity: 0 }, 500, function () {
		$(this).animate({ opacity: 1 }, 500);
		$('#author').html(randomQuote.author);
	});

	var color = Math.floor(Math.random() * colors.length);
	$('html body').animate(
		{
			backgroundColor: colors[color],
			color: colors[color],
		},
		900,
	);
	$('.button').animate(
		{
			backgroundColor: colors[color],
		},
		900,
	);
	$('.button-quote').animate(
		{
			backgroundColor: colors[color],
		},
		900,
	);
}

$(document).ready(function () {
	getQuotes().then((response) => {
		console.log({ response });
		quotesData = response.data;
		getQuote();
	});

	$('#new-quote').on('click', getQuote);
});
