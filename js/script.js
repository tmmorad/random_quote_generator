/*
Treehouse Techdegree
FSJS - Random Quote Generator
Tamer Morad
*/

// Create the array of quote objects and name it quotes
var quotes = [
  {
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
    citation:'',
    year:'',
    tags:['inspirational', 'wisdom']
  },
  {
    quote: 'Do not go where the path may lead, go instead where there is no path and leave a trail.',
    source: 'Ralph Waldon Emerson',
    citation:'',
    year:'',
    tags:['inspirational', 'wisdom','poet']
  },
  {
    quote: 'The essential American soul is hard, isolate, stoic, and a killer. It has never yet melted.',
    source: 'D.H Lawrence',
    citation: 'Studies in Classic American Literature',
    year:1923,
    tags:['america', 'book','poet']
  },
  {
    quote: 'Maybe you\'ve been assigned this mountain to show others it can be moved. ',
    source: 'Unknown',
    citation: '',
    year:'',
    tags:['inspirational', 'wisdom', 'nature']
  }
];

var pickedQuote = {};

//Print function that outputs the message to the Div quote-box to the chosen element with the desired class
function print(message, name){
  var output = document.getElementById('quote-box').getElementsByClassName(name);
  output[0].innerHTML = message;
}

//adds Flag property to every object in quotes array
for(var i=0; i<quotes.length; i+=1){
  quotes[i]['seenFlag'] = false;
}

// Create the getRandomQuote function and name it getRandomQuote
function getRandomQuote(quotes){
  var maxnum = quotes.length;
  var quoteNum = Math.floor(Math.random() * maxnum);
  console.log(quoteNum+1);//simply shows which quote was pulled
  return pickedQuote = quotes[quoteNum];
}

console.log(pickedQuote);//remove this before submit

// Create the printQuote funtion and name it printQuote
//<p class="quote">Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.</p>
//<p class="source">Patrick McKenzie<span class="citation">Twitter</span><span class="year">2016</span></p>

function printQuote(){
  getRandomQuote(quotes);
  print(pickedQuote['quote'], 'quote');

  var addSpans ='';//stores string for adding html span Citation and Year
  if (pickedQuote['citation'] !== ''){
    addSpans += '<span class="citation">' + pickedQuote["citation"] + '</span>';
  }
  if (pickedQuote['year'] !== ''){
    addSpans += '<span class="year">' + pickedQuote["year"] + '</span>';
  }
//prints the source string adding the citation and year spans if they are present
  if (addSpans == ''){
    print(pickedQuote['source'], 'source')
  }
  else {
    print((pickedQuote['source']) + addSpans, 'source');
  }

  console.log(pickedQuote['quote']);//remove this before submit
  console.log(pickedQuote['source']);//remove this before submit

}

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

pickedQuote = {}; // clears the values from the object for reset
