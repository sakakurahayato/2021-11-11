const menu = document.getElementById('menu');
menu.addEventListener('click', () => {
  menu.classList.toggle('open');
  const drawer = document.getElementById('drawer-menu');
  drawer.classList.toggle('in');
})