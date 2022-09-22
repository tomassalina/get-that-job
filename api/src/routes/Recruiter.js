const { Router } = require('express');
const { createRecruiter } = require('../controllers/Recruiter');




const router = Router();


router.post("/create", (req,res)=>{
    const {email,name} = req.body

    try {
        const result = createRecruiter(email,name)
        res.send(result)
    } catch (error) {
        res.status(404).send(error)
    }
})






module.exports = router;