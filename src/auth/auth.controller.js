import { insertarUsuario, obtenerUsuarioByEmail } from './auth.repository';

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const registerController = (req, res) => {
  try {
    const newUser = insertarUsuario(req.body.nombre, req.body.email);
    res
      .status(200)
      .send({ message: 'Usuario creado exitosamente', result: newUser });
  } catch (error) {
    res.status(400).send({ errorDetails: error });
  }
};
