const {Publication, User} = require("../db")

module.exports= {
    createPublication: async(title,description,location,workModality,category,typeOfJob,email)=>{

        if(!title || !description || !location || !workModality || !category || !typeOfJob || !email){
            throw new Error("faltan datos!")
        }

        const result = await Publication.create({
            title,
            description,
            location,
            workModality,
            category,
            typeOfJob
        })

        const user = await User.findByPk(email)

        if(user.dataValues.role.toLowerCase() !== "recruiter") throw new Error({msg: "Solo puedes crear una publicacion si eres recruiter"})

        await user.addPublications(result)

        return result
    },
    getPublication: async()=>{

        const result = await Publication.findAll({
            include:[{model:User}]
        })


        return result
    }
}