# Codigos postales

## Por código (Parcial o completo)

### Estructura

**localhost:3333/codigo/{codigo_postal}**

```
codigo_postal : Debe ser un número de entre 4 o 5 dígitos"
```

:::tip
Para una busqueda más a fondo una el parametro `wc=true`

Esto hace una busqueda en ambas direcciones `%codigo_postal%`
De no usarlo solo se buscará al final `codigo_postal%`

Esto por tema de performance

Ejemplo
`http://localhost:3333/codigo/2034?wc=true`
:::

### Ejemplo
`http://localhost:3333/codigo/2034`

```json
{
  "values": 14,
  "data": [
    {
      "codigo": "20340",
      "nombre": "Parque Industrial Logística Automotriz",
      "tipo": "Zona industrial",
      "ciudad": null,
      "zona": "Rural",
      "estado": {
        "id": 1,
        "nombre": "Aguascalientes"
      }
    },
    {
      "codigo": "20340",
      "nombre": "Arellano",
      "tipo": "Ejido",
      "ciudad": null,
      "zona": "Rural",
      "estado": {
        "id": 1,
        "nombre": "Aguascalientes"
      }
    },
    {
      "codigo": "20340",
      "nombre": "Cieneguilla (La Lumbrera)",
      "tipo": "Ejido",
      "ciudad": null,
      "zona": "Rural",
      "estado": {
        "id": 1,
        "nombre": "Aguascalientes"
      }
    },
    {
      "codigo": "20340",
      "nombre": "Buenavista de Peñuelas",
      "tipo": "Ejido",
      "ciudad": null,
      "zona": "Rural",
      "estado": {
        "id": 1,
        "nombre": "Aguascalientes"
      }
    },
    {
      "codigo": "20340",
      "nombre": "Peñuelas (El Cienegal)",
      "tipo": "Colonia",
      "ciudad": null,
      "zona": "Rural",
      "estado": {
        "id": 1,
        "nombre": "Aguascalientes"
      }
    },
    {
      "codigo": "20341",
      "nombre": "La Huerta (La Cruz)",
      "tipo": "Ejido",
      "ciudad": null,
      "zona": "Rural",
      "estado": {
        "id": 1,
        "nombre": "Aguascalientes"
      }
    },
    {
      "codigo": "20341",
      "nombre": "El Salto de los Salado",
      "tipo": "Ranchería",
      "ciudad": null,
      "zona": "Rural",
      "estado": {
        "id": 1,
        "nombre": "Aguascalientes"
      }
    },
    {
      "codigo": "20342",
      "nombre": "San Gerardo",
      "tipo": "Condominio",
      "ciudad": null,
      "zona": "Rural",
      "estado": {
        "id": 1,
        "nombre": "Aguascalientes"
      }
    },
    {
      "codigo": "20342",
      "nombre": "San Francisco",
      "tipo": "Ranchería",
      "ciudad": null,
      "zona": "Urbano",
      "estado": {
        "id": 1,
        "nombre": "Aguascalientes"
      }
    },
    {
      "codigo": "20344",
      "nombre": "Villa Licenciado Jesús Terán (Calvillito)",
      "tipo": "Pueblo",
      "ciudad": null,
      "zona": "Rural",
      "estado": {
        "id": 1,
        "nombre": "Aguascalientes"
      }
    },
    {
      "codigo": "20345",
      "nombre": "Montoro (Mesa del Salto)",
      "tipo": "Ejido",
      "ciudad": null,
      "zona": "Rural",
      "estado": {
        "id": 1,
        "nombre": "Aguascalientes"
      }
    },
    {
      "codigo": "20346",
      "nombre": "Los Caños",
      "tipo": "Ejido",
      "ciudad": null,
      "zona": "Rural",
      "estado": {
        "id": 1,
        "nombre": "Aguascalientes"
      }
    },
    {
      "codigo": "20348",
      "nombre": "San Antonio de Peñuelas",
      "tipo": "Ejido",
      "ciudad": null,
      "zona": "Rural",
      "estado": {
        "id": 1,
        "nombre": "Aguascalientes"
      }
    },
    {
      "codigo": "20349",
      "nombre": "Aguascalientes (Lic. Jesús Terán Peredo)",
      "tipo": "Aeropuerto",
      "ciudad": null,
      "zona": "Rural",
      "estado": {
        "id": 1,
        "nombre": "Aguascalientes"
      }
    }
  ]
}
```

