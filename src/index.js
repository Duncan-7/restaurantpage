import {createFixtures} from './modules/navigation.js';
import {createHomeTab} from './modules/home.js';
import {createMenuTab} from './modules/menu.js';
import {createContactTab} from './modules/contact.js';

createFixtures();

const homeTabLink = document.querySelector('#home');
homeTabLink.addEventListener('mouseover', () => homeTabLink.style.cursor = 'pointer');
homeTabLink.addEventListener('click', () => {
  highlightTab(homeTabLink);
  removeCurrentTab();
  createHomeTab();
})

const menuTabLink = document.querySelector('#menu');
menuTabLink.addEventListener('mouseover', () => menuTabLink.style.cursor = 'pointer');
menuTabLink.addEventListener('click', () => {
  highlightTab(menuTabLink);
  removeCurrentTab();
  createMenuTab();
})

const contactTabLink = document.querySelector('#contact');
contactTabLink.addEventListener('mouseover', () => contactTabLink.style.cursor = 'pointer');
contactTabLink.addEventListener('click', () => {
  highlightTab(contactTabLink);
  removeCurrentTab();
  createContactTab();
})

function removeCurrentTab(){
  let currentTab = document.querySelector('.tab-body');
  currentTab.parentNode.removeChild(currentTab);
}

function highlightTab(tab){
  homeTabLink.setAttribute('class', 'link');
  menuTabLink.setAttribute('class', 'link');
  contactTabLink.setAttribute('class', 'link');
  tab.setAttribute('class', 'link selected');
}

createHomeTab();
highlightTab(homeTabLink);
console.log("test")

