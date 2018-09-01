/*
Treehous Techdegree
FSJS - Random Quote Generator
Tamer Morad
*/

// Create the array of quote objects and name it quotes
var quotes = [
  {
    quote: 'quote1',
    source: 'author',
    citation: '',
    year: 2018,

  },
  {
    quote: 'quote2',
    source: 'author',
    citation: '',
    year: 2018,

  },
  {
    quote: 'quote3',
    source: 'author',
    citation: '',
    year: 2018,

  },
  {
    quote: 'quote4',
    source: 'author',
    citation: '',
    year: 2018,

  },
  {
    quote: 'quote5',
    source: 'author',
    citation: '',
    year: 2018,
    //tags:['warrior', 'funny', 'wisdom']
  }
];

var pickedQuote =[];

//Print function that outputs the message to the desired DIV(id)
function print(message, id){
  var output = document.getElementById(id);
  output.innerHTML = message;
}

// Create the getRandomQuote function and name it getRandomQuote
function getRandomQuote(quotes){
  var maxnum = quotes.length;
  var quoteNum = Math.floor(Math.random() * maxnum);
  console.log(quoteNum);
  for(var info in quotes[quoteNum]){
    pickedQuote.push(quotes[quoteNum][info]);
  }
  console.log(pickedQuote);
}
getRandomQuote(quotes);
// Create the printQuote funtion and name it printQuote



// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
//document.getElementById('loadQuote').addEventListener("click", printQuote, false);
