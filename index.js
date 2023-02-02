const dropMob = document.querySelector('.tool-bar-mob');
const navDeskTop = document.querySelector('.tool-bar-desk');
const humBurger = document.querySelector('.test');
const closeBtn = document.querySelector('.close');
const navItems = document.querySelectorAll('.nav-item');
const unfeaturedProject = document.querySelector('.projects-wrap')
const featuredProject = document.querySelector('.featured')

humBurger.addEventListener('click', () => {
  dropMob.style.display = "block";
  navDeskTop.style.display = "none";

})

closeBtn.addEventListener('click', () => {
  dropMob.style.display = "none";
  navDeskTop.style.display = "flex";
})

for (let i = 0; i < navItems.length; i+=1) {
  navItems[i].addEventListener('click', () => {
    dropMob.style.display = "none";
    navDeskTop.style.display = "flex";
  })
}


//createing projects daynamically

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

const featuredContent = `
<div class="top-img">
<img src=${projects[0].image} alt="featured project" class="first-project">
</div>
<div class="pro-detail">
<h2 class="project-title">${projects[0].name}</h2>
<p class="project-description">${projects[0].description}</p>
<ul class="used-tools">
  <li>${projects[0].technologies[0]}</li>
  <li>${projects[0].technologies[1]}</li>
  <li>${projects[0].technologies[2]}</li>
  <li>${projects[0].technologies[3]}</li>
</ul>
<button class="see-project-btn">See Project</button>
</div>
`

let projectContainer = ``;

for (let i = 0; i < projects.length; i+=1) {
  if (projects[i].featured) {continue}
  
  let webContentNotFeatured = `
  <div class="projects not-featured">
  <h2 class="project-title not-featured-title">${projects[i].name}</h2>
  <p class="project-description not-featured-desc">${projects[i].description}</p>
  <ul class="used-tools tools-bottom">
    <li>${projects[i].technologies[0]}</li>
    <li>${projects[i].technologies[1]}</li>
    <li>${projects[i].technologies[2]}</li>
  </ul>
  <button class="see-project-btn full-width-btn" onclick="proDetail()">See Project</button>
  </div>
  `

  projectContainer += webContentNotFeatured;
}

featuredProject.innerHTML = featuredContent;
unfeaturedProject.innerHTML = projectContainer;

const mypop = document.querySelector('.popup-wrapper');
const mybtn = document.querySelector('.see-project-btn')

function proDetail() {
  mypop.style.display = "block";
}