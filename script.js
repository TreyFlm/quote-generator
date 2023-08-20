let quotes = [
  ' "Dedication makes dreams come true". - Kobe Bryant',
  '"Once you know what failure feels like, determination chases success". - Kobe Bryant',
  ' "You have to fight to reach your dream. You have to sacrifice and work hard for it". - Leo Messi',
  ' "You have to be able to accept failure to get better". - LeBron James',
  ' "Things don\'t correct themselves, you\'ve got to go out there and work hard to correct them" - Tom Brady',
  ' "I can accept failure, everyone fails at something. But I can\'t accept not trying". - Michael Jordan',
  ' "Winning is not always the barometer of getting better". - Tiger Woods',
  ' "Persistence is very important; you should not give up unless you are forced to give up". - Elon Musk',
  ' "Don\'t compare yourself with anyone in this world ... if you do so, you are insulting yourself". - Bill Gates',
  ' "Life\'s too short to hang out with people who aren\'t resourceful". - Jeff Bezos',
];

document.querySelector('#gen-btn').addEventListener('click', genQuote);

function genQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById('newQuote').innerHTML = quotes[randomNumber];
}
genQuote();
