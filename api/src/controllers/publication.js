const {Publication} = require("../db")

module.exports= {
    createPublication: async(title,description,location,workModality,category,typeOfJob,email)=>{

        if(!title || !description || !location || !workModality || !category || !typeOfJob || !email){
            throw new Error("faltan datos!")
        }

        const [result, bool] = await Publication.findOrCreate({
            where:{
                title,
                description,
                location,
                workModality,
                category,
                typeOfJob
            }
        })


        await result.addRecruiters(email)

        return result
    }
}