import styles from './App.css'
import './main.css'

const greet = require('./app');
const rootDom = document.getElementById('root');
rootDom.appendChild(greet())
