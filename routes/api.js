var express = require('express');
var router = express.Router();
var controllers = require('../controllers');

router.get('/:resource', function(req, res, next) {
  var resource = req.params.resource

  var controller = controllers[resource]
  // error block for if user request unrecognized api
  if (controller == null){
    res.json({
      confirmation: 'fail',
      message: 'Invalid Resouce'
    })
    return
  }

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

module.exports = router;

// this is the test route. Go to locall host and type /api/"whatever"