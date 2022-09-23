const { Router } = require('express');
const { createUser, updateUser } = require('../controllers/user');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.post("/create", async(req,res)=>{
    const {email, fullname} = req.body

    try {
        const result = await createUser(email,fullname)
        res.send(result)
    } catch (error) {
        res.status(404).send("Algo salio mal!")
    }
})

router.put("/update",async(req,res)=>{
    const {email} = req.body

    try {
        const result = await updateUser(email)
        res.send(result)
    } catch (error) {
        res.status(404).send(error)
    }
})


module.exports = router;
