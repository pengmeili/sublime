import '../css/index.css';
import '../common/reset.css';
import Layer from '../components/layer/layer';
// import img from '../images/test.png'
var $ = require('jquery');

const App = function () {
  var dom = document.getElementById('app');
  var layer = new Layer();
  // dom.innerHTML = layer.tpl;
  dom.innerHTML = layer.tpl({
    name: 'john',
    arr: ['apple','banana']
  })
}

new App();
$(function () {
  console.log($('#app').html())
})
