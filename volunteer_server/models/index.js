const Sequelize = require('sequelize');

const db = require("../config/database");
const Events = require('./events');
const Users = require('./users');
const EventsParticipents = require('./events_participents');
const Cities = require('./cities');
const Organizations = require('./organizations');
const OrganizationsMembers = require('./organizations_members');
const OrganizationsEvents = require('./organizations_events');

// events_participents
// const Companies = require('./companies');
// const Companies_files = require('./companies_files');
// const Customers = require('./customers');
// const Employees = require('./employees');
// const Employees_files = require('./employees_files');
// const Extra = require('./extra');
// const Extra_orders = require('./extra_orders');
// const Orders = require('./orders');
// const Roles = require('./roles');
// const Stop_stations_orders = require('./stop_stations_orders');
// const Trip = require('./trip');
// const Vehicle = require('./vehicle');
// const Vehicle_type = require('./vehicle_type');
// const Cities = require('./cities');
// const Available_vehicles = require('./available_vehicles');
// const Closed_orders = require('./closed_orders')
// const Closed_available_vehicles = require('./closed_available_vehicles')
// const Waiting_customers = require('./waiting_customers')
// const Waiting_files = require('./waiting_files')

const events = Events(db, Sequelize);
const users = Users(db, Sequelize);
const events_participents = EventsParticipents(db, Sequelize);
const cities = Cities(db, Sequelize);
const organizations = Organizations(db, Sequelize);
const organizations_members = OrganizationsMembers(db, Sequelize);
const organizations_events = OrganizationsEvents(db, Sequelize);






// // relationship orders events
users.hasMany(events, { foreignKey: 'creator' })
events.belongsTo(users, { foreignKey: 'creator' })

organizations.hasMany(organizations_events, { foreignKey: 'creator' })
organizations_events.belongsTo(organizations, { foreignKey: 'creator' })

db.sync({ force: false }).then(() => {
    console.log('created');
});

module.exports = {
  events,
  users,
  events_participents,
  cities,
  organizations,
  organizations_members,
  organizations_events
}
