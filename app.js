const express = require('express')
const cors = require('cors');
const app = express();
const port = 8080; // Azure expects 8080

var corsOptions = {
  origin: '*',
  optionSuccessStatus: 200
}

app.get('/', cors(corsOptions), (req, res, next) => {
  const randomValue = Math.floor(Math.random() * 6 + 1);
  res.json({ value: randomValue });
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
