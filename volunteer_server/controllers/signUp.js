const { users, organizations } = require('../models')
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
        return "Created successfully"
      }  catch (err) {
        throw new Error(err.message)
    }

}

const organizationSignUp = async (userDetails, userId) => {
    try {
        const newUser = await organizations.create({
            name: userDetails.name,
            city: userDetails.city,
            zip: userDetails.zip,
            phone: userDetails.phone,
            t_phone: userDetails.t_phone,
            email: userDetails.email,
            password: userDetails.password,
            address: userDetails.address,
            fax: userDetails.fax,
            rank: 1
        })
    
        return "Created successfully"
      }  catch (err) {
        throw new Error(err.message)
    }

}



module.exports = {
    signUp,
    organizationSignUp
   
}