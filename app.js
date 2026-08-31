import express from 'express';

const app = express();
const PORT = 3000;

const produtos = [
  { id: 1, nome: 'Volante', categoria: 'eletronicos' },
  { id: 2, nome: 'pijama', categoria: 'vestuario' },
  { id: 3, nome: 'rx 9090', categoria: 'eletronicos' },
  { id: 4, nome: 'camiseta', categoria: 'vestuario' }
];

app.get('/', (req, res) => {
  res.send('Bem vindo ao express!');
});

app.get('/produtos', (req, res) => {
  const { categoria } = req.query;

  if (categoria) {
    const produtosFiltrados = produtos.filter(
      p => p.categoria.toLowerCase() === categoria.toLowerCase()
    );
    return res.json(produtosFiltrados);
  }

  res.json(produtos);
});

app.get('/produtos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const produto = produtos.find(p => p.id === id);

  if (!produto) {
    return res.status(404).json({ erro: 'Produto não encontrado' });
  }

  res.json(produto);
});

app.listen(PORT, () => {
  console.log(`servidor rodando em http://localhost:${PORT}`);
});
