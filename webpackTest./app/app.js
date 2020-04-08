var text = require('./text')
module.exports = function () {
  const greet = document.createElement('div');
  greet.textContent = text[0].text;
  return greet;
}
