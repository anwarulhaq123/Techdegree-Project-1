/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*Creating an arry of Object to store the data for quotes */

var quotes = [
    {
        quote: "It doesn't matter who you are or what you look like, so long as somebody loves you.",
        source: "Roald Dahl",
        citation: "The Witches",
        year: " 1983 ",
        category: "love"

    },
    {
        quote: "You forget what you want to remember, and you remember what you want to forget.",
        source: "Cormac McCarthy",
        citation: "The Road",
        year: "2006",
        category: "History"

    },
    {
        quote: "Memories warm you up from the inside. But they also tear you apart.",
        source: " Haruki Murakami",
        citation: "Kafka On The Shore",
        year: "2002",
        category: "Memories"

    },
    {
        quote: "Nowadays people know the price of everything and the value of nothing.",
        source: "Oscar Wilde",
        year: "1890"
    },
    {
        quote: "No one forgets the truth; they just get better at lying.",
        source: " Richard Yates",
        citation: "Revolutionary Road",
        category: "Habbits"

    },
    {
        quote: "Anyone who ever gave you confidence, you owe them a lot.",
        source: "Truman Capote",
        citation: "Breakfast At Tiffany's",
        year: "1958"
    }
]

// Function to genrate the random quotes from the above arry of objects.


function getRandomQuote() {
    var i = Math.floor(Math.random() * quotes.length);
    return quotes[i];
}

// Function to genrate the random colors 


function getRandomColors() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";

    document.body.style.background = bgColor;
}
// Function call.

getRandomColors();


// Function to print the quotes on the web 

function printQuote() {
    var i = getRandomQuote();
    var HTML = "";

    HTML += "<p class = 'quote'> " + i.quote + "</p>";
    HTML += "<p class = 'source'> " + i.source;
    if (i.citation) {
        HTML += "<span class 'citation'> " + i.citation + "</span>";
    }
    if (i.year) {
        HTML += "<span class = 'year'> " + i.year + "</span>";
    }
    if (i.category) {
        HTML += "<span class = 'category'>" + i.category + "</span>"
    }
    HTML += "<p>";

    document.getElementById('quote-box').innerHTML = HTML;
}


//Use of setinterval() method to change the quotes after set interval of time. 

setInterval("printQuote(getRandomColors())", 15000);

document.getElementById('loadQuote').addEventListener("click",getRandomColors,false);

document.getElementById('loadQuote').addEventListener("click", printQuote,false);
