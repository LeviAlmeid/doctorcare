window.addEventListener('scroll', onScroll);
onScroll()
function onScroll(){
  showNavOnScroll();
  showBackToTopButton();
  activateMenuAtCurrerntSection(home);
  activateMenuAtCurrerntSection(services);
  activateMenuAtCurrerntSection(about);
  activateMenuAtCurrerntSection(contact);

}

function activateMenuAtCurrerntSection(section){
  const targetLine = scrollY + innerHeight / 2;

  //verifica se a sessão passou da linha

  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;

  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop;


  //verifica se a base está abaixo da linha
  const sectionEndsAt = sectionTop + sectionHeight;
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine;

  const sectionBoundaries = sectionTopReachOrPassedTargetline &&
  !sectionEndPassedTargetline;

  const menuElement = document
  .querySelector(`.menu a[href*=${section.getAttribute('id')}]`)

  menuElement.classList.remove('active');
  if(sectionBoundaries){
    menuElement.classList.add('active')
  }

  

}

function showNavOnScroll(){
  if(scrollY > 0){
    navigation.classList.add('scroll')
  }else{
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButton(){
  if(scrollY > 1400){
    backToTopButton.classList.add('show')
  }else{
    backToTopButton.classList.remove('show')
  }
}

function openMenu(){
  document.body.classList.add('menu-expanded')
}

function closeMenu(){
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'left',
  distance: '30px',
  duration: 600,
}).reveal(`
#home, 
#home .col-a,
#home img, 
#home .stats, 
#services,
#services header,
#services .card,
#about,
#about header,
#about p,
#about img
`
);