import { test } from '@japa/runner'

test.group('Postals colonia', () => {
  test('Get colonias', async ({ client }) => {
    const response = await client.get('/estado/9/colonias/ben')

    response.assertStatus(200)
    response.assertBody({
      "meta": {
        "total": 5,
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
          "codigo": "05780",
          "nombre": "Agua Bendita",
          "tipo": "Colonia",
          "ciudad": "Ciudad de México",
          "zona": "Urbano",
          "municipio": {
            "id": 4,
            "nombre": "Cuajimalpa de Morelos"
          }
        },
        {
          "codigo": "07250",
          "nombre": "Benito Juárez",
          "tipo": "Colonia",
          "ciudad": "Ciudad de México",
          "zona": "Urbano",
          "municipio": {
            "id": 5,
            "nombre": "Gustavo A. Madero"
          }
        },
        {
          "codigo": "07259",
          "nombre": "Ampliación Benito Juárez",
          "tipo": "Colonia",
          "ciudad": "Ciudad de México",
          "zona": "Urbano",
          "municipio": {
            "id": 5,
            "nombre": "Gustavo A. Madero"
          }
        },
        {
          "codigo": "09859",
          "nombre": "Benito Juárez",
          "tipo": "Colonia",
          "ciudad": "Ciudad de México",
          "zona": "Urbano",
          "municipio": {
            "id": 7,
            "nombre": "Iztapalapa"
          }
        },
        {
          "codigo": "15620",
          "nombre": "México (Lic. Benito Juárez)",
          "tipo": "Aeropuerto",
          "ciudad": "Ciudad de México",
          "zona": "Urbano",
          "municipio": {
            "id": 17,
            "nombre": "Venustiano Carranza"
          }
        }
      ]
    })
  })

  test('Pagination 1rst page', async ({ client }) => {
    const response = await client.get('/estado/20/colonias/ben')

    response.assertStatus(200)
    response.assertBody({
      "meta": {
        "total": 46,
        "perPage": 15,
        "currentPage": 1,
        "lastPage": 4,
        "firstPage": 1,
        "firstPageUrl": "/?page=1",
        "lastPageUrl": "/?page=4",
        "nextPageUrl": "/?page=2",
        "previousPageUrl": null
      },
      "data": [
        {
          "codigo": "68030",
          "nombre": "Benito Juárez",
          "tipo": "Colonia",
          "ciudad": "Oaxaca de Juárez",
          "zona": "Urbano",
          "municipio": {
            "id": 67,
            "nombre": "Oaxaca de Juárez"
          }
        },
        {
          "codigo": "68103",
          "nombre": "Benito Juárez",
          "tipo": "Unidad habitacional",
          "ciudad": "Oaxaca de Juárez",
          "zona": "Urbano",
          "municipio": {
            "id": 67,
            "nombre": "Oaxaca de Juárez"
          }
        },
        {
          "codigo": "68200",
          "nombre": "Benito Juárez",
          "tipo": "Colonia",
          "ciudad": null,
          "zona": "Urbano",
          "municipio": {
            "id": 338,
            "nombre": "Villa de Etla"
          }
        },
        {
          "codigo": "68258",
          "nombre": "Benito Juárez",
          "tipo": "Fraccionamiento",
          "ciudad": null,
          "zona": "Urbano",
          "municipio": {
            "id": 293,
            "nombre": "San Pablo Etla"
          }
        },
        {
          "codigo": "68325",
          "nombre": "INFONAVIT Benito Juárez",
          "tipo": "Unidad habitacional",
          "ciudad": "San Juan Bautista Tuxtepec",
          "zona": "Urbano",
          "municipio": {
            "id": 184,
            "nombre": "San Juan Bautista Tuxtepec"
          }
        },
        {
          "codigo": "68336",
          "nombre": "Obrera Benito Juárez",
          "tipo": "Colonia",
          "ciudad": "San Juan Bautista Tuxtepec",
          "zona": "Urbano",
          "municipio": {
            "id": 184,
            "nombre": "San Juan Bautista Tuxtepec"
          }
        },
        {
          "codigo": "68404",
          "nombre": "Benito Juárez",
          "tipo": "Colonia",
          "ciudad": "Loma Bonita",
          "zona": "Semiurbano",
          "municipio": {
            "id": 44,
            "nombre": "Loma Bonita"
          }
        },
        {
          "codigo": "68405",
          "nombre": "San Benito de Encinal",
          "tipo": "Pueblo",
          "ciudad": "Loma Bonita",
          "zona": "Rural",
          "municipio": {
            "id": 44,
            "nombre": "Loma Bonita"
          }
        },
        {
          "codigo": "68417",
          "nombre": "Graciano Benítez",
          "tipo": "Ranchería",
          "ciudad": "Cosolapa",
          "zona": "Rural",
          "municipio": {
            "id": 21,
            "nombre": "Cosolapa"
          }
        },
        {
          "codigo": "68422",
          "nombre": "Benito Juárez",
          "tipo": "Colonia",
          "ciudad": "Vicente Camalote",
          "zona": "Rural",
          "municipio": {
            "id": 2,
            "nombre": "Acatlán de Pérez Figueroa"
          }
        },
        {
          "codigo": "68434",
          "nombre": "Benito Juárez II (San Martín)",
          "tipo": "Ejido",
          "ciudad": null,
          "zona": "Rural",
          "municipio": {
            "id": 278,
            "nombre": "San Miguel Soyaltepec"
          }
        },
        {
          "codigo": "68448",
          "nombre": "Benemérito Juárez",
          "tipo": "Pueblo",
          "ciudad": null,
          "zona": "Rural",
          "municipio": {
            "id": 184,
            "nombre": "San Juan Bautista Tuxtepec"
          }
        },
        {
          "codigo": "68540",
          "nombre": "Benito Juárez",
          "tipo": "Colonia",
          "ciudad": "Teotitlán de Flores Magón",
          "zona": "Rural",
          "municipio": {
            "id": 545,
            "nombre": "Teotitlán de Flores Magón"
          }
        },
        {
          "codigo": "68783",
          "nombre": "Benito Juárez",
          "tipo": "Pueblo",
          "ciudad": null,
          "zona": "Rural",
          "municipio": {
            "id": 365,
            "nombre": "Santa Catarina Lachatao"
          }
        },
        {
          "codigo": "69204",
          "nombre": "Yucuñuti de Benito Juárez",
          "tipo": "Pueblo",
          "ciudad": null,
          "zona": "Rural",
          "municipio": {
            "id": 549,
            "nombre": "Tezoatlán de Segura y Luna"
          }
        }
      ]
    })
  })

  test('Pagination last page', async ({ client }) => {
    const response = await client.get('/estado/20/colonias/ben?page=4')

    response.assertStatus(200)
    response.assertBody({
      "meta": {
        "total": 46,
        "perPage": 15,
        "currentPage": 4,
        "lastPage": 4,
        "firstPage": 1,
        "firstPageUrl": "/?page=1",
        "lastPageUrl": "/?page=4",
        "nextPageUrl": null,
        "previousPageUrl": "/?page=3"
      },
      "data": [
        {
          "codigo": "71985",
          "nombre": "Benito Juárez",
          "tipo": "Colonia",
          "ciudad": "Puerto Escondido",
          "zona": "Semiurbano",
          "municipio": {
            "id": 318,
            "nombre": "San Pedro Mixtepec -Dto. 22 -"
          }
        }
      ]
    })
  })
})
