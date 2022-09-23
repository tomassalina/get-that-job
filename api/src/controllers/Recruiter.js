const {Recruiter} = require("../db")

module.exports = {
    createRecruiter: async(email, name)=>{
        if(!email || !name){
            throw new Error("Faltan datos!")
        }

        const result = await Recruiter.findOrCreate({
            where:{
                email,
                name
            }
        })

        return result
    }
    
}