
function showSection(sectionId) {
  const welcome = document.getElementById('welcome');
  if (welcome) welcome.style.display = 'none';

  document.querySelectorAll('.gallery-section').forEach(sec => {
    sec.style.display = 'none';
  });

  const toShow = document.getElementById(sectionId);
  if (toShow) toShow.style.display = 'block';
}


function openDetail(name, desc, creator, appearance, img, code, price, section) {
  const scroll = window.scrollY;
  const params = new URLSearchParams({
    name, desc, creator, appearance, img, code, price, section, scroll
  });
  window.location.href = `detail.html?${params.toString()}`;
}


document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const section = params.get('section') || 'basic';
  const scroll = params.get('scroll') || 0;
  showSection(section);
  setTimeout(() => window.scrollTo(0, scroll), 100);
});

