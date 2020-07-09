const express = require('express');
const app = express();
const sqlQuery = require('../src/sql');

app.get('/', (req, res) => {
    res.send('这是答题内容！')
})

app.get('/api/rtimu', async(req, res) => {
    // 随时获取10个题目
    res.append("Access-Control-Allow-Origin","*")
    res.append("Access-Control-Allow-Content-Type","*")
    let page = req.query.page ? req.query.page : 2;
    let strSql = `select * from dati limit ${page*10},10`;
    let result = await sqlQuery(strSql)
    res.json(Array.from(result));
});

app.listen(8080, () => {
    console.log("server start", "http://localhost: 8080")
})