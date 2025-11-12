import bcrypt from 'bcrypt';
import crypto from 'crypto';
import { insertarUsuario, obtenerUsuarioByEmail } from './auth.repository.js';

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const registerController = async (req, res) => {
  try {
    const { nombre, email, password } = req.body;
    const exists = !!obtenerUsuarioByEmail(email);

    if (exists)
      return res.status(400).send({ message: 'Email se encuentra en uso' });

    const hashPassword = await bcrypt.hash(password, 15);

    const id = crypto.hash('sha256', Date.now().toString(16));

    const newUser = insertarUsuario({
      id,
      nombre,
      email,
      password: hashPassword,
    });
    res
      .status(200)
      .send({ message: 'Usuario creado exitosamente', result: newUser });
  } catch (error) {
    console.log(error);

    res.status(400).send({ errorDetails: error });
  }
};

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const loginController = async (req, res) => {
  try {
    const { email, password: pass } = req.body;
    const usuario = obtenerUsuarioByEmail(email);

    if (!usuario)
      return res.status(400).send({ message: 'Credenciales erroneas' });

    const isSamePassword = await bcrypt.compare(pass, usuario.password);

    if (!isSamePassword)
      return res.status(400).send({ message: 'Credenciales Erroneas' });

    const { password, ...resultUser } = usuario;

    res
      .status(200)
      .send({ message: 'Usuario logueado exitosamente', result: resultUser });
  } catch (error) {
    console.error(error);
    res.status(400).send({ errorDetails: error });
  }
};
