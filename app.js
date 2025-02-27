const express = require('express')
const cors = require('cors');
const app = express();
const port = 8080; // Azure expects 8080

app.use(cors());

app.get('/roll-dice', (req, res) => {
  const diceValue = Math.floor(Math.random() * 5 + 1);
  res.json({ value: diceValue });
})

app.listen(port, () => {
  console.log(`Dice app listening on port ${port}`)
})