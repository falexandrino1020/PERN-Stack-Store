const express = require('express');
const app = express();
const cors = require('cors');
port = 3000;
app.use(cors());

//Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});