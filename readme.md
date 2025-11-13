# Solución Evidencia del SENA.

### Solución de la evidencia:

**_Diseño y Desarrollo de servicios web - caso GA7-220501096-AA5-EV01_**

---

## Tecnologías utilizadas

- **Node.js** – entorno de ejecución de JavaScript
- **Express.js** – framework minimalista para servidores HTTP
- **Nodemon** – reinicio automático en desarrollo
- **SQLite** – para la base de datos, se maneje local y no tenga dificultades al configurar.
- **bcrypt** – encriptacion de la contraseña del usuario.

---

## Instalación y Uso.

1. **Accede al directorio del proyecto**

```bash
cd evidencia-sena-servicios-web-caso
```

2. **Instala las dependencias**

```node
npm install
```

3. **Ejecuta el servidor**

```node
npm start
```

4. **Abrir el postman**

```node
http://localhost:3000/
```

---

## Ejemplo del Endpoint

### Register

```http
POST /auth/register
```

**Ejemplo de Body de la Request:**

```js
{
  "nombre": "Tilin",
  "email": "tilin@gmail.com",
  "password": "tilin123"
}
```

**Respuesta:**

```javascript
{
    "message": "Usuario creado exitosamente",
    "result": {
        "changes": 1,
        "lastInsertRowid": 1
    }
}
```

---

### Login

```http
POST /auth/login
```

**Ejemplo de Body de la Request:**

```js
{
  "nombre": "Tilin",
  "email": "tilin@gmail.com",
  "password": "tilin123"
}
```

**Respuesta:**

```javascript
{
    "message": "Usuario logueado exitosamente",
    "result": {
        "id": "54fe5af7facf1d8e36a2dd13679beb5b5145eefc164bf81f101418d712b2f467",
        "nombre": "Tilin",
        "email": "tilin@gmail.com"
    }
}
```
