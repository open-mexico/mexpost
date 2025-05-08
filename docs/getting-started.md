# 🚀 Primeros Pasos

## ✅ Requisitos Previos

Antes de comenzar, asegúrate de tener instaladas las siguientes versiones:

* **Node**: 22
* **pnpm**: 9.8.0
* **Python**: 3.13
* **MySQL**: 8.0.36

::: warning
**Versiones mínimas requeridas**
:::

## ⚙️ Instalación (Desarrollo)

Sigue estos pasos para instalar Mexpost:

1.  Clona el repositorio:
    ```bash
    git clone git@github.com:open-mexico/mexpost.git
    ```
2.  Instala las dependencias de Node:
    ```bash
    pnpm i
    ```

3.  Crea un archivo `.env` basado en `.env.example`.

4.  Rellena las variables con los datos de tu base de datos:
    ```bash
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_USER=root
    DB_PASSWORD=root
    DB_DATABASE=app
    ```

5.  Genera una llave criptográfica:
    ```bash
    node ace generate:key
    ```
6.  Crea todo el esquema de la base de datos:
    ```bash
    node ace migration:run
    ```

7.  Rellena la información necesaria para la búsqueda de códigos postales:
    ```bash
    node ace db:seed
    ```

    ::: info
    En la versión actual, los datos corresponden a **marzo de 2025**. En la siguiente versión, se actualizarán a la fecha de instalación.
    :::

8.  Inicia el servidor:
    ```bash
    pnpm dev
    ```

## 💻 Primeras Peticiones a la API

Una vez que el servidor esté en funcionamiento, puedes realizar tus primeras peticiones a la API. Por defecto, la API estará disponible en `http://localhost:3333`.

### Obtener información de un Código Postal

Puedes obtener detalles de un código postal específico utilizando la siguiente ruta:

`GET /codigo/:codigo_postal`

Para este ejemplo usaremos el código **1460** para obtener los códigos que contengan este número.

`GET http://localhost:3333/codigo/1460`

```json
{
  "values": 3,
  "data": [
    {
      "codigo": "14600",
      "nombre": "Valle Escondido",
      "tipo": "Colonia",
      "ciudad": "Ciudad de México",
      "zona": "Urbano",
      "estado": {
        "id": 9,
        "nombre": "Ciudad de México"
      }
    },
    {
      "codigo": "14608",
      "nombre": "Colinas del Bosque",
      "tipo": "Colonia",
      "ciudad": "Ciudad de México",
      "zona": "Urbano",
      "estado": {
        "id": 9,
        "nombre": "Ciudad de México"
      }
    },
    {
      "codigo": "14609",
      "nombre": "Las Tórtolas",
      "tipo": "Colonia",
      "ciudad": "Ciudad de México",
      "zona": "Urbano",
      "estado": {
        "id": 9,
        "nombre": "Ciudad de México"
      }
    }
  ]
}
```
