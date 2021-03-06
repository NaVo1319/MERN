const Router = require('express')
const router = new Router()
const authMiddleware = require('../middleware/auth.middleware')
const fileController = require('../controllers/fileController')

router.post('',authMiddleware, fileController.create)
router.get('',authMiddleware, fileController.getFiles)
router.get('/all', fileController.getAllFiles)
router.post('/upload',authMiddleware, fileController.uploadFile)
router.get('/:idUser/:idFile',fileController.downloadFile)
router.post('/:idUser/:idFile',fileController.LikeViews)
router.delete('/:idUser/:idFile',authMiddleware,fileController.deleteFile)
router.get('/:idUser',authMiddleware,fileController.getFavoriteFile)

module.exports = router