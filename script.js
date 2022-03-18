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
      imagen: './image/Elon-musk.jpg',
      alt: 'Speaker Elon Musk',
      speakerName: 'Elon Reeve Musk',
      workSpeaker: 'He is the founder, CEO, and Chief Engineer at SpaceX; early-stage investor, CEO, and Product Architect of Tesla, Inc.; founder of The Boring Company; and co-founder of Neuralink and OpenAI',
      bioSpeaker: 'Musk was born to a Canadian mother and South African father, and raised in Pretoria, South Africa.',
    },
    {
      imagen: './image/jeff-bezos.jpg',
      alt: 'Speaker Jeff Bezos',
      speakerName: 'Jeffrey Preston Bezos',
      workSpeaker: 'He is the founder and executive chairman of Amazon.',
      bioSpeaker: 'He is an American entrepreneur, media proprietor, investor, computer engineer, and commercial astronaut',
    },
    {
      imagen: './image/bill-gate.jpg',
      alt: 'Speaker Bill Gates',
      speakerName: 'William Henry Gates III',
      workSpeaker: ' He is a co-founder of Microsoft, along with his late childhood friend Paul Allen.',
      bioSpeaker: ' is an American business magnate, software developer, investor, author, and philanthropist.',
    },
    {
      imagen: './image/warren-buffett.jpg',
      alt: 'Speaker Warren Buffett',
      speakerName: 'Warren Edward Buffett',
      workSpeaker: ' He is currently the chairman and CEO of Berkshire Hathaway. ',
      bioSpeaker: ' He is an American business magnate, investor, and philanthropist',
    },
    {
      imagen: './image/mark-zuckerberg.jpg',
      alt: 'Speaker Mark Zuckerberg',
      speakerName: 'Mark Elliot Zuckerberg',
      workSpeaker: 'He is the chairman, chief executive officer of the social media website Facebook and its parent company Meta Platforms',
      bioSpeaker: ' He is an American media magnate, internet entrepreneur, and philanthropist.',
    },
    {
      imagen: './image/richard-branson.jpg',
      alt: 'Speaker Richard Branson',
      speakerName: 'Sir Richard Charles Nicholas Branson',
      workSpeaker: ' He founded the Virgin Group, which today controls more than 400 companies in various fields',
      bioSpeaker: 'He is a British billionaire entrepreneur and business magnate.',
    },
  
  ];

  
  