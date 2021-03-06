const express = require('express');
const client = require("../database/index.js");
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

app.use(express.static(__dirname + '/../client/dist'));

client
  .connect()
  .then(() => console.log("Database connected..."))
  .catch(() => console.log("Cannot connect to database."));

app.get('/poses', async (req, res) => {
  try {
    const { rows } = await client.query('SELECT * FROM poses ORDER BY id ASC;');
    res.status(200).send(rows);
  } catch(err) {
    res.status(404).send(err);
  }
});

app.put('/poses', async (req, res) => {
  const { id, selected } = req.body;
  const query = `UPDATE poses SET selected = ${selected} WHERE id = ${id}`;
  try {
    const { rows } = await client.query(query);
    res.status(200).send(rows);
  } catch(err) {
    res.status(404).send(err);
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});