## Codigo filtrando por municipio

**localhost:3333/estado/{estado_id}/codigo/{codigo_postal}**

[ID de los estados](/estados)

```
estado_id : Debe ser un número de entre 1 y 32 dígitos"
codigo_postal : Debe ser un número de entre 3 y 5 dígitos"
```

:::tip
Para una busqueda más a fondo una el parametro `wc=true`

Esto hace una busqueda en ambas direcciones `%codigo_postal%`
De no usarlo solo se buscará al final `codigo_postal%`

Esto por tema de performance

Ejemplo
`http://localhost:3333/estado/9/codigo/146?wc=true`
:::

### Ejemplo
`http://localhost:3333/estado/9/codigo/146`

```json
{
  "values": 23,
  "estado": "Ciudad de México",
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
      },
      "municipio": {
        "id": 12,
        "nombre": "Tlalpan"
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
      },
      "municipio": {
        "id": 12,
        "nombre": "Tlalpan"
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
      },
      "municipio": {
        "id": 12,
        "nombre": "Tlalpan"
      }
    },
    {
      "codigo": "14610",
      "nombre": "Arenal Tepepan",
      "tipo": "Colonia",
      "ciudad": "Ciudad de México",
      "zona": "Urbano",
      "estado": {
        "id": 9,
        "nombre": "Ciudad de México"
      },
      "municipio": {
        "id": 12,
        "nombre": "Tlalpan"
      }
    },
    {
      "codigo": "14620",
      "nombre": "Club de Golf México",
      "tipo": "Colonia",
      "ciudad": "Ciudad de México",
      "zona": "Urbano",
      "estado": {
        "id": 9,
        "nombre": "Ciudad de México"
      },
      "municipio": {
        "id": 12,
        "nombre": "Tlalpan"
      }
    },
    {
      "codigo": "14629",
      "nombre": "San Buenaventura",
      "tipo": "Colonia",
      "ciudad": "Ciudad de México",
      "zona": "Urbano",
      "estado": {
        "id": 9,
        "nombre": "Ciudad de México"
      },
      "municipio": {
        "id": 12,
        "nombre": "Tlalpan"
      }
    },
    {
      "codigo": "14630",
      "nombre": "Chimalcoyoc",
      "tipo": "Pueblo",
      "ciudad": "Ciudad de México",
      "zona": "Urbano",
      "estado": {
        "id": 9,
        "nombre": "Ciudad de México"
      },
      "municipio": {
        "id": 12,
        "nombre": "Tlalpan"
      }
    },
    {
      "codigo": "14630",
      "nombre": "Villa Tlalpan",
      "tipo": "Colonia",
      "ciudad": "Ciudad de México",
      "zona": "Urbano",
      "estado": {
        "id": 9,
        "nombre": "Ciudad de México"
      },
      "municipio": {
        "id": 12,
        "nombre": "Tlalpan"
      }
    },
    {
      "codigo": "14639",
      "nombre": "San Pedro Mártir FOVISSSTE",
      "tipo": "Unidad habitacional",
      "ciudad": "Ciudad de México",
      "zona": "Urbano",
      "estado": {
        "id": 9,
        "nombre": "Ciudad de México"
      },
      "municipio": {
        "id": 12,
        "nombre": "Tlalpan"
      }
    },
    {
      "codigo": "14640",
      "nombre": "Ejidos de San Pedro Mártir",
      "tipo": "Colonia",
      "ciudad": "Ciudad de México",
      "zona": "Urbano",
      "estado": {
        "id": 9,
        "nombre": "Ciudad de México"
      },
      "municipio": {
        "id": 12,
        "nombre": "Tlalpan"
      }
    },
    {
      "codigo": "14643",
      "nombre": "Fuentes de Tepepan",
      "tipo": "Colonia",
      "ciudad": "Ciudad de México",
      "zona": "Urbano",
      "estado": {
        "id": 9,
        "nombre": "Ciudad de México"
      },
      "municipio": {
        "id": 12,
        "nombre": "Tlalpan"
      }
    },
    {
      "codigo": "14646",
      "nombre": "Valle de Tepepan",
      "tipo": "Colonia",
      "ciudad": "Ciudad de México",
      "zona": "Urbano",
      "estado": {
        "id": 9,
        "nombre": "Ciudad de México"
      },
      "municipio": {
        "id": 12,
        "nombre": "Tlalpan"
      }
    },
    {
      "codigo": "14647",
      "nombre": "Juventud Unida",
      "tipo": "Colonia",
      "ciudad": "Ciudad de México",
      "zona": "Urbano",
      "estado": {
        "id": 9,
        "nombre": "Ciudad de México"
      },
      "municipio": {
        "id": 12,
        "nombre": "Tlalpan"
      }
    },
    {
      "codigo": "14647",
      "nombre": "Movimiento Organizado de Tlalpan",
      "tipo": "Colonia",
      "ciudad": "Ciudad de México",
      "zona": "Urbano",
      "estado": {
        "id": 9,
        "nombre": "Ciudad de México"
      },
      "municipio": {
        "id": 12,
        "nombre": "Tlalpan"
      }
    },
    {
      "codigo": "14647",
      "nombre": "Rinconada El Mirador",
      "tipo": "Colonia",
      "ciudad": "Ciudad de México",
      "zona": "Urbano",
      "estado": {
        "id": 9,
        "nombre": "Ciudad de México"
      },
      "municipio": {
        "id": 12,
        "nombre": "Tlalpan"
      }
    },
    {
      "codigo": "14650",
      "nombre": "San Pedro Mártir",
      "tipo": "Pueblo",
      "ciudad": "Ciudad de México",
      "zona": "Urbano",
      "estado": {
        "id": 9,
        "nombre": "Ciudad de México"
      },
      "municipio": {
        "id": 12,
        "nombre": "Tlalpan"
      }
    },
    {
      "codigo": "14653",
      "nombre": "Heróico Colegio Militar",
      "tipo": "Colonia",
      "ciudad": "Ciudad de México",
      "zona": "Urbano",
      "estado": {
        "id": 9,
        "nombre": "Ciudad de México"
      },
      "municipio": {
        "id": 12,
        "nombre": "Tlalpan"
      }
    },
    {
      "codigo": "14654",
      "nombre": "La Magueyera",
      "tipo": "Campamento",
      "ciudad": "Ciudad de México",
      "zona": "Urbano",
      "estado": {
        "id": 9,
        "nombre": "Ciudad de México"
      },
      "municipio": {
        "id": 12,
        "nombre": "Tlalpan"
      }
    },
    {
      "codigo": "14654",
      "nombre": "Dolores Tlali",
      "tipo": "Campamento",
      "ciudad": "Ciudad de México",
      "zona": "Urbano",
      "estado": {
        "id": 9,
        "nombre": "Ciudad de México"
      },
      "municipio": {
        "id": 12,
        "nombre": "Tlalpan"
      }
    },
    {
      "codigo": "14655",
      "nombre": "Valle Verde o Lomas Verdes",
      "tipo": "Campamento",
      "ciudad": "Ciudad de México",
      "zona": "Urbano",
      "estado": {
        "id": 9,
        "nombre": "Ciudad de México"
      },
      "municipio": {
        "id": 12,
        "nombre": "Tlalpan"
      }
    },
    {
      "codigo": "14657",
      "nombre": "Tlalmille",
      "tipo": "Colonia",
      "ciudad": "Ciudad de México",
      "zona": "Urbano",
      "estado": {
        "id": 9,
        "nombre": "Ciudad de México"
      },
      "municipio": {
        "id": 12,
        "nombre": "Tlalpan"
      }
    },
    {
      "codigo": "14658",
      "nombre": "Mirador del Valle",
      "tipo": "Colonia",
      "ciudad": "Ciudad de México",
      "zona": "Urbano",
      "estado": {
        "id": 9,
        "nombre": "Ciudad de México"
      },
      "municipio": {
        "id": 12,
        "nombre": "Tlalpan"
      }
    },
    {
      "codigo": "14659",
      "nombre": "María Esther Zuno de Echeverría",
      "tipo": "Colonia",
      "ciudad": "Ciudad de México",
      "zona": "Urbano",
      "estado": {
        "id": 9,
        "nombre": "Ciudad de México"
      },
      "municipio": {
        "id": 12,
        "nombre": "Tlalpan"
      }
    }
  ]
}
```
