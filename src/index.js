import './style.css';
import {createTitle, createDiv} from './content.js';
import {description, hours} from './home.js';
import {menu, drinks, dishes, desserts} from './menu.js';
import {contacts} from './contact.js';
import {footer} from './footer.js';
import Drink1 from './Drink1.jpg';
import Drink2 from './Drink2.jpg';
import Dish1 from './Dish1.jpg';
import Dish2 from './Dish2.jpg';
import Dish3 from './Dish3.jpg';
import Dish4 from './Dish4.jpg';
import Dessert1 from './Dessert3.jpg';
import Dessert2 from './Dessert2.jpg';

function buttons() {
  const btns = document.querySelectorAll('button');
  btns.forEach((btn) => {
    btn.classList.add('headerBtn');
  })
}

function image(type, number, picture, name) {
  let position = `.${type}:nth-child(${number})`;
  const element = document.querySelector(position);
  const myIcon = new Image();
  myIcon.src = picture;
  const creator = document.createElement('p')
  creator.textContent = name;
  element.prepend(myIcon, creator);
}

function menuDescription(type, drinkNumber, number, details){
  let position = `.${type}:nth-child(${drinkNumber}) > .description > p:nth-child(${number})`;
  const element = document.querySelector(position);
  element.textContent = details;
}

buttons();
document.querySelector('header').prepend(createTitle());
document.querySelector('#content').appendChild(createDiv('homeContent'));
document.querySelector('.content').append(description(), hours());
document.querySelector('footer').append(footer());

document.querySelector('button:nth-child(1)').addEventListener('click', () =>{
  const mainContent = document.querySelector('#content');
  const content = document.querySelector('.content');
  document.querySelector('footer').removeChild(document.querySelector('footer > p'));
  document.querySelector('footer').append(footer());
  mainContent.removeChild(content);
  document.querySelector('#content').appendChild(createDiv('homeContent'));
  document.querySelector('.content').append(description(), hours());
});

document.querySelector('button:nth-child(2)').addEventListener('click', () =>{
  const mainContent = document.querySelector('#content');
  const content = document.querySelector('.content');
  document.querySelector('footer').style.removeProperty('bottom');
  mainContent.removeChild(content);
  document.querySelector('#content').appendChild(createDiv());
  document.querySelector('.content').append(menu('Menu', 'menu'),menu('Drinks'), drinks(),menu('Main Dishes'), dishes(),menu('Desserts'), desserts());

  // drinks
  image('drink', 1, Drink1, 'Created by: Jcomp on Freepik');
  menuDescription('drink',1,1,'Tomato smoothie');
  menuDescription('drink',1,2,'A smoothie make out of the most organic and fresh tomatoes there are.');
  image('drink', 2, Drink2, 'Created by: KamranAydinov on Freepik');
  menuDescription('drink',2,1,'Tomato tea');
  menuDescription('drink',2,2,'The most calming and soothing tomato tea. Become one with the vines.');

  //dishes
  image('dish', 1, Dish1, 'Created by: mdjaff on Freepik');
  menuDescription('dish', 1,1, 'Small Crispy Fries');
  menuDescription('dish', 1,2, 'A small portion of the most delicious fries.Comes with ketchup and mayo.');

  image('dish', 2, Dish2, 'Created by: KamranAydinov on Freepik');
  menuDescription('dish', 2,1, 'Bucket Fries');
  menuDescription('dish', 2,2, 'A whole bucket of fries just for you! Includes multiple sauces and seasonings.');

  image('dish', 3, Dish3, 'Created by: KamranAydinov on Freepik');
  menuDescription('dish', 3,1, 'Fries and Chicken Strips');
  menuDescription('dish', 3,2, 'A small portion of fries and crispy chicken strips made from our basement chickens. Comes with ketchup and garlic mayo.');

  image('dish', 4, Dish4, 'Created by: Jcomp on Freepik');
  menuDescription('dish', 4,1, 'Large Crispy Fries');
  menuDescription('dish', 4,2, 'A large portion of the most delicious fries you will ever eat. Comes with ketchup and mayo.');

  // desserts

  image('dessert', 1, Dessert1, 'Created by: KamranAydinov on Freepik');
  menuDescription('dessert', 1,1, 'Sweet potato cookies');
  menuDescription('dessert', 1,2, 'Sweet potato cookies with orange. These are definitely made out of sweet potatoes.');

  image('dessert', 2, Dessert2, 'Created by: KamranAydinov on Freepik');
  menuDescription('dessert', 2,1, 'Sweet potato cupcakes');
  menuDescription('dessert', 2,2, 'Be ready to eat the most delicious cupcakes every made out of the most delicious sweet potatoes.');
});

document.querySelector('button:nth-child(3)').addEventListener('click', () =>{
  const mainContent = document.querySelector('#content');
  const content = document.querySelector('.content');
  document.querySelector('footer').removeChild(document.querySelector('footer > p'));
  document.querySelector('footer').append(footer());
  mainContent.removeChild(content);
  document.querySelector('#content').appendChild(createDiv());
  document.querySelector('.content').append(menu('Contacts', 'contact'), contacts());
});

