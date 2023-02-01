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