//menu animation
const hamburger = document.querySelector('.menu-icon');
const navMenu = document.querySelector('.menu-container');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.list').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

// Create speaker section dynamically

const speaker = [
    {
      speakerImg: './image/Elon-musk.jpg',
      alt: 'Speaker Elon Musk',
      speakerName: 'Elon Reeve Musk',
      who: 'He is the founder, CEO, and Chief Engineer at SpaceX; early-stage investor, CEO, and Product Architect of Tesla, Inc.; founder of The Boring Company; and co-founder of Neuralink and OpenAI',
      bio: 'Musk was born to a Canadian mother and South African father, and raised in Pretoria, South Africa.',
    },
    {
        speakerImg: './image/jeff-bezos.jpg',
      alt: 'Speaker Jeff Bezos',
      speakerName: 'Jeffrey Preston Bezos',
      who: 'He is the founder and executive chairman of Amazon.',
      bio: 'He is an American entrepreneur, media proprietor, investor, computer engineer, and commercial astronaut',
    },
    {
        speakerImg: './image/bill-gate.jpg',
      alt: 'Speaker Bill Gates',
      speakerName: 'William Henry Gates III',
      who: ' He is a co-founder of Microsoft, along with his late childhood friend Paul Allen.',
      bio: ' is an American business magnate, software developer, investor, author, and philanthropist.',
    },
    {
      speakerImg: './image/warren-buffett.jpg',
      alt: 'Speaker Warren Buffett',
      speakerName: 'Warren Edward Buffett',
      who: ' He is currently the chairman and CEO of Berkshire Hathaway. ',
      bio: ' He is an American business magnate, investor, and philanthropist',
    },
    {
      speakerImg: './image/mark-zuckerberg.jpg',
      alt: 'Speaker Mark Zuckerberg',
      speakerName: 'Mark Elliot Zuckerberg',
      who: 'He is the chairman, chief executive officer of the social media website Facebook and its parent company Meta Platforms',
      bio: ' He is an American media magnate, internet entrepreneur, and philanthropist.',
    },
    {
      speakerImg: './image/richard-branson.jpg',
      alt: 'Speaker Richard Branson',
      speakerName: 'Sir Richard Charles Nicholas Branson',
      who: ' He founded the Virgin Group, which today controls more than 400 companies in various fields',
      bio: 'He is a British billionaire entrepreneur and business magnate.',
    },
  
  ];

  for (let i = 0; i < speaker.length; i += 1) {
    const cardSpeaker = document.createElement('div');
    cardSpeaker.classList.add('card-speaker', `card-speaker-${i}`);
    const photo = document.createElement('div');
    photo.classList.add('photo');
    const imag = document.createElement('img');
    imag.classList.add('photo-speaker');
    imag.src = speaker[i].speakerImg;
    imag.alt = speaker[i].alt;
    const desSpeaker = document.createElement('div');
    desSpeaker.classList.add('des-speaker');
    const speakerName = document.createElement('h4');
    speakerName.classList.add('name-speaker');
    speakerName.textContent = speaker[i].speakerName;
    const who = document.createElement('p');
    who.classList.add('work-speaker');
    who.textContent = speaker[i].who;
    const bio = document.createElement('p');
    bio.classList.add('bio-speaker');
    bio.textContent = speaker[i].bio;
    const cardContainer = document.querySelector('.card-speaker-container');
    cardContainer.appendChild(cardSpeaker);
    cardSpeaker.appendChild(photo);
    photo.appendChild(imag);

    // cardContainer.appendChild(img);
    cardSpeaker.appendChild(desSpeaker);
    desSpeaker.appendChild(speakerName);
    desSpeaker.appendChild(who);
    desSpeaker.appendChild(bio);
  } 

  // Create show how more button
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
