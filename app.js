const express = require('express')
const cors = require('cors');
const app = express();
const port = 3000;

app.get('/roll-dice', (req, res) => {
  const diceValue = Math.floor(Math.random() * 5 + 1);
  res.json({ value: diceValue });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})