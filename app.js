const express = require('express');
const app = express();

const port = 8080;

app.get('/', (req, res) => {
  res.send('this works live now');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
