# Colonia

## Por nombre

Se buscarán todos las colonias que coincidan con el texto a buscar

### Estructura

**localhost:3333/estado/{estado_id}/colonia/{colonia}**

[ID de los estados](/estados)

```
estado_id : Debe ser un número de entre 1 y 32 dígitos
colonia : Mínimo 3 caracteres
```

### Ejemplo
`http://localhost:3333/estado/9/colonias/vall`

```json
{
  "meta": {
    "total": 28,
    "perPage": 15,
    "currentPage": 1,
    "lastPage": 2,
    "firstPage": 1,
    "firstPageUrl": "/?page=1",
    "lastPageUrl": "/?page=2",
    "nextPageUrl": "/?page=2",
    "previousPageUrl": null
  },
  "data": [
    {
      "codigo": "02300",
      "nombre": "Industrial Vallejo",
      "tipo": "Colonia",
      "ciudad": "Ciudad de México",
      "zona": "Urbano",
      "municipio": {
        "id": 2,
        "nombre": "Azcapotzalco"
      }
    },
    {
      "codigo": "03100",
      "nombre": "Del Valle Centro",
      "tipo": "Colonia",
      "ciudad": "Ciudad de México",
      "zona": "Urbano",
      "municipio": {
        "id": 14,
        "nombre": "Benito Juárez"
      }
    },
    {
      "codigo": "03103",
      "nombre": "Del Valle Norte",
      "tipo": "Colonia",
      "ciudad": "Ciudad de México",
      "zona": "Urbano",
      "municipio": {
        "id": 14,
        "nombre": "Benito Juárez"
      }
    },
    {
      "codigo": "03104",
      "nombre": "Del Valle Sur",
      "tipo": "Colonia",
      "ciudad": "Ciudad de México",
      "zona": "Urbano",
      "municipio": {
        "id": 14,
        "nombre": "Benito Juárez"
      }
    },
    {
      "codigo": "03580",
      "nombre": "Miravalle",
      "tipo": "Colonia",
      "ciudad": "Ciudad de México",
      "zona": "Urbano",
      "municipio": {
        "id": 14,
        "nombre": "Benito Juárez"
      }
    },
    {
      "codigo": "03650",
      "nombre": "Letrán Valle",
      "tipo": "Colonia",
      "ciudad": "Ciudad de México",
      "zona": "Urbano",
      "municipio": {
        "id": 14,
        "nombre": "Benito Juárez"
      }
    },
    {
      "codigo": "06240",
      "nombre": "Valle Gómez",
      "tipo": "Colonia",
      "ciudad": "Ciudad de México",
      "zona": "Urbano",
      "municipio": {
        "id": 15,
        "nombre": "Cuauhtémoc"
      }
    },
    {
      "codigo": "07190",
      "nombre": "Valle de Madero",
      "tipo": "Colonia",
      "ciudad": "Ciudad de México",
      "zona": "Urbano",
      "municipio": {
        "id": 5,
        "nombre": "Gustavo A. Madero"
      }
    },
    {
      "codigo": "07700",
      "nombre": "Nueva Industrial Vallejo",
      "tipo": "Colonia",
      "ciudad": "Ciudad de México",
      "zona": "Urbano",
      "municipio": {
        "id": 5,
        "nombre": "Gustavo A. Madero"
      }
    },
    {
      "codigo": "07720",
      "nombre": "Lindavista Vallejo I Sección",
      "tipo": "Colonia",
      "ciudad": "Ciudad de México",
      "zona": "Urbano",
      "municipio": {
        "id": 5,
        "nombre": "Gustavo A. Madero"
      }
    },
    {
      "codigo": "07740",
      "nombre": "Valle del Tepeyac",
      "tipo": "Colonia",
      "ciudad": "Ciudad de México",
      "zona": "Urbano",
      "municipio": {
        "id": 5,
        "nombre": "Gustavo A. Madero"
      }
    },
    {
      "codigo": "07750",
      "nombre": "Nueva Vallejo",
      "tipo": "Colonia",
      "ciudad": "Ciudad de México",
      "zona": "Urbano",
      "municipio": {
        "id": 5,
        "nombre": "Gustavo A. Madero"
      }
    },
    {
      "codigo": "07754",
      "nombre": "Lindavista Vallejo III Sección",
      "tipo": "Colonia",
      "ciudad": "Ciudad de México",
      "zona": "Urbano",
      "municipio": {
        "id": 5,
        "nombre": "Gustavo A. Madero"
      }
    },
    {
      "codigo": "07755",
      "nombre": "Lindavista Vallejo II Sección",
      "tipo": "Colonia",
      "ciudad": "Ciudad de México",
      "zona": "Urbano",
      "municipio": {
        "id": 5,
        "nombre": "Gustavo A. Madero"
      }
    },
    {
      "codigo": "07790",
      "nombre": "Vallejo Poniente",
      "tipo": "Colonia",
      "ciudad": "Ciudad de México",
      "zona": "Urbano",
      "municipio": {
        "id": 5,
        "nombre": "Gustavo A. Madero"
      }
    }
  ]
}
```
