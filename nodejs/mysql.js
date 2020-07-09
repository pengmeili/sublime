const mysql = require('mysql');
const options = {
  host: 'localhost',
  port: '3306', // 可不写,默认为3306
  user: 'root',
  password: '123456',
  database: 'mall'
}

// 创建与数据库的连接对象
const connection = mysql.createConnection(options)
// 创建连接
connection.connect((err) => {
  // 如果连接失败
  if(err) {
    console.log(err)
  } else {
    console.log('数据库连接成功')
  }
})

// 执行数据库语句
// 执行查询语句
// const strSql = 'select * from student'
// connection.query(strSql, (err, result, fiels) => {
//   console.log(err)
//   console.log(result)
//   console.log(fiels)
// })


// 删除表的操作
// const strSql1 = 'drop table student'
// connection.query(strSql1, (err, result, fiels) => {
//   console.log(err)
//   console.log(result)
// })

// 创建数据库
// const strSql2 = 'drop database pengml'
// connection.query(strSql2, (err, result, fiels) => {
//   console.log(err)
//   console.log(result)
// })

// 创建数据库
// const strSql3 = 'create database mall'
// connection.query(strSql3, (err, result) => {
//   console.log(err)
//   console.log(result)
// })

// 创建表
// const strSql4 = 'CREATE TABLE `user` (`id` int(0) NOT NULL AUTO_INCREMENT,`name` varchar(255),`password` varchar(255),`email` varchar(255),PRIMARY KEY (`id`))'

// connection.query(strSql4, (err, result) => {
//   console.log(err)
//   console.log(result)
// })

// 插入数据
// const strSql5 = 'insert into user (name, password, email) values ("brain", "111111", "brain@lenovo.com")'
// connection.query(strSql5, (err, result) => {
//   console.log(err)
//   console.log(result)
// })

// 插入数据
const sql1 = 'insert into user (name, password, email) values (?, ?, ?)'
connection.query(sql1, ["小红", "111111", "xiaohong@126.com"], (err, result) => {
  console.log(err)
  console.log(result)
})