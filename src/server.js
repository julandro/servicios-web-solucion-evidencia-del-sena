import express from 'express';
import routerAuth from './app.js';

const app = express();

app.use(express.json());

app.use('/auth', routerAuth);

app.listen(3000, () => {
  console.log('---------- Iniciando Servidor ----------');
  console.log('Servidor corriendo en http://localhost:3000');
  console.log('Base de Datos corriendo en Local');
});
