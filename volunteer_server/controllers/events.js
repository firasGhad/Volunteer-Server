const { events, users, events_participents } = require('../models')
const { Op } = require("sequelize");
const Sequelize = require('sequelize');



const getEvents = async (city) => {
  try {
    let where ={};
    if(city != 'all'){
      where = {
        location: city
      }
    }
    let allEvents = await events.findAll({
      where: where
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
    status: event.status

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
  getMyEvents

}

