var express = require('express');
var router = express.Router();
const organizationsController = require('../controllers/organizations')


// join organizations events
router.post('/join/:id', async function (req, res, next) {
  try {
    const newMember = await organizationsController.joinOrganization(req.params.id)
    res.status(200).json(newMember);
  } catch (err) {
    res.status(500).json(err.message)
  }
});

//get participents for a specific event
router.get('/participents/:id', async function (req, res, next) {
  try{
    const participents = await eventsController.getEventParticipents(req.params.id)
    res.status(200).json(participents);
  }catch(err){
    res.status(500).json(err.message)
  }
});
// get my events
router.get('/my_events', async function (req, res, next) {
  try {
    const events = await eventsController.getMyEvents()
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json(err.message)
  }
});

router.get('/includes_me', async function (req, res, next) {
  try {
    const events = await eventsController.getEventsIncludesMeAsParticipent()
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json(err.message)
  }
});


// Create new event
router.post('/', async function (req, res, next) {
  try {
    const newEvent = await eventsController.createEvent(req.body)
    res.status(200).json(newEvent);
  } catch (err) {
    res.status(500).json(err.message)
  }
});


// get events
router.get('/', async function (req, res, next) {
  try {
    const city = req.query.city || 'all';
    const type = req.query.type || 'all';
    const query = {
      city: city,
      type: type
    }

    const events = await eventsController.getEvents(query)
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json(err.message)
  }
});

//get specific event
router.get('/:id', async function (req, res, next) {
  try{
    const event = await eventsController.getEvent(req.params.id)
    res.status(200).json(event);
  }catch(err){
    res.status(500).json(err.message)
  }
});



// join event
router.post('/join_event', async function (req, res, next) {
  try {
    const newParticipent = await eventsController.joinEvent(req.body)
    res.status(200).json(newParticipent);
  } catch (err) {
    res.status(500).json(err.message)
  }
});

module.exports = router;
