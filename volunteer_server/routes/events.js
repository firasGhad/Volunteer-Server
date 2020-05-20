var express = require('express');
var router = express.Router();
const eventsController = require('../controllers/events')


// get my events
router.get('/my_events', async function (req, res, next) {
  try {
    const events = await eventsController.getMyEvents()
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json(err.message)
  }
});
// router.get('/getusercompanyordersandonetookthem', authRoles(5, 6), async function (req, res, next) {
//   const page = req.query.page || 1;
//   const size = req.query.size || 20;

//   query = Object.assign({}, {
//     size, 
//     page
//   });
//   try {
//     const orders = await ordersController.getCompanyOrdersAndOneTookThem(query, req.userId)
//     res.status(200).json(orders);
//   } catch (err) {
//     res.status(500).json(err.message)
//   }
// });
// router.get('/getusercompanyordersandnoonetookthem', authRoles(5, 6), async function (req, res, next) {
//   const page = req.query.page || 1;
//   const size = req.query.size || 20;

//   query = Object.assign({}, {
//     size, 
//     page
//   });
//   try {
//     const orders = await ordersController.getCompanyOrdersAndNoOneTookThem(query, req.userId)
//     res.status(200).json(orders);
//   } catch (err) {
//     res.status(500).json(err.message)
//   }
// });
// // get orders
// router.get('/getuserordersandnoonetookthem', customer, async function (req, res, next) {
//   const page = req.query.page || 1;
//   const size = req.query.size || 20;

//   query = Object.assign({}, {
//     size, 
//     page
//   });
//   try {
//     const orders = await ordersController.getUserOrdersAndNoOneTookThem(query, req.userId)
//     res.status(200).json(orders);
//   } catch (err) {
//     res.status(500).json(err.message)
//   }
// });

// router.get('/getuserordersandonetookthem', customer, async function (req, res, next) {
//   const page = req.query.page || 1;
//   const size = req.query.size || 20;

//   query = Object.assign({}, {
//     size, 
//     page
//   });
//   try {
//     const orders = await ordersController.getUserOrdersAndOneTookThem(query, req.userId)
//     res.status(200).json(orders);
//   } catch (err) {
//     res.status(500).json(err.message)
//   }
// });

// // edit order
// router.put('/:id', authRoles(4,5,6), async function (req, res, next) {
//   try {
//     const updatedOrder = await ordersController.editOrder(req.body, req.params.id)
//     res.status(200).json(updatedOrder);
//   } catch (err) {
//     res.status(500).json(err.message)
//   }
// });

// // delete order
// router.delete('/:id', authRoles(4,5,6), async function (req, res, next) {
//   try {
//     const deletedOrder = await ordersController.deleteOrder(req.params.id)
//     res.status(200).json(deletedOrder);
//   } catch (err) {
//     res.status(500).json(err.message)
//   }
// });

// // get orders
// router.get('/report', authRoles(4,5,6), async function (req, res, next) {
//   const page = req.query.page || 1;
//   const size = req.query.size || 20;

//   query = Object.assign({}, {
//     size, 
//     page
//   });
//   try {
//     const orders = await ordersController.getUserOrders(query, req.userId)
//     res.status(200).json(orders);
//   } catch (err) {
//     res.status(500).json(err.message)
//   }
// });

// // get orderDetails to show in bid
// router.get('/order_details', authRoles(4,5,6), async function (req, res, next) {

//   try {
//     const orderDetails = await ordersController.getOrderDetails()
//     res.status(200).json(orderDetails);
//   } catch (err) {
//     res.status(500).json(err.message)
//   }
// });


// // get orders
// router.get('/waiting_orders', customer, async function (req, res, next) {
//   const page = req.query.page || 1;
//   const size = req.query.size || 20;
//   query = Object.assign({}, {
//     size, 
//     page
//   });
//   try {
//     const orders = await ordersController.getUserWaitingOrders(query, req.userId)
//     res.status(200).json(orders);
//   } catch (err) {
//     res.status(500).json(err.message)
//   }
// });

// router.get('/company_waiting_orders', authRoles(5,6), async function (req, res, next) {
//   const page = req.query.page || 1;
//   const size = req.query.size || 20;
//   query = Object.assign({}, {
//     size, 
//     page
//   });
//   try {
//     const orders = await ordersController.getCompanyWaitingOrders(query, req.userId)
//     res.status(200).json(orders);
//   } catch (err) {
//     res.status(500).json(err.message)
//   }
// });

// router.get('/:id', authRoles(4,5,6), async function (req, res, next) {
//   try{
//     const order = await ordersController.getOrder(req.params.id)
//     res.status(200).json(order);
//   }catch(err){
//     res.status(500).json(err.message)
//   }
// });

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
    const events = await eventsController.getEvents(city)
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
