import 'core-js/stable';
import 'regenerator-runtime/runtime';

/** pravimo objekte u koje smestamo podatke */
const paris = {
  teamName: 'Paris',
  country: 'France',
  group: 'A',
  points: 11,
  position: '2nd',
  logo: 'paris.png',
  otherTeams: ['Man. City', 'Leipzig', 'CLub Brugge'],
};

const manCity = {
  teamName: 'Man. City',
  country: 'England',
  group: 'A',
  points: 12,
  position: '1st',
  logo: 'manCity.png',
  otherTeams: ['Paris', 'Leipzig', 'CLub Brugge'],
};

const liverpool = {
  teamName: 'Liverpool',
  country: 'England',
  group: 'B',
  points: 18,
  position: '1st',
  logo: 'liverpool.png',
  otherTeams: ['Atletico', 'Porto', 'Milan'],
};

const atletico = {
  teamName: 'Atletico',
  country: 'Spain',
  group: 'B',
  points: 7,
  position: '2nd',
  logo: 'atletico.png',
  otherTeams: ['Liverpool', 'Porto', 'Milan'],
};

const ajax = {
  teamName: 'Ajax',
  country: 'Netherlands',
  group: 'C',
  points: 18,
  position: '1st',
  logo: 'ajax.png',
  otherTeams: ['Sporting CP', 'Dortmund', 'Besiktas'],
};

const sporting = {
  teamName: 'Sporting CP',
  country: 'Portugal',
  group: 'C',
  points: 9,
  position: '2nd',
  logo: 'sporting.png',
  otherTeams: ['Ajax', 'Dortmund', 'Besiktas'],
};

const realMadrid = {
  teamName: 'Real Madrid',
  country: 'Spain',
  group: 'D',
  points: 15,
  position: '1st',
  logo: 'realMadrid.png',
  otherTeams: ['Inter', 'Sheriff', 'Shakhtar Donetsk'],
};

const inter = {
  teamName: 'Inter',
  country: 'Italy',
  group: 'D',
  points: 10,
  position: '2nd',
  logo: 'inter.png',
  otherTeams: ['Real Madrid', 'Sheriff', 'Shakhtar Donetsk'],
};

const bayern = {
  teamName: 'Bayern',
  country: 'Germany',
  group: 'E',
  points: 18,
  position: '1st',
  logo: 'bayern.png',
  otherTeams: ['Benfica', 'Barcelona', 'Dynamo Kyiv'],
};

const benfica = {
  teamName: 'Benfica',
  country: 'Portugal',
  group: 'E',
  points: 8,
  position: '2nd',
  logo: 'benfica.png',
  otherTeams: ['Bayern', 'Barcelona', 'Dynamo Kyiv'],
};

const manUnited = {
  teamName: 'Man. United',
  country: 'England',
  group: 'F',
  points: 11,
  position: '1st',
  logo: 'manUnited.png',
  otherTeams: ['Villareal', 'Atalanta', 'Young Boys'],
};

const villareal = {
  teamName: 'Villareal',
  country: 'Spain',
  group: 'F',
  points: 10,
  position: '2nd',
  logo: 'villareal.png',
  otherTeams: ['Man. United', 'Atalanta', 'Young Boys'],
};

const losc = {
  teamName: 'LOSC',
  country: 'France',
  group: 'G',
  points: 11,
  position: '1st',
  logo: 'losc.png',
  otherTeams: ['Salzburg', 'Sevilla', 'Wolfsburg'],
};

const salzburg = {
  teamName: 'Salzburg',
  country: 'Austria',
  group: 'G',
  points: 10,
  position: '2nd',
  logo: 'salzburg.png',
  otherTeams: ['LOSC', 'Sevilla', 'Wolfsburg'],
};

const juventus = {
  teamName: 'Juventus',
  country: 'Italy',
  group: 'H',
  points: 15,
  position: '1st',
  logo: 'juventus.png',
  otherTeams: ['Chelsea', 'Zenit', 'Malmo'],
};

const chelsea = {
  teamName: 'Chelsea',
  country: 'England',
  group: 'H',
  points: 13,
  position: '2nd',
  logo: 'chelsea.png',
  otherTeams: ['Juventus', 'Zenit', 'Malmo'],
};

/** kreiramo niz sa svim objektima */
const teams = [
  manCity,
  liverpool,
  ajax,
  realMadrid,
  bayern,
  manUnited,
  losc,
  juventus,
  paris,
  atletico,
  sporting,
  inter,
  benfica,
  villareal,
  salzburg,
  chelsea,
];

/** glabni niz teams delimo na 2 niza pomocu filter metode */
const teams1st = teams.filter(team => team.position === '1st');
const teams2nd = teams.filter(team => team.position === '2nd');

/** pravimo kopiju 2 niza, kako ne bi menjali originalne podatke */
let teams1stCopy = [...teams1st];
let teams2ndCopy = [...teams2nd];

/** selektujemo elemente sa html-a */
const leftSection = document.querySelector('#left');
const rightSection = document.querySelector('#right');
const btnPick = document.querySelector('.btn-pick');
const btnRestart = document.querySelector('.btn-new');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelector('.show-modal');

