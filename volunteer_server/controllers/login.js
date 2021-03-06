const { users } = require('../models')



const customersLogin = async (userDetails) => {
    try {
        const user = await users.findOne({
            attributes: ['id', 'first_name', 'last_name'],
            where: {
                user_name: userDetails.user_name,
                password: userDetails.password,
            }
        })
        if (user) return user

    } catch (err) {
        throw new Error(err.message)
    }

}




module.exports = {
    customersLogin,
 
}