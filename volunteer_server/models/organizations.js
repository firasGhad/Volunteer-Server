

module.exports = (db, type) => {
    return db.define('organizations', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: type.STRING(50)
        },
        city: {
            type: type.STRING(50)
        },
        zip: {
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
        fax: {
            type: type.STRING(10)
        },
        rank: {
            type: type.INTEGER
        }
    }, { timestamps: false, underscored: true })
} 
