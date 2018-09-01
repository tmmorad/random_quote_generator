/*
Treehous Techdegree
FSJS - Random Quote Generator
Tamer Morad
*/

// Create the array of quote objects and name it quotes
var quotes = [
  {
<<<<<<< HEAD
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
=======
    quote: 'Thousands of tired, nerve-shaken, over-civilized people are beginning to find out that going to the mountains is going home; that wildness is a necessity',
    source: 'John Muir',
    citation: 'Our National Parks',
    year: 1923,
    tags:['book', 'nature', 'wisdom']

  },
  {
    quote: 'Fear is a force that sharpens your senses. Being afraid is a state of paralysis in which you can\'t do anything.',
    source: 'Marcus Luttrell',
    citation: 'Service: A Navy SEAL at War',
    year: 2011,
    tags:['warrior', 'book', 'wisdom']

  },
  {
    quote: 'There\'s a difference between knowing the path and walking the path.',
    source: 'Morpheus',
    citation: 'The Matrix',
    year: 1999,
    tags:['movie', 'wisdom']

  },
  {
    quote: 'When you have a wild wolf living under your skin, you are less likely to beintimidated by reality.',
    source: 'Daniele Bolelli',
    citation: 'On the Warrior\'s Path',
    year: 2008,
    tags:['warrior', 'wild', 'wisdom', 'book']

  },
  {
    quote: 'You cant\'t go back and change the beginning, but you can start where you are and change the ending.',
    source: 'C.S. Lewis',
    citation: '',
    year:'',
    tags:['inspirational', 'wisdom']
  },
  {
    quote: 'Maybe you\'ve been assigned this mountain to show others it can be moved. ',
    source: 'Unknown',
    citation: '',
    year:'',
    tags:['inspirational', 'wisdom', 'nature']
>>>>>>> 4b6c608c22cc2936ed431df4f55c7f12b80f40e0
  }
];

var pickedQuote =[];

//Print function that outputs the message to the desired DIV(id)
function print(message, id){
  var output = document.getElementById(id);
  output.innerHTML = message;
}
<<<<<<< HEAD

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
=======
>>>>>>> 4b6c608c22cc2936ed431df4f55c7f12b80f40e0

// Create the getRandomQuote function and name it getRandomQuote
function getRandomQuote(quotes){
  var maxnum = quotes.length;
  var quoteNum = Math.floor(Math.random() * maxnum);
  console.log(quoteNum+1);
  for(var info in quotes[quoteNum]){
    pickedQuote.push(quotes[quoteNum][info]);
  }
  console.log(pickedQuote);//remove this before submit
  return pickedQuote;
}

// Create the printQuote funtion and name it printQuote
/*
function printQuote(){
  getRandomQuote(quotes);

}
*/
getRandomQuote(quotes);

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
//document.getElementById('loadQuote').addEventListener("click", printQuote, false);
