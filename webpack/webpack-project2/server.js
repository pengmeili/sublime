// express

const express = require('express');
const app = express();

app.get('/api/user', (req, res) => {
  res.json({ name: 'pengml1' })
})

app.listen(4000);