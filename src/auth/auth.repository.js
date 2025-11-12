import db from '../db/index.js';

/**
 *
 * @param {Object} params
 * @param {string} params.id - identificar que tendra el nuevo usuario
 * @param {string} params.nombre - Nombre del usuario a crear
 * @param {string} params.email - Email del usuario a crear
 * @param {string} params.password - Contraseña hasheada del usuario a crear
 * @returns
 */
export const insertarUsuario = ({ id, nombre, email, password }) =>
  db
    .prepare(
      `INSERT INTO usuarios (id, nombre, email, password) VALUES (?, ?, ?, ?)`
    )
    .run(id, nombre, email, password);

export const obtenerUsuarioByEmail = (email) =>
  db
    .prepare(
      `
        SELECT *
        FROM usuarios
        WHERE email = ?
        `
    )
    .get(email);
