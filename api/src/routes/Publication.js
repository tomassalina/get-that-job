const { Router } = require('express');
const { createPublication } = require('../controllers/publication');



const router = Router();



router.post("/create", (req,res)=>{
    const {title,description,location,workModality,category,typeOfJob, email} = req.body

    try {
        const result = createPublication(title,description,location,workModality,category,typeOfJob, email)
        res.send(result)
    } catch (error) {
        res.status(404).send(error)
    }
})










module.exports = router;
