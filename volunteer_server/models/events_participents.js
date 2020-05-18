

module.exports = (db, type) => {
    return db.define('events_participents', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_id: {
            type: type.INTEGER
        },
        event_id: {
            type: type.INTEGER
        }
        
    }, { timestamps: false, underscored: true })
} 