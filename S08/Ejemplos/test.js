const express = require('express');
const app = express();
const PORT = 8080;

app.get('/xxx', (req, res) => {
  res.send('holi');
});

//-- Basta con añadir estas líneas
app.get('/test', (req, res) => {
  console.log("Prueba");
})
app.listen(PORT);

