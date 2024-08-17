import express from 'express'
import {getFruits, getFruit, insertFruit, deleteFruit, updateFruit} from '../controller/fruitController.js'
const router = express.Router()
import { verifyAToken } from '../middleware/authenticate.js'

router.post('/cart',verifyAToken,(req,res)=>{
    res.json({message:"You've added an item to cart"})
})
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