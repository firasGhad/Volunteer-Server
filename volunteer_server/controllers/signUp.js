const { users } = require('../models')
const { Op } = require("sequelize");



const signUp = async (userDetails, userId) => {
    try {
        const newUser = await users.create({
            first_name: userDetails.first_name,
            last_name: userDetails.last_name,
            user_name: userDetails.user_name,
            phone: userDetails.phone,
            t_phone: userDetails.t_phone,
            email: userDetails.email,
            password: userDetails.password,
            address: userDetails.address,
            gender: userDetails.gender,
            rank: 1
        })
    
        return "נוצר בהצלחה"
      }  catch (err) {
        throw new Error(err.message)
    }

}



module.exports = {
    signUp
   
}