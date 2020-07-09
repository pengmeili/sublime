const mysql = require('mysql')
const axios = require('axios')
const cheerio = require("cheerio")

const options = {
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '123456',
  database: 'mall'
}

const connection = mysql.createConnection(options)
connection.connect()

const page = 1
const count = 1

async function getPageUrl(page) {
  let pageUrl = 'http://www.785888.net/yxjj/index_'+ page +'.html'
  let res = await axios.get(pageUrl)
  // console.log(res.data)
  let $ = cheerio.load(res.data)
  $('.listBox li > a').each((i, elem) => {
    const url = 'http://www.785888.net'+$(elem).attr('href')
    getBookInfo(url)
  })
}

async function getBookInfo(url) {
  const res =await axios.get(url)
  const $ = cheerio.load(res.data)
  // 书籍图片
  const bookimg = $('.detail .detail_pic img').attr('src')
  const bookname = $('.detail .detail_right h1:nth-child(1)').text()
  let language = $('.detail li:nth-child(1)').text()
  language = language.substring(5, language.length)
  let size = $('.detail li:nth-child(3)').text()
  size = size.substring(5, size.length)
  let category = $('.detail li:nth-child(4)').text()
  category = category.substring(5, category.length)
  let pubtime = $('.detail li:nth-child(5)').text()
  pubtime = pubtime.substring(5, pubtime.length)
  let author = $('.detail li:nth-child(7)').text()
  author = author.substring(5, author.length)
  let score = $('.detail li:nth-child(8) em').attr('class')
  score = score.substr(score.length - 1)
  let downloadcount = $('.detail li:nth-child(2)').text()
  downloadcount = downloadcount.substring(5, downloadcount.length)

  let arr = [bookname, author, downloadcount, pubtime, score, bookimg, category, language]
  // console.log(arr)
  // 插入数据库
  let sql = 'insert into book (bookname, author, downloadcount, pubtime, score, bookimg, category, language) values (?, ?, ?, ?, ?, ?, ?, ?)'
  connection.query(sql, arr, (err, result) => {
    console.log(err)
    console.log(result)
  })
}

getPageUrl(2)
// const temp = 'http://www.785888.net/yxjj/wangyou/7281.html';
// getBookInfo(temp)