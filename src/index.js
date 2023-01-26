import './style.css';
import img from './icons8-github.svg';
import menuIcon from './foodIcon.svg';
import mainImg from './food.jpg';


const content = document.getElementById("content");


// creating Nav Bar
const navBar = document.createElement('div');
navBar.classList.add("navBar");
content.appendChild(navBar);

const btn1 = document.createElement('button');
btn1.classList.add("home");
btn1.textContent = "Home";
navBar.appendChild(btn1);
const btn2 = document.createElement('button');
btn2.classList.add("share");
btn2.textContent = "Share";
navBar.appendChild(btn2);



// Creating Side bar
const sideBar = document.createElement('div');
sideBar.classList.add("sideBar");
content.appendChild(sideBar);

// Creating Main bar
const mainBar = document.createElement('div');
mainBar.classList.add("mainBar");
content.appendChild(mainBar);

const first = document.createElement('div');
first.classList.add('first');
mainBar.appendChild(first);
const mainContent = document.createElement('div');
mainContent.classList.add('mainContent');
first.appendChild(mainContent);
const contentHeading = document.createElement('h1');
contentHeading.classList.add('contentHeading');
contentHeading.textContent = "CHIPOTLE PIZZA BACON ANGUS";
mainContent.appendChild(contentHeading);
const pTag = document.createElement('p');
pTag.classList.add('pTag');
pTag.textContent = "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven. A small pizza is sometimes called a pizzetta."
mainContent.appendChild(pTag);


const second = document.createElement('div');
second.classList.add('second');
mainBar.appendChild(second);
const imgMain = document.createElement('img');
imgMain.id = "mainImg";
imgMain.src = mainImg;
second.appendChild(imgMain);


// Creating Footer
const foo = document.createElement('footer');
foo.classList.add("foo");
content.appendChild(foo);

const fooText = document.createElement('p');
fooText.textContent = "Copyright © 2023 Harsha";
foo.appendChild(fooText);
const fooGit = document.createElement('a');
fooGit.href="https://github.com/Harshahari1207";

foo.appendChild(fooGit);
const fooImg = document.createElement('img');
fooImg.src = img;
fooGit.appendChild(fooImg);



// Creating Menu
const menu = document.createElement('div');
menu.classList.add('menu');
content.appendChild(menu);

const menuLogo = document.createElement('div');
menuLogo.classList.add('menuLogo');
menu.appendChild(menuLogo);
const menuImg = document.createElement('img');
menuImg.id = "foodIcon";
menuImg.src = menuIcon;
menuLogo.appendChild(menuImg);

const menuList = document.createElement('div');
menuList.classList.add('menuList');
menu.appendChild(menuList);
const list1 = document.createElement('h3');
list1.classList.add('l1');
list1.textContent = "Neapolitan Pizza."
menuList.appendChild(list1);
const list2 = document.createElement('h3');
list2.classList.add('l2');
list2.textContent = "Chicago Pizza"
menuList.appendChild(list2);
const list3 = document.createElement('h3');
list3.classList.add('l3');
list3.textContent = "New York-Style Pizza"
menuList.appendChild(list3);
const list4 = document.createElement('h3');
list4.classList.add('l4');
list4.textContent = "Sicilian Pizza"
menuList.appendChild(list4);
const list5 = document.createElement('h3');
list5.classList.add('l5');
list5.textContent = "Greek Pizza"
menuList.appendChild(list5);
const list6 = document.createElement('h3');
list6.classList.add('l6');
list6.textContent = "California Pizza"
menuList.appendChild(list6);
const list7 = document.createElement('h3');
list7.classList.add('l7');
list7.textContent = "Detroit Pizza"
menuList.appendChild(list7);
const list8 = document.createElement('h3');
list8.classList.add('l8');
list8.textContent = "St. Louis Pizza"
menuList.appendChild(list8);
const list9 = document.createElement('h3');
list9.classList.add('l9');
list9.textContent = "Cheese Pizza"
menuList.appendChild(list9);
const list10 = document.createElement('h3');
list10.classList.add('l10');
list10.textContent = "Meat Pizza"
menuList.appendChild(list10);
