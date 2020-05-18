

module.exports = (db, type) => {
    return db.define('users', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        first_name: {
            type: type.STRING(50)
        },
        last_name: {
            type: type.STRING(50)
        },
        user_name: {
            type: type.STRING(11)
        },
        phone: {
            type: type.STRING(10)
        },
        t_phone: {
            type: type.STRING(10)
        },
        email: {
            type: type.STRING(100)
        },
        password: {
            type: type.TEXT
        },
        address: {
            type: type.STRING(100)
        },
        gender: {
            type: type.ENUM('male', 'female', 'other', 'prefere not to say')
        }
    }, { timestamps: false, underscored: true })
} 
