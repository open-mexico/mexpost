# Municipios 🏛️

## 🔍 Por nombre

Se buscarán todos los municipios que coincidan con el texto proporcionado.

```BASH
GET /estado/{estado_id}/municipio/{municipio}
```

[ID's de los Estados ](/estados)

**estado_id :** Debe ser un número de entre **1 y 32**
<br>
**municipio :** Mínimo **3** caracteres

## 📝 Ejemplo
`http://localhost:3333/estado/9/municipio/tla`

```json
{
  "meta": {
    "total": 2,
    "perPage": 15,
    "currentPage": 1,
    "lastPage": 1,
    "firstPage": 1,
    "firstPageUrl": "/?page=1",
    "lastPageUrl": "/?page=1",
    "nextPageUrl": null,
    "previousPageUrl": null
  },
  "data": [
    {
      "id": 11,
      "nombre": "Tláhuac"
    },
    {
      "id": 12,
      "nombre": "Tlalpan"
    }
  ]
}
```
