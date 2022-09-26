const {User} = require("../db.js")


module.exports = {
    createUser:async (email,fullname)=>{
        if(!email || !fullname) return "Faltan datos"

        const result = await User.findOrCreate({
            where:{
                email,
                fullname
            }
        })
        console.log(result)
        
        return result
    
    },
    updateUser: async(email)=>{
        if(!email) throw new Error("Faltan datos!")

        const user = await User.findByPk(email)

        let flag = user.dataValues.role.toLowerCase() === "profesional" ? "recruiter" : "profesional"

        await User.update({role: flag},{
            where:{
                email
            }
        })

        return "Update finalizado"
    }
    }