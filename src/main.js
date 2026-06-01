import './style.css'
import {Nav} from './compenents/nav.js'
import { footer } from './compenents/footer.js';
import { renderCard } from './compenents/rendercard.js';
import users from './data/users.json';

const app = document.getElementById('app');

document.querySelector('#app').innerHTML = `
  ${Nav()}
  <h1>Liste des contacts</h1>
  <main>
    <div id="users-cards"></div>
  </main>
  ${footer()}
`;

app.innerHTML = `
  ${Nav()}
  <div id="cards-container"></div>
  ${footer()}
`;

document.getElementById('cards-container').innerHTML = users.map(user => renderCard(user)).join('');