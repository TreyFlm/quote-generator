let quotes = [
  'Dedication makes dreams come true.',
  'Once you know what failure feels like, determination chases success.',
  'You have to fight to reach your dream. You have to sacrifice and work hard for it.',
  'You have to be able to accept failure to get better.',
  "Things don't correct themselves, you've got to go out there and work hard to correct them",
  "I can accept failure, everyone fails at something. But I can't accept not trying.",
  'Winning is not always the barometer of getting better',
  'Persistence is very important; you should not give up unless you are forced to give up.',
  "Don't compare yourself with anyone in this world ... if you do so, you are insulting yourself.",
  "Life's too short to hang out with people who aren't resourceful.",
];

document.querySelector('#gen-btn').addEventListener('click', genQuote);

function genQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById('newQuote').innerHTML = quotes[randomNumber];
}
genQuote();
