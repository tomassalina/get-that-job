const { Router } = require('express');
const { createUser } = require('../controllers/user');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.post("/create", (req,res)=>{
    const {email, fullname} = req.body

    try {
        const result = createUser(email,fullname)
        res.send(result)
    } catch (error) {
        res.status(404).send("Algo salio mal!")
    }
})


module.exports = router;
