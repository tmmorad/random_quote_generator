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
var flagCount = 0;
var autoRefreshTimer;

//short-hand Print function that outputs the MESSAGE string
//to the chosen element with the desired class within the div: quote-box
function print(message, name){
  var output = document.getElementById('quote-box').getElementsByClassName(name);
  output[0].innerHTML = message;
}

//adds seenFlag property to every object in quotes array
//seenFlag is used to track weather a quote has already been seen or not in this iteration
for(var i=0; i<quotes.length; i+=1){
  quotes[i]['seenFlag'] = false;
}

//checks to see if all the quotes have been seen yet
//and then resets the count and all the flags if all the quotes have been seen
function checkFlags(){
    if(flagCount === quotes.length){
      for(var i=0; i<quotes.length; i+=1){
          quotes[i]['seenFlag'] = false;
    }
    console.log("New Quotes Iteration");
    return flagCount =0;
  }
} //End of checkFlags

//Time Function to refresh quotes at a set interval 20sec
function startTimer() {
  autoRefreshTimer = window.setTimeout(printQuote, 20000);
}
//Stops timer so that function calls do not overlap
function clearTimer() {
   window.clearTimeout(autoRefreshTimer);
}

//Changes body background-color to a random color
function getMeColors(){
    var rgb =[];
    for(var i = 0; i<3; i+=1){
      rgb.push(Math.floor(Math.random() * 256) + 1);
    }
    rgb.join(',')
    var colorCode = "rgb"+ "("+ rgb +")";//output rgb(000,000,000) as string
    const body = document.querySelector('body');
    const button = document.getElementById('loadQuote');
    body.style.background = colorCode;
    button.style.background = colorCode;
 }

// Create the getRandomQuote function and name it getRandomQuote
function getRandomQuote(quotes){
  getMeColors();
  var maxnum = quotes.length;
  var quoteNum = -1;
  checkFlags();

//will continue to generate random numbers until a quote that has not been seen is selected
  do {
    quoteNum = Math.floor(Math.random() * maxnum);
  } while (quotes[quoteNum]['seenFlag'] === true);

  quotes[quoteNum]['seenFlag'] = true;
  flagCount+=1;

  console.log(quoteNum+1 + "# " + quotes[quoteNum]['quote']);//simply shows which quote was pulled

  return pickedQuote = quotes[quoteNum];
} //END of getRandomQuote



/*
Create the printQuote funtion and name it printQuote
Output Example:
<p class="quote">Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.</p>
<p class="source">Patrick McKenzie<span class="citation">Twitter</span><span class="year">2016</span></p>
*/

function printQuote(){
  clearTimer();
  getRandomQuote(quotes);
  print(pickedQuote['quote'], 'quote');//prints the quote to <p class="quote">

  var addSpans ='';//stores string for adding html span Citation, Year, and Tags
  if (pickedQuote['citation'] !== ''){
    addSpans += '<span class="citation">' + pickedQuote["citation"] + '</span>';
  }
  if (pickedQuote['year'] !== ''){
    addSpans += '<span class="year">' + pickedQuote["year"] + '</span>';
  }
  if (pickedQuote['tags'] !== ''){
    addSpans += '<p class="tags">' + "<em>Tags:</em> " + pickedQuote["tags"].join(', ') + '</p>';
  }
//prints the source string adding the citation and year spans if they are present
  if (addSpans == ''){
    print(pickedQuote['source'], 'source')
  }
  else {
    print((pickedQuote['source']) + addSpans, 'source');
  }

  startTimer();

}

startTimer();//starts intial autoRefreshTimer if user doesn't click button

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
