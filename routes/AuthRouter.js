const router = require('express').Router()
const controller = require('../controllers/AuthController')
const middleware = require('../middleware')

router.post('/register', controller.Register)
router.post('/login', controller.Login)
router.get('/user/:id', controller.getUserById)
router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession
)
router.put(
  '/update-password',
  middleware.stripToken,
  middleware.verifyToken,
  controller.updatePassword
)
router.put(
  '/update-name',
  middleware.stripToken,
  middleware.verifyToken,
  controller.updateName
)
router.delete(
  '/destroy/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.destroyAccount
)

module.exports = router
