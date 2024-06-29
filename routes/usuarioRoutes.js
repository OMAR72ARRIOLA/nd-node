import express from 'express';
import { formularioLogin, formularioRegistro } from '../controllers/ususarioController.js';
const router = express.Router();

//router
router.get('/login' , formularioLogin);
router.get('/registro' ,formularioRegistro)


export default router