const User = require("../db")


module.exports = {
    createUser:async (email,fullname)=>{
        if(!email || !fullname || !role) return "Faltan datos"

        const result = await User.create({email,fullname})
        
        return result
    
    }
    }