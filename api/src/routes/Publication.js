const { Router } = require('express');
const { createPublication, getPublication } = require('../controllers/publication');



const router = Router();



router.post("/create", async(req,res)=>{
    const {title,description,location,workModality,category,typeOfJob, email} = req.body

    try {
        const result = await createPublication(title,description,location,workModality,category,typeOfJob, email)
        res.send(result)
    } catch (error) {
        res.status(404).send(error.msg)
    }
})


router.get("/get", async(req,res)=>{
    try {
        const result = await getPublication()
        res.send(result)
    } catch (error) {
        res.status(404).send(error)
    }
})










module.exports = router;
