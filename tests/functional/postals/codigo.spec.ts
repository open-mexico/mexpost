import { test } from '@japa/runner'

test.group('Postals', () => {

  test('Error because of the parameter length', async ({ client }) => {
    const response = await client.get('/codigo/146')

    response.assertStatus(422)
    response.assertBody({
      "errors": [
        {
          "message": "El código postal debe ser un número de 4 o 5 dígitos",
          "rule": "regex",
          "field": "codigo"
        }
      ]
    })
  })

  test('Error because the parameter is not number', async ({ client }) => {
    const response = await client.get('/codigo/hola')

    response.assertStatus(422)
    response.assertBody({
      "errors": [
        {
          "message": "El código postal debe ser un número de 4 o 5 dígitos",
          "rule": "regex",
          "field": "codigo"
        }
      ]
    })
  })

  test('Get postals', async ({ client }) => {
    const response = await client.get('/codigo/1460')

    response.assertStatus(200)
    response.assertBody({
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
    })
  })

  test('Get postals with wildcard', async ({ client }) => {
    const response = await client.get('/codigo/1460?wc=true')

    response.assertStatus(200)
    response.assertBody({
      "values": 30,
      "data": [
        {
          "codigo": "01460",
          "nombre": "Alfonso XIII",
          "tipo": "Colonia",
          "ciudad": "Ciudad de México",
          "zona": "Urbano",
          "estado": {
            "id": 9,
            "nombre": "Ciudad de México"
          }
        },
        {
          "codigo": "11460",
          "nombre": "Lago Norte",
          "tipo": "Colonia",
          "ciudad": "Ciudad de México",
          "zona": "Urbano",
          "estado": {
            "id": 9,
            "nombre": "Ciudad de México"
          }
        },
        {
          "codigo": "11460",
          "nombre": "Lago Sur",
          "tipo": "Colonia",
          "ciudad": "Ciudad de México",
          "zona": "Urbano",
          "estado": {
            "id": 9,
            "nombre": "Ciudad de México"
          }
        },
        {
          "codigo": "11460",
          "nombre": "Dos Lagos",
          "tipo": "Colonia",
          "ciudad": "Ciudad de México",
          "zona": "Urbano",
          "estado": {
            "id": 9,
            "nombre": "Ciudad de México"
          }
        },
        {
          "codigo": "11460",
          "nombre": "Los Manzanos",
          "tipo": "Colonia",
          "ciudad": "Ciudad de México",
          "zona": "Urbano",
          "estado": {
            "id": 9,
            "nombre": "Ciudad de México"
          }
        },
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
        },
        {
          "codigo": "21460",
          "nombre": "Morelos",
          "tipo": "Colonia",
          "ciudad": "Tecate",
          "zona": "Urbano",
          "estado": {
            "id": 2,
            "nombre": "Baja California"
          }
        },
        {
          "codigo": "21460",
          "nombre": "Jardines del Pedregal",
          "tipo": "Colonia",
          "ciudad": "Tecate",
          "zona": "Urbano",
          "estado": {
            "id": 2,
            "nombre": "Baja California"
          }
        },
        {
          "codigo": "21460",
          "nombre": "San Fernando",
          "tipo": "Fraccionamiento",
          "ciudad": "Tecate",
          "zona": "Urbano",
          "estado": {
            "id": 2,
            "nombre": "Baja California"
          }
        },
        {
          "codigo": "21460",
          "nombre": "Valencia",
          "tipo": "Fraccionamiento",
          "ciudad": "Tecate",
          "zona": "Urbano",
          "estado": {
            "id": 2,
            "nombre": "Baja California"
          }
        },
        {
          "codigo": "21460",
          "nombre": "El Pedregal",
          "tipo": "Fraccionamiento",
          "ciudad": "Tecate",
          "zona": "Urbano",
          "estado": {
            "id": 2,
            "nombre": "Baja California"
          }
        },
        {
          "codigo": "21460",
          "nombre": "Emiliano Zapata",
          "tipo": "Colonia",
          "ciudad": "Tecate",
          "zona": "Urbano",
          "estado": {
            "id": 2,
            "nombre": "Baja California"
          }
        },
        {
          "codigo": "21460",
          "nombre": "La Viñita",
          "tipo": "Colonia",
          "ciudad": "Tecate",
          "zona": "Urbano",
          "estado": {
            "id": 2,
            "nombre": "Baja California"
          }
        },
        {
          "codigo": "31460",
          "nombre": "San Martín",
          "tipo": "Colonia",
          "ciudad": "Chihuahua",
          "zona": "Urbano",
          "estado": {
            "id": 8,
            "nombre": "Chihuahua"
          }
        },
        {
          "codigo": "31460",
          "nombre": "David Alfaro Siqueiros",
          "tipo": "Colonia",
          "ciudad": "Chihuahua",
          "zona": "Urbano",
          "estado": {
            "id": 8,
            "nombre": "Chihuahua"
          }
        },
        {
          "codigo": "31460",
          "nombre": "Cerro de la Cruz",
          "tipo": "Colonia",
          "ciudad": "Chihuahua",
          "zona": "Urbano",
          "estado": {
            "id": 8,
            "nombre": "Chihuahua"
          }
        },
        {
          "codigo": "31460",
          "nombre": "Ramiro Valles",
          "tipo": "Colonia",
          "ciudad": "Chihuahua",
          "zona": "Urbano",
          "estado": {
            "id": 8,
            "nombre": "Chihuahua"
          }
        },
        {
          "codigo": "31460",
          "nombre": "PRI Municipal",
          "tipo": "Colonia",
          "ciudad": "Chihuahua",
          "zona": "Urbano",
          "estado": {
            "id": 8,
            "nombre": "Chihuahua"
          }
        },
        {
          "codigo": "41460",
          "nombre": "Caxitepec",
          "tipo": "Ranchería",
          "ciudad": null,
          "zona": "Rural",
          "estado": {
            "id": 12,
            "nombre": "Guerrero"
          }
        },
        {
          "codigo": "41460",
          "nombre": "Tonalapa",
          "tipo": "Pueblo",
          "ciudad": null,
          "zona": "Rural",
          "estado": {
            "id": 12,
            "nombre": "Guerrero"
          }
        },
        {
          "codigo": "61460",
          "nombre": "Manzana de San Luis",
          "tipo": "Pueblo",
          "ciudad": null,
          "zona": "Urbano",
          "estado": {
            "id": 16,
            "nombre": "Michoacán de Ocampo"
          }
        },
        {
          "codigo": "71460",
          "nombre": "Santa María Sola",
          "tipo": "Pueblo",
          "ciudad": null,
          "zona": "Rural",
          "estado": {
            "id": 20,
            "nombre": "Oaxaca"
          }
        },
        {
          "codigo": "81460",
          "nombre": "Chutamonas",
          "tipo": "Colonia",
          "ciudad": "Guamúchil",
          "zona": "Urbano",
          "estado": {
            "id": 25,
            "nombre": "Sinaloa"
          }
        },
        {
          "codigo": "81460",
          "nombre": "Bebelamas INFONAVIT",
          "tipo": "Colonia",
          "ciudad": "Guamúchil",
          "zona": "Urbano",
          "estado": {
            "id": 25,
            "nombre": "Sinaloa"
          }
        },
        {
          "codigo": "81460",
          "nombre": "Del Evora",
          "tipo": "Colonia",
          "ciudad": "Guamúchil",
          "zona": "Urbano",
          "estado": {
            "id": 25,
            "nombre": "Sinaloa"
          }
        },
        {
          "codigo": "81460",
          "nombre": "Morelos",
          "tipo": "Colonia",
          "ciudad": "Guamúchil",
          "zona": "Urbano",
          "estado": {
            "id": 25,
            "nombre": "Sinaloa"
          }
        },
        {
          "codigo": "91460",
          "nombre": "Xomotla",
          "tipo": "Congregación",
          "ciudad": null,
          "zona": "Rural",
          "estado": {
            "id": 30,
            "nombre": "Veracruz de Ignacio de la Llave"
          }
        },
        {
          "codigo": "91460",
          "nombre": "Alto Lucero",
          "tipo": "Villa",
          "ciudad": null,
          "zona": "Rural",
          "estado": {
            "id": 30,
            "nombre": "Veracruz de Ignacio de la Llave"
          }
        }
      ]
    })
  })

})

