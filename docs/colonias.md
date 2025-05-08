# Colonias 🏘️

## 🔍 Por nombre

Se buscarán todas las colonias que coincidan con el texto proporcionado.

```bash
GET /estado/{estado_id}/colonia/{colonia}
```

[ID's de los Estados ](/estados)

**estado_id :** Debe ser un número de entre **1 y 32**
<br>
**colonia :** Mínimo **3** caracteres

## 📝 Ejemplo
`http://localhost:3333/estado/9/colonias/puerto`

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
      "codigo": "15640",
      "nombre": "Arenal Puerto Aéreo",
      "tipo": "Colonia",
      "ciudad": "Ciudad de México",
      "zona": "Urbano",
      "municipio": {
        "id": 17,
        "nombre": "Venustiano Carranza"
      }
    },
    {
      "codigo": "15710",
      "nombre": "Industrial Puerto Aéreo",
      "tipo": "Colonia",
      "ciudad": "Ciudad de México",
      "zona": "Urbano",
      "municipio": {
        "id": 17,
        "nombre": "Venustiano Carranza"
      }
    }
  ]
}
```
