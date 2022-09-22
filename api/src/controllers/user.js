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
    
    }
    }