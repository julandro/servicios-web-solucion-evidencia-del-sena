import express from 'express';
import routerAuth from './app';

const app = express();

app.use('/auth', routerAuth);

app.listen(3000, () => {
  console.log('---------- Iniciando Servidor ----------');
});
