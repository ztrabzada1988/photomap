var express = require('express');
var router = express.Router();
var controllers = require('../controllers');

// NOTE: Since we are using Promise (imported from controllers) we dont need to use
//       callback functions, we can just use .catch and .then

router.get('/:resource', function(req, res, next) {
  var resource = req.params.resource

  var controller = controllers[resource]
  // error block for if user request unrecognized api like asdfasd instead of /api/comment or post
  if (controller == null){
    res.json({
      confirmation: 'fail',
      message: 'Invalid Resource'
    })
    return
  }
  // setup promise:

  // success block
  controller.get(req.query, false)
  .then(function(results){
    res.json({
      confirmation: 'success',
      results: results
    })
  })
  .catch(function(err){
    res.json({
      confirmation: 'fail',
      message: err
    })
  })
});

// SET UP ROUTER FOR ID (findById)
// e.g. if you type localhost:3000/api/comment/:id

router.get('/:resource/:id', function(req, res, next) {
  var resource = req.params.resource
  var controller = controllers[resource]
  // error block for if user request unrecognized api like asdfasd instead of /api/comment or post
  if (controller == null){
    res.json({
      confirmation: 'fail',
      message: 'Invalid Resource'
    })
    return
  }

  // if passes above screening of valid resource/id run:
   controller.getById(req.params.id, false)
  .then(function(result){
    res.json({
      confirmation: 'success',
      result: result
    })
  })
  .catch(function(err){
    res.json({
      confirmation: 'fail',
      message: 'ID not found'
    })
  })
});

// SET UP ROUTER FOR POST 

router.post('/:resource/', function(req, res, next) {
  var resource = req.params.resource
  var controller = controllers[resource]
  // error block for if user request unrecognized api like asdfasd instead of /api/comment or post
  if (controller == null){
    res.json({
      confirmation: 'fail',
      message: 'Invalid Resource'
    })
    return
  }

   // remember post request takes the body not query
  controller.post(req.body, false)
  .then(function(result){
    res.json({
      confirmation: 'success',
      result: result
    })
  })
  .catch(function(err){
    res.json({
      confirmation: 'fail',
      message: err
    })
  })
})



module.exports = router;
