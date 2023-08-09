const nav = document.querySelector('#nav');
const open = document.querySelector('#open');
const close = document.querySelector('#close');

open.addEventListener('click', () => {
  nav.classList.add('observable');
});

close.addEventListener('click', () => {
  nav.classList.remove('observable');
});

const speakers = [
  {
    photo: './images/speaker1.png',
    name: 'Yochai Benkler',
    ocupation: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    photo: './images/speaker3.png',
    name: 'SohYeong Noh',
    ocupation: 'Director of Art Centre Nabi and a board member of CC Korea',
    description: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012, he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
  },
  {
    photo: './images/speaker2.png',
    name: 'Kilnam Chon',
    description: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
  },

  {
    photo: './images/speaker4.png',
    name: 'Julia Leda',
    ocupation: 'President of Young Pirates of Europe',
    description: 'European integration, political democracy and participation of youth through online as her major concern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July',
  },
  {
    photo: './images/speaker5.png',
    name: 'Lila Tretikov',
    ocupation: 'Executive Director of the Wikimedia Foundation',
    description: 'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a billion people around the world every month.',
  },
  {
    photo: './images/speaker6.png',
    name: 'Ryan Merkley',
    ocupation: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
    description: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source movement',
  },
];

const speakersContainer = document.querySelector('.speakers');
const moreBtn = document.getElementById('moreBtn');
const initialVisibleSpeakers = 2;
let visibleSpeakers = initialVisibleSpeakers;

function card(speaker) {
  return `
    <div class="speaker-container">
      <img src="${speaker.photo}" alt="${speaker.name}" class="speaker-pic">
      <div class="text-speaker">
        <h4 class="speaker-name">${speaker.name}</h4>
        <p class="speaker-ocupation">${speaker.ocupation || ''}</p>
        <div class="speaker-line"></div>
        <p class="speaker-description">${speaker.description}</p>
      </div>
    </div>
  `;
}

function callingSpeakers() {
  speakersContainer.innerHTML = '';

  for (let i = 0; i < visibleSpeakers; i += 1) {
    const cardHTML = card(speakers[i]);
    speakersContainer.innerHTML += cardHTML;
  }

  if (visibleSpeakers < speakers.length) {
    moreBtn.style.display = 'block';
  } else {
    moreBtn.style.display = 'none';
  }
}

function showSpeakers() {
  visibleSpeakers = speakers.length;
  callingSpeakers();
  moreBtn.style.display = 'none';
}

function visibility() {
  if (window.innerWidth <= 768) {
    visibleSpeakers = initialVisibleSpeakers;
  } else {
    visibleSpeakers = speakers.length;
  }
  callingSpeakers();
}

moreBtn.addEventListener('click', showSpeakers);
window.addEventListener('resize', visibility);

visibility();