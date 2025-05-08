# Códigos Postales 📮

## Búsqueda por Código (Parcial o Completo) 🔍

```BASH
GET /codigo/{codigo_postal}
```

**codigo_postal :** Debe ser un número de entre **4 o 5** dígitos.

:::tip
Para una búsqueda más exhaustiva, utilice el parámetro `wc=true`.

Esto realiza una búsqueda en ambas direcciones: `%codigo_postal%`.
Si no se utiliza, la búsqueda se realizará solo al final: `codigo_postal%`.

Esto se debe a consideraciones de rendimiento.

Ejemplo:
`http://localhost:3333/codigo/2034?wc=true`
:::

### 📝 Ejemplo
`http://localhost:3333/codigo/0901`

```json
{
  "values": 1,
  "data": [
    {
      "codigo": "09010",
      "nombre": "Real del Moral",
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

## Códigos Filtrados por Municipio 🏙️

```bash
GET /estado/{estado_id}/codigo/{codigo_postal}
```

[ID's de los Estados ](/estados)

**estado_id :** Debe ser un número de entre **1 y 32**
<br>
**codigo_postal :** Debe ser un número de entre **3 y 5** dígitos


:::tip
Para una búsqueda más exhaustiva, utilice el parámetro wc=true.

Esto realiza una búsqueda en ambas direcciones: %codigo_postal%.
Si no se utiliza, la búsqueda se realizará solo al final: codigo_postal%.

Esto se debe a consideraciones de rendimiento.

Ejemplo:
`http://localhost:3333/estado/9/codigo/146?wc=true`
:::

### 📝 Ejemplo
`http://localhost:3333/estado/9/codigo/091`

```json
{
  "values": 6,
  "estado": "Ciudad de México",
  "data": [
    {
      "codigo": "09100",
      "nombre": "Juan Escutia",
      "tipo": "Colonia",
      "ciudad": "Ciudad de México",
      "zona": "Urbano",
      "estado": {
        "id": 9,
        "nombre": "Ciudad de México"
      },
      "municipio": {
        "id": 7,
        "nombre": "Iztapalapa"
      }
    },
    {
      "codigo": "09110",
      "nombre": "La Valenciana",
      "tipo": "Unidad habitacional",
      "ciudad": "Ciudad de México",
      "zona": "Urbano",
      "estado": {
        "id": 9,
        "nombre": "Ciudad de México"
      },
      "municipio": {
        "id": 7,
        "nombre": "Iztapalapa"
      }
    },
    {
      "codigo": "09120",
      "nombre": "Voceadores de México",
      "tipo": "Unidad habitacional",
      "ciudad": "Ciudad de México",
      "zona": "Urbano",
      "estado": {
        "id": 9,
        "nombre": "Ciudad de México"
      },
      "municipio": {
        "id": 7,
        "nombre": "Iztapalapa"
      }
    },
    {
      "codigo": "09130",
      "nombre": "San Lorenzo Xicotencatl",
      "tipo": "Pueblo",
      "ciudad": "Ciudad de México",
      "zona": "Urbano",
      "estado": {
        "id": 9,
        "nombre": "Ciudad de México"
      },
      "municipio": {
        "id": 7,
        "nombre": "Iztapalapa"
      }
    },
    {
      "codigo": "09140",
      "nombre": "Santa Martha Acatitla Norte",
      "tipo": "Colonia",
      "ciudad": "Ciudad de México",
      "zona": "Urbano",
      "estado": {
        "id": 9,
        "nombre": "Ciudad de México"
      },
      "municipio": {
        "id": 7,
        "nombre": "Iztapalapa"
      }
    },
    {
      "codigo": "09180",
      "nombre": "Ermita Zaragoza",
      "tipo": "Colonia",
      "ciudad": "Ciudad de México",
      "zona": "Urbano",
      "estado": {
        "id": 9,
        "nombre": "Ciudad de México"
      },
      "municipio": {
        "id": 7,
        "nombre": "Iztapalapa"
      }
    }
  ]
}
```
