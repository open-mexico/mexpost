# Primeros pasos

## Requisitos Previos

Antes de comenzar, asegúrate de tener lo siguiente instalado:

* **Node**: 22
* **pnpm**: 9.8.0
* **Python**: 3.13
* **MySQL**: 8.0.36

::: warning
**Versiones minimas requeridas**
:::

## Instalación
(Desarrollo)

Sigue estos pasos para instalar Mexpost:

1.  Clona el repositorio:
    ```bash
    git clone git@github.com:open-mexico/mexpost.git
    ```
2.  Instala las dependencias de Node:
    ```bash
    pnpm i
    ```

3.  Crea un archivo `.env` basado en `.env.example`

4. Llena las variables de datos de tu base de datos
    ```bash
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_USER=root
    DB_PASSWORD=root
    DB_DATABASE=app
    ```

5. Genera una llave criptografica
    ```bash
    node ace generate:key
    ```
6. Crea todo el esqueña de la base de datos
  ```bash
  node ace migration:run
  ```

7. Llena la información necesaria para la busqueda de códigos postales
  ```bash
  node ace db:seed
  ```

  ::: info
  En la versión actual los datos son de **marzo 2025**, en la siguiente version se actualiarán a los del día de la instalación.
  :::

8. Inicia el servidor
  ```bash
  pnpm dev
  ```
