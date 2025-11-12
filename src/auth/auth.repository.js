import db from '../db';

/**
 *
 * @param {string} nombre - Nombre del usuario a crear
 * @param {string} email - Email del usuario a crear
 * @returns
 */
export const insertarUsuario = (nombre, email) =>
  db
    .prepare(`INSERT INTO usuarios (nombre, email) VALUES (?, ?)`)
    .run(nombre, email);

export const obtenerUsuarioByEmail = (email) =>
  db
    .prepare(
      `
        SELECT * FROM usuarios WHERE email = ?
        `
    )
    .get(email);

    