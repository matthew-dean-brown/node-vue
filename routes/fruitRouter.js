import express from 'express'
import {getFruits, getFruit, insertFruit, deleteFruit, updateFruit} from '../controller/fruitController.js'
const router = express.Router()

router.
    route('/')
        .get(getFruits)
        .post(insertFruit)
        
router.
    route('/:id')
        .get(getFruit)
        .delete(deleteFruit)
        .patch(updateFruit)

export default router