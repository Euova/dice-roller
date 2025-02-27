const express = require('express')
const cors = require('cors');
const app = express();
const port = 8080; // Azure expects 8080

app.get('/roll-dice', (req, res) => {
  const diceValue = Math.floor(Math.random() * 5 + 1);
  res.json({ value: diceValue });
  console.log(res);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})