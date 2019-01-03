var express = require('express');
var router = express.Router();

router.get('/userInfo', function(req, res, next){
  res.send({
    code: 200,
    data: {
      name: 'haopeng'
    }
  })
})

module.exports = router;
