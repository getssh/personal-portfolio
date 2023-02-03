const dropMob = document.querySelector('.tool-bar-mob');
const navDeskTop = document.querySelector('.tool-bar-desk');
const humBurger = document.querySelector('.test');
const closeBtn = document.querySelector('.close');
const navItems = document.querySelectorAll('.nav-item');
const unfeaturedProject = document.querySelector('.projects-wrap');
const featuredProject = document.querySelector('.featured');
const mypop = document.querySelector('.popup-wrapper');

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

// createing projects daynamically

const projects = [{
  featured: true,
  name: 'Multi-Post Stories',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  image: './images/ImgPlaceholder.png',
  technologies: [
    'css', 'html', 'bootstrap', 'Ruby',
  ],
  liveLink: '#',
  sourceLink: '#',
  popUpDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  popUpImage: './images/pop-up.png',
},
{
  featured: false,
  name: 'Profesional Art Printing Data',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  image: './images/ImgPlaceholder.png',
  technologies: [
    'html', 'bootstrap', 'Ruby',
  ],
  liveLink: '#',
  sourceLink: '#',
  popUpDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  popUpImage: './images/pop-up.png',
},
{
  featured: false,
  name: 'Profesional Art Printing Data',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  image: './images/ImgPlaceholder.png',
  technologies: [
    'html', 'bootstrap', 'Ruby',
  ],
  liveLink: '#',
  sourceLink: '#',
  popUpDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  popUpImage: './images/pop-up.png',
},
{
  featured: false,
  name: 'Profesional Art Printing Data',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  image: './images/ImgPlaceholder.png',
  technologies: [
    'html', 'bootstrap', 'Ruby',
  ],
  liveLink: '#',
  sourceLink: '#',
  popUpDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  popUpImage: './images/pop-up.png',
},
{
  featured: false,
  name: 'Profesional Art Printing Data',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  image: './images/ImgPlaceholder.png',
  technologies: [
    'html', 'bootstrap', 'Ruby',
  ],
  liveLink: '#',
  sourceLink: '#',
  popUpDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  popUpImage: './images/pop-up.png',
},
{
  featured: false,
  name: 'Profesional Art Printing Data',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  image: './images/ImgPlaceholder.png',
  technologies: [
    'html', 'bootstrap', 'Ruby',
  ],
  liveLink: '#',
  sourceLink: '#',
  popUpDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  popUpImage: './images/pop-up.png',
},

];

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
<button class="see-project-btn" onclick="proDetail(pop0)">See Project</button>
</div>
`;

let projectContainer = '';
let popUpContainer = '';
const myPopId = '#pop';

for (let i = 0; i < projects.length; i += 1) {
  let technologies = '';
  for (let j = 0; j < projects[i].technologies.length; j += 1) {
    technologies += `<li>${projects[i].technologies[j]}</li>`;
  }
  const webContentNotFeatured = `
  <div class="projects not-featured">
  <h2 class="project-title not-featured-title">${projects[i].name}</h2>
  <p class="project-description not-featured-desc">${projects[i].description}</p>
  <ul class="used-tools tools-bottom">
    ${technologies}
  </ul>
  <a href=${myPopId}${i} class="full-width-btn" style="text-decoration:none;" onclick="proDetail(pop${i})">
    <button class="see-project-btn full-width-btn">See Project</button>
  </a>
  </div>
  `;
  const popUpContent = `
  <div class="pop-up" id="pop${i}">
  <div class="pop-title">
    <h1>${projects[i].name}</h1>
    <i class="fa-solid fa-xmark fa-2x pop-close" onclick="popClose()"></i>
  </div>
  <ul class="popup-tools">
    ${technologies}
  </ul>
  <div class="pop-detail">
    <div class="popup-image">
      <img src=${projects[i].popUpImage} alt="pop-up image" />
    </div>
    <div class="visit">
    <p>${projects[i].popUpDetail}</p>
      <a href=${projects[i].liveLink}>
        <button class="live see-project-btn">See Live <i class="fa-solid fa-circle-arrow-up"></i></button>
      </a>
      <a href=${projects[i].sourceLink}>
        <button class="live see-project-btn">See Source <i class="fa-brands fa-github"></i></button>
      </a>
    </div>
  </div>
  </div>
  `;
  popUpContainer += popUpContent;
  projectContainer += webContentNotFeatured;
}

featuredProject.innerHTML = featuredContent;
unfeaturedProject.innerHTML = projectContainer;
mypop.innerHTML = popUpContainer;

const popUp = document.querySelectorAll('.pop-up');

function proDetail(idNum) {
  mypop.style.display = 'block';

  for (let i = 0; i < popUp.length; i += 1) {
    if (popUp[i].id === idNum.id) {
      popUp[i].style.display = 'block';
    }
  }
}

function popClose() {
  mypop.style.display = 'none';
  for (let i = 0; i < popUp.length; i += 1) {
    popUp[i].style.display = 'none';
  }
}

console.log(`${proDetail} ${popClose}`);