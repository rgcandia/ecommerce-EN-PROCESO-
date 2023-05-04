import { Router } from 'express'
import productHandler from './handlers/productHandler.js'
const router = Router();
router.get('/productos',productHandler)
export default  router;