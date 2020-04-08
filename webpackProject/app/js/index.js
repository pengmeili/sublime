const bg = require('../images/test.png')
const imgSrc = 'html'
function home() {
  const img = document.getElementById('img');
  img.setAttribute('src', bg)
}
home();
