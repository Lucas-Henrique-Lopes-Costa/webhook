const express = require('express');
const app = express();

app.use(express.json());

app.post('/webhook', (req, res) => {
  console.log('Recebido:', req.body);
  res.sendStatus(200);
});

app.listen(3000, () => console.log('Webhook rodando em http://localhost:3000/webhook'));