/** funkcija za otvaranje modala */
const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

/** funkcija za zatvaranje modala */
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

/** klikom na dugme poziva se funkcija za otvaranje modala */
btnOpenModal.addEventListener('click', openModal);

/** klikom na dugme poziva se funkcija za zatvaranje modala */
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

/** klikom na dugme Esc zatvara se modal */
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/** funkcija za kreiranje tima u hederu */
const renderTeams = (team, className) => {
  const html = `
    <div class="team-pick">
      <p class="group-name">${team.group}</p>
      <img src="img/${team.logo}" class="team-logo" />
      <p class="team-name">${team.teamName}</p>
      <p class="country-name">(${team.country})</p>
    </div>
  `;

  document.querySelector(`${className}`).insertAdjacentHTML('beforeend', html);
};

/** funkcija koja poziva funkciju renderTeams i kreira sve timove u hederu */
const getTeams = (teams, className) => {
  document.querySelector(`${className}`).innerHTML = '';
  teams.forEach(team => renderTeams(team, className));
};

/** kreiranje prvih i drugih timova u hederu */
getTeams(teams1stCopy, '.first-teams');
getTeams(teams2ndCopy, '.second-teams');

/** funkcija za generisanje datuma */
const generateDate = date => {
  const dayName = date.toLocaleString('en-us', { weekday: 'long' });
  const day = date.getDate();
  const month = date.toLocaleString('en-us', { month: 'long' });
  const year = date.getFullYear();

  return `${dayName} ${day} ${month} ${year}`;
};

/** funkcija koja kreira kostur na pocetku i prazan tim */
const initRender = teamNumber => {
  const html = `
    <div class="fixture">
      <div class="team home-team" data-team="team-${teamNumber}">
        <p class="team-name-home">Team ${teamNumber}</p>
        <img src="img/random.png" alt="" class="club-image" />
      </div>
      <p class="versus">vs</p>
      <div class="team away-team" data-team="team-${teamNumber + 1}">
        <img src="img/random.png" alt="" class="club-image" />
        <p class="team-name-away">Team ${teamNumber + 1}</p>
      </div>
    </div>
  `;

  const date1 = new Date(2022, 1, 15);
  const date2 = new Date(2022, 1, 16);
  const date3 = new Date(2022, 1, 22);
  const date4 = new Date(2022, 1, 23);

  switch (+teamNumber) {
    case 1:
      leftSection.insertAdjacentHTML(
        'beforeend',
        `<h2>${generateDate(date1)}</h2>`
      );
      break;
    case 5:
      leftSection.insertAdjacentHTML(
        'beforeend',
        `<h2>${generateDate(date2)}</h2>`
      );
      break;
    case 9:
      rightSection.insertAdjacentHTML(
        'beforeend',
        `<h2>${generateDate(date3)}</h2>`
      );
      break;
    case 13:
      rightSection.insertAdjacentHTML(
        'beforeend',
        `<h2>${generateDate(date4)}</h2>`
      );
      break;

    default:
      break;
  }

  teamNumber < teams.length / 2
    ? leftSection.insertAdjacentHTML('beforeend', html)
    : rightSection.insertAdjacentHTML('beforeend', html);
};

/** kreiranje kostura i praznih timova svih 16 */
const init = () => {
  document.querySelector('.first-teams').classList.add('bg-teams');
  let teamNumber = 1;

  for (let i = 0; i < teams.length / 2; i++) {
    initRender(teamNumber);
    teamNumber += 2;
  }
};

init();

/** Pravimo brojac teamNo gde ce parni brojevi biti prvi timovi i ici ce levo u kostur,
 * a neparni brojevi ce biti drugi timovi i ici ce desno u kostur.
 * Pravimo possible2ndTeams - to ce biti niz u koji cemo ubaciti moguce protivnike od timova
 * koji su bili drugi u grupi, jer ne smeju se pokopiti timovi koji su vec igrali u istoj grupi
 * i koji su iz iste zemlje */
let teamNo = 0;
let possible2ndTeams;

