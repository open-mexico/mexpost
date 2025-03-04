/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const PostalsController = () => import('#controllers/postals_controller')
const MunicipiosController = () => import('#controllers/municipios_controller')

router.get('/', async () => {
  return `To know more about the API, please visit the documentation at https://open-mexico.github.io/mexpost/`
})

/**
 * CODIGOS Y COLONIAS
 * Retrieves postal data based on the provided codigo.
 */
router.get('/codigo/:codigo', [PostalsController, 'codigo'])

router.get('/estado/:estado/codigo/:codigo', [PostalsController, 'codigoEstado'])

router.get('/estado/:estado/colonias/:colonia', [PostalsController, 'colonia'])

/**
 * Municipios
 */
router.get('/estado/:estado/municipio/:municipio', [MunicipiosController, 'municipio'])
