import express from 'express'
import { getContact, postContact } from '../controllers/contactCompany.js'

const route = express.Router()

route.get('/contactCompany', getContact)
route.post('/contactCompany', postContact)

export default route