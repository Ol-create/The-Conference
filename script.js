// Hamburger menu animation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.list1').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

// Create speaker section dynamically

const speaker = [
  {
    speakerImage: './image/Elon-musk.jpg',
    alt: 'Speaker Elon Musk',
    speakerName: 'Elon Reeve Musk',
    who: 'He is the founder, CEO, and Chief Engineer at SpaceX, and Product Architect of Tesla, Inc.; founder of The Boring Company.',
    bioSpeaker: 'Musk was born to a Canadian mother and South African father, and raised in Pretoria, South Africa.',
  },
  {
    speakerImage: './image/jeff-bezos.jpg',
    alt: 'Speaker Jeff Bezos',
    speakerName: 'Jeffrey Preston Bezos',
    who: 'He is the founder and executive chairman of Amazon.',
    bioSpeaker: 'He is an American entrepreneur, media proprietor, investor, computer engineer, and commercial astronaut',
  },
  {
    speakerImage: './image/bill-gate.jpg',
    alt: 'Speaker Bill Gates',
    speakerName: 'William Henry Gates III',
    who: ' He is a co-founder of Microsoft, along with his late childhood friend Paul Allen.',
    bioSpeaker: ' is an American business magnate, software developer, investor, author, and philanthropist.',
  },
  {
    speakerImage: './image/warren-buffett.jpg',
    alt: 'Speaker Warren Buffett',
    speakerName: 'Warren Edward Buffett',
    who: ' He is currently the chairman and CEO of Berkshire Hathaway. ',
    bioSpeaker: ' He is an American business magnate, investor, and philanthropist',
  },
  {
    speakerImage: './image/mark-zuckerberg.jpg',
    alt: 'Speaker Mark Zuckerberg',
    speakerName: 'Mark Elliot Zuckerberg',
    who: 'He is the chairman, chief executive officer of the social media website Facebook and its parent company Meta Platforms',
    bioSpeaker: ' He is an American media magnate, internet entrepreneur, and philanthropist.',
  },
  {
    speakerImage: './image/richard-branson.jpg',
    alt: 'Speaker Richard Branson',
    speakerName: 'Sir Richard Charles Nicholas Branson',
    who: ' He founded the Virgin Group, which today controls more than 400 companies in various fields',
    bioSpeaker: 'He is a British billionaire entrepreneur and business magnate.',
  },

];

for (let i = 0; i < speaker.length; i += 1) {
  const cardSpeaker = document.createElement('div');
  cardSpeaker.classList.add('card-speaker', `card-speaker-${i}`);
  const photo = document.createElement('div');
  photo.classList.add('photo');
  const imag = document.createElement('img');
  imag.classList.add('photo-speaker');
  imag.src = speaker[i].speakerImage;
  imag.alt = speaker[i].alt;
  const desSpeaker = document.createElement('div');
  desSpeaker.classList.add('des-speaker');
  const speakerName = document.createElement('h4');
  speakerName.classList.add('name-speaker');
  speakerName.textContent = speaker[i].speakerName;
  const workSpeaker = document.createElement('p');
  workSpeaker.classList.add('work-speaker');
  workSpeaker.textContent = speaker[i].who;
  const bioSpeaker = document.createElement('p');
  bioSpeaker.classList.add('bio-speaker');
  bioSpeaker.textContent = speaker[i].bioSpeaker;
  const cardContainer = document.querySelector('.card-speaker-container');
  cardContainer.appendChild(cardSpeaker);
  cardSpeaker.appendChild(photo);
  photo.appendChild(imag);
  // cardContainer.appendChild(imag);
  cardSpeaker.appendChild(desSpeaker);
  desSpeaker.appendChild(speakerName);
  desSpeaker.appendChild(workSpeaker);
  desSpeaker.appendChild(bioSpeaker);
}

// Show more button
const showMore = document.querySelector('.show-more');

showMore.addEventListener('click', () => {
  for (let i = 2; i < speaker.length; i += 1) {
    const cardSpeaker = document.querySelector(`.card-speaker-${i}`);

    if (cardSpeaker.classList.contains('active')) {
      cardSpeaker.classList.remove('active');
      showMore.textContent = 'MORE';
    } else {
      cardSpeaker.classList.add('active');
      showMore.textContent = 'LESS';
    }
  }
});
