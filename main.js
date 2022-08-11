// munculin tombol scroll ke atas
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');

  if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
  else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);
// akhir

// LIGHT MODE DARK MODE
const moon = document.getElementById('moon-button');
const sun = document.getElementById('sun-button');

moon.onclick = function () {
  document.body.classList.toggle('bg-lightmode');
  sun.classList.toggle('bi-brightness-high');
  moon.classList.toggle('bi-moon-stars-fill');
};

sun.onclick = function () {
  document.body.classList.toggle('bg-lightmode');
  moon.classList.toggle('bi-moon-stars-fill');
  sun.classList.toggle('bi-brightness-high');
};
// akhir

// Pop Up Pemberitahuan
var showalert = document.getElementById('showalert');

function alert() {
  showalert.style.display = 'block';
}

function hidealert() {
  showalert.style.display = 'none';
}