import React from 'react'
import { render } from 'react-dom'
import jquery from 'jquery'
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')
let r = moment().endOf('day').fromNow();
console.log(r)

render(
  <h1>jsx</h1>,
  window.root
)