/** klikom na dugme bira se tim */
btnPick.addEventListener('click', () => {
  // brisemo pozadinu i za prve i za druge timove
  document.querySelector('.first-teams').classList.remove('bg-teams');
  document.querySelector('.second-teams').classList.remove('bg-teams');

  // biramo random tim od timova koji su bili prvi u grupi
  if (teams1stCopy.length > 0 && teamNo % 2 === 0) {
    // biramo random tim od prvih timova
    let random1stTeam = Math.trunc(Math.random() * teams1stCopy.length);
    let picked1stTeam = teams1stCopy[random1stTeam];

    // proveravamo da li neki tim ima moguceg samo jednog protivnika (ili 2)
    // i njemu dajemo prednost da bude izvucen kako ne bi pukla aplikacija
    for (let prvi = 0; prvi < teams1stCopy.length; prvi++) {
      let counter = 0;

      for (let drugi = 0; drugi < teams2ndCopy.length; drugi++) {
        if (
          teams2ndCopy[drugi].country !== teams1stCopy[prvi].country &&
          teams2ndCopy[drugi].group !== teams1stCopy[prvi].group
        ) {
          counter++;
        }
      }

      if (counter === 1) {
        random1stTeam = prvi;
        picked1stTeam = teams1stCopy[prvi];
        break;
      }

      if (counter === 2) {
        random1stTeam = prvi;
        picked1stTeam = teams1stCopy[prvi];
      }
    }

    // za izabrani prvi tim pravimo niz od mogucih protivnika od drugih timova
    possible2ndTeams = teams2ndCopy.filter(
      team =>
        team.group !== picked1stTeam.group &&
        team.country !== picked1stTeam.country
    );

    // pravimo niz od timova koji ne mogu da budu protivnici odabranom prvom timu
    const other2ndTeams = teams2ndCopy.filter(
      el => !possible2ndTeams.includes(el)
    );

    // drugi timovi koji ne mogu da budu protivnici bojimo im grb u sivo i tekst u crveno
    document.querySelectorAll('.second-teams .team-pick').forEach(x => {
      const pieces = x.querySelector('.team-logo').src.split('/');
      const last = pieces[pieces.length - 1];
      other2ndTeams.forEach(y => {
        if (last === y.logo) {
          x.querySelector('.team-logo').style.filter = 'grayscale(100%)';
          x.querySelector('.team-name').style.backgroundColor = '#f74a4a';
        }
      });
    });

    // u kosturu menjamo elemente sa odabranim prvim timom
    const element = document.querySelectorAll('.team')[teamNo];
    element.classList.add('bgr-color');
    element.querySelector('p').textContent = picked1stTeam.teamName;
    element.querySelector('img').src = `img/${picked1stTeam.logo}`;

    // izbacujemo odabrani prvi tim iz niza i prikazujemo nove podatke
    teams1stCopy.splice(random1stTeam, 1);
    getTeams(teams1stCopy, '.first-teams');

    // stavljamo belu pozadinu za druge timove, jer se na ovaj klik prvi tim vec odabere
    document.querySelector('.second-teams').classList.add('bg-teams');
  }

  // biramo random tim od timova koji su bili drugi u grupi
  if (teams2ndCopy.length > 0 && teamNo % 2 !== 0) {
    // biramo random tim od drugih timova u grupi
    let random2ndTeam = Math.trunc(Math.random() * possible2ndTeams.length);
    let picked2ndTeam = possible2ndTeams[random2ndTeam];

    // trazimo tim koji treba da se obrise
    const teamToRemove = teams2ndCopy.indexOf(picked2ndTeam);

    // u kosturu menjamo elemente sa odabranim drugim timom
    const element = document.querySelectorAll('.team')[teamNo];
    element.classList.add('bgr-color');
    element.querySelector('p').textContent = picked2ndTeam.teamName;
    element.querySelector('img').src = `img/${picked2ndTeam.logo}`;

    // izbacujemo odabrani drugi tim iz niza i prikazujemo nove podatke
    teams2ndCopy.splice(teamToRemove, 1);
    getTeams(teams2ndCopy, '.second-teams');

    // stavljamo belu pozadinu za prve timove, jer se na ovaj klik drugi tim vec odabere
    document.querySelector('.first-teams').classList.add('bg-teams');
  }

  // povecavamo brojac nakon svakog klika na dugme
  teamNo++;

  // kada su svi timovi odabrani menjamo pozadinu, povecavamo grb tima...
  if (teamNo === 16) {
    document.querySelector('main').style.backgroundColor =
      'rgba(255, 255, 255, 0.65)';
    document
      .querySelectorAll('.teams-group')
      .forEach(h2 => (h2.style.display = 'none'));

    document
      .querySelectorAll('.club-image')
      .forEach(img => (img.style.width = '90px'));

    document.querySelector('.first-teams').classList.remove('bg-teams');
    document.querySelector('.second-teams').classList.remove('bg-teams');
  }
});

/** klikom na dugme restart vracamo stranicu na pocetno stanje */
btnRestart.addEventListener('click', function () {
  leftSection.innerHTML = '';
  rightSection.innerHTML = '';

  const htmlLeft = `
    <h2 class="teams-group">1st in group</h2>
    <div class="first-teams"></div>
  `;

  const htmlRight = `
    <h2 class="teams-group">2nd in group</h2>
    <div class="second-teams"></div>
  `;

  leftSection.insertAdjacentHTML('beforeend', htmlLeft);
  rightSection.insertAdjacentHTML('beforeend', htmlRight);

  document
    .querySelectorAll('.teams-group')
    .forEach(h2 => (h2.style.display = 'inherit'));

  init();

  document.querySelector('main').style.backgroundColor =
    'rgba(255, 255, 255, 0.35)';

  teamNo = 0;

  teams1stCopy = [...teams1st];
  teams2ndCopy = [...teams2nd];

  getTeams(teams1stCopy, '.first-teams');
  getTeams(teams2ndCopy, '.second-teams');
});
