const speakers = [
  {
    photo: './images/speaker1.png',
    name: 'Yochai Benkler',
    ocupation: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },  {
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

console.log(speakers);

const speakersContainer = document.querySelector('.speakers');

function card(speaker) {
  return `
    <div class="speaker-container">
      <img src="${speaker.photo}" alt="${speaker.name}" class="speaker-pic">
      <div class="text-speaker"><h4 class="speaker-name">${speaker.name}</h4>
      <div class="speaker-line"></div>
      <p class="speaker-ocupation">${speaker.ocupation || ''}</p>
      <p class="speaker-description">${speaker.description}</p>
      </div>
    </div>
  `;
}

speakers.forEach((speaker) => {
  const tarjetaHTML = card(speaker);
  speakersContainer.innerHTML += tarjetaHTML;
});