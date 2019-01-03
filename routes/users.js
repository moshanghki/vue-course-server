var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken')

router.get('/authorization', (req, res, next) => {
  const userName = req.userName
  res.send({
    code: 200,
    msg: 'login success',
    data: {
      token: jwt.sign({userName: userName}, 'moon', {
        expiresIn: 60 * 3
      })
    }
  })
})

module.exports = router;
