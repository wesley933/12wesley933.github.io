const express = require('express');

const app = express();

const porta = 8080;


app.get('/listar/:quantidade', (req, res) => {
  const quantidade = parseInt(req.params.quantidade);

  if (quantidade === 10) {
    res.status(200).send('quantidade é igual a 10.');
  } else {
    res.status(404).send('Quantidade errada');
  }

});

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);

});