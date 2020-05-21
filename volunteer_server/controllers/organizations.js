const { events, users, events_participents, organizations_events, organizations, organizations_members } = require('../models')
const { Op } = require("sequelize");
const Sequelize = require('sequelize');


const joinOrganization = async (data) => {
  try {
    const newParticipent = await organizations_members.create({
      organization_id: data,
      user_id: '1'//from cookie
    })

    return "Joined successfully"
  } catch (err) {
    throw new Error(`Can't create service: ${err.message}`)
  }
}



module.exports = {
  joinOrganization


}

