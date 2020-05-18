

module.exports = (db, type) => {
    return db.define('events', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        creator: {
            type: type.INTEGER
        },
        name: {
            type: type.STRING(50)
        },
        location: {
            type: type.STRING(50)
        },
        status: {
            type: type.STRING(50)
        },
        description: {
            type: type.TEXT
        },
        participents: {
            type: type.TEXT
        },
        participents_limit: {
            type: type.INTEGER
        },
        creation_time: {
            type: type.TEXT
        },
        creation_date: {
            type: type.TEXT
        },
        start_time: {
            type: type.TEXT
        },
        start_date: {
            type: type.TEXT
        },
        end_time: {
            type: type.TEXT
        },
        end_date: {
            type: type.TEXT
        },
    }, { timestamps: false, underscored: true })
} 