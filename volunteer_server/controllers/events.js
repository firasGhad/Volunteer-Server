const { events, users, events_participents } = require('../models')
const { Op } = require("sequelize");
const Sequelize = require('sequelize');

const getEventsIncludesMeAsParticipent = async () => {
  try {
    let allEvents = await events_participents.findAll({
      where: {
        user_id: 1
      }

    });
    allEvents = allEvents.map((event) => {
      return event.event_id
    })
    allEvents = await events.findAll({
      where: {
        id:
      {
        [Op.in]: allEvents
      }
      }
    })
    
      return allEvents;
  } catch (error) {
    throw new Error(`Can't get events: ${error.message}`);
  }


}

const getEventParticipents = async (id) => {
  try {
    let allUsers = await events_participents.findAll({
      attributes: ['user_id'],
      where: {
        event_id: id
      }
    });

    allUsers = allUsers.map((user) => user.user_id)

    


    allUsers = await users.findAll({
      where: {
        id:
      {
        [Op.in]: allUsers
      }
      }
    })
    
      return allUsers;
  } catch (error) {
    throw new Error(`Can't get events: ${error.message}`);
  }


}



const getEvents = async (query) => {
  try {
    let where ={};
    if(query.city != 'all'){
      where = {
        location: query.city
      }
    }
    if(query.type != 'all'){
      where = {
        type: query.type
      }
    }
    let allEvents = await events.findAll({
      where: where,
      include: [{
        model: users,
      }]
    });
      return allEvents;
  } catch (error) {
    throw new Error(`Can't get events: ${error.message}`);
  }


}

const getMyEvents = async () => {
  try {
    let allEvents = await events.findAll({
      where: {
        creator: 1
      }
    });
      return allEvents;
  } catch (error) {
    throw new Error(`Can't get events: ${error.message}`);
  }


}

const getEvent = async (id) => {
  try {
    const event = await events.findOne({
      where: {
        id: id
      },
      include:[
        {model: users}
      ]
    });
    return event;
  } catch (error) {
    throw new Error(`Can't get event: ${error.message}`);
  }
}

const joinEvent = async (data) => {
  try {
    const newParticipent = await events_participents.create({
      event_id: data.event_id,
      user_id: '1'//from cookie
    })

    return "Joined successfully"
  } catch (err) {
    throw new Error(`Can't create service: ${err.message}`)
  }
}

const createEvent = async (event) => {
  try {
    const newService = await events.create({
      creator: '1',//from cookie
      location: event.location,
      description: event.description,
      name: event.name,
      location: event.location,
    participents: event.participents,
    participents_limit: event.participentsLimit,
    creation_time: event.creationTime,
    creation_date: event.creationDate,
    start_time: event.startTime,
    start_date: event.startDate,
    end_time: event.endTime,
    end_date: event.endDate,
    status: event.status,
    type: event.type,
    rating: 1

    })

    return "נוצר בהצלחה"
  } catch (err) {
    throw new Error(`Can't create event: ${err.message}`)
  }
}

module.exports = {
 
  createEvent,
  getEvents,
  getEvent,
  joinEvent,
  getMyEvents,
  getEventsIncludesMeAsParticipent,
  getEventParticipents

}

