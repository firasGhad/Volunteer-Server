

module.exports = (db, type) => {
    return db.define('organizations_members', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_id: {
            type: type.INTEGER
        },
        organization_id: {
            type: type.INTEGER
        }
        
    }, { timestamps: false, underscored: true })
} 