// small helper for nav toggle on mobile
document.addEventListener('click', function(e){
  if(e.target && e.target.classList && e.target.classList.contains('nav-toggle')){
    const nav = document.querySelector('.main-nav');
    if(nav.style.display === 'block') nav.style.display = '';
    else nav.style.display = 'block';
  }
});
