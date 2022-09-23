
const { Router } = require('express');
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const user = require ('./User.js');
const publication = require("./Publication")
const recruiter = require("./Recruiter")

// Ejemplo: router.use('/auth', authRouter);

router.use('/user', user)
router.use('/publication', publication)
router.use('/recruiter', recruiter)


module.exports = router;