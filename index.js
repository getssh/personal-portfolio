const dropMob = document.querySelector('.tool-bar-mob');
const navDeskTop = document.querySelector('.tool-bar-desk');
const humBurger = document.querySelector('.test');
const closeBtn = document.querySelector('.close');
const navItems = document.querySelectorAll('.nav-item');

humBurger.addEventListener('click', () => {
  dropMob.style.display = 'block';
  navDeskTop.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
  dropMob.style.display = 'none';
  navDeskTop.style.display = 'flex';
});

for (let i = 0; i < navItems.length; i += 1) {
  navItems[i].addEventListener('click', () => {
    dropMob.style.display = 'none';
    navDeskTop.style.display = 'flex';
  });
}

const projects = [{
  featured: true,
  name: "Multi-Post Stories",
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  image: "./images/ImgPlaceholder.png",
  technologies: [
    "css", "html", "bootstrap", "Ruby"
  ],
  liveLink: "",
  sourceLink: ""
},
{
  featured: false,
  name: "Profesional Art Printing Data",
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  image: "./images/ImgPlaceholder.png",
  technologies: [
    "html", "bootstrap", "Ruby"
  ],
  liveLink: "",
  sourceLink: ""
},
{
  featured: false,
  name: "Data Dashboard Healthcare",
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  image: "./images/ImgPlaceholder.png",
  technologies: [
    "html", "bootstrap", "Ruby"
  ],
  liveLink: "",
  sourceLink: ""
},
{
  featured: false,
  name: "Data Dashboard Healthcare",
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  image: "./images/ImgPlaceholder.png",
  technologies: [
    "html", "bootstrap", "Ruby"
  ],
  liveLink: "",
  sourceLink: ""
},
{
  featured: false,
  name: "Data Dashboard Healthcare",
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  image: "./images/ImgPlaceholder.png",
  technologies: [
    "html", "bootstrap", "Ruby"
  ],
  liveLink: "",
  sourceLink: ""
},
{
  featured: false,
  name: "Data Dashboard Healthcare",
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  image: "./images/ImgPlaceholder.png",
  technologies: [
    "html", "bootstrap", "Ruby"
  ],
  liveLink: "",
  sourceLink: ""
},
{
  featured: false,
  name: "Data Dashboard Healthcare",
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  image: "./images/ImgPlaceholder.png",
  technologies: [
    "html", "bootstrap", "Rubyy"
  ],
  liveLink: "",
  sourceLink: ""
}
]
