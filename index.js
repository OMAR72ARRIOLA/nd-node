import express from 'express'
import usuarioRoutes from './routes/usuarioRoutes.js';
import db from "./config/db.js"

//crear la app 
const app = express()

//connexion a la db
try{
    await db.authenticate();
    console.log("conexion correcta a la bd")
}catch(error){
    console.log(error)
}

//habilitar pug
app.set ('view engine' , 'pug')
app.set('views', './views')

// carpeta publica 
app.use( express.static('public') )


//router
app.use('/auth', usuarioRoutes)


//definir un puerto
const port =3000;
app.listen(port, () =>{
    console.log(`el servidor esta funcionando en el puerto ${port}`)
});