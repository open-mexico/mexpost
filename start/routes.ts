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

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.get('/codigo/:codigo', [PostalsController, 'codigo'])

router.get('/estado/:estado/codigo/:codigo', [PostalsController, 'codigoEstado'])
router.get('/estado/:estado/colonias/:colonia', [PostalsController, 'colonia'])
