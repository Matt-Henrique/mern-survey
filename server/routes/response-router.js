import { Router } from 'express'

import { createResponse, updateResponse, deleteResponse, getResponse, getResponses } from '../controllers/response-controller.js'

const router = Router()

router.post('/response', createResponse)
router.put('/response/:id', updateResponse)
router.delete('/response/:id', deleteResponse)
router.get('/response/:id', getResponse)
router.get('/responses', getResponses)

export default router
