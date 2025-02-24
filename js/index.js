var quoteContainer = [
  {
    title: " “Be yourself; everyone else is already taken.” ",
    author: "Oscar Wilde",
  },
  {
    title:
      " “I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.” ",
    author: "Marilyn Monroe",
  },
  {
    title: " “So many books, so little time.” ",
    author: "Frank Zappa",
  },
  {
    title:
      " “Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” ",
    author: "Albert Einstein",
  },
  {
    title: " “A room without books is like a body without a soul.” ",
    author: "Marcus Tullius Cicero",
  },
  {
    title:
      " “Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” ",
    author: "Bernard M. Baruch",
  },
  {
    title:
      " “You know you're in love when you can't fall asleep because reality is finally better than your dreams.” ",
    author: "Dr. Seuss",
  },
  {
    title: " “You only live once, but if you do it right, once is enough.” ",
    author: "Mae West",
  },
  {
    title: " “Be the change that you wish to see in the world.” ",
    author: "Mahatma Gandhi",
  },
  {
    title:
      " “In three words I can sum up everything I've learned about life: it goes on.” ",
    author: "Robert Frost",
  },
];

//! Function to generate a random number to display which will use to generate a specific quote
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


//! Function to display a quote based on random number from the previous function

function displayQuote(randomNumber) {
    // call the randon function to generate random number dynamically everytime we call displayQuote(when click the generate button)
  var randomNumber = random(0, quoteContainer.length - 1);

  var cartona = ``;
  cartona += `<h2> ${quoteContainer[randomNumber].title}</h1>
                <h5 class="mt-3">- ${quoteContainer[randomNumber].author} - </h5>
    `;
  document.getElementById("displayQuote").innerHTML = cartona;
}
