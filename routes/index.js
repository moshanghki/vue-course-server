var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken')

const getPasswordByName = (name) => {
  return { password: 'admin' }
}

router.get('/userInfo', function(req, res, next){
  res.send({
    code: 200,
    data: {
      name: 'haopeng'
    }
  })
})

router.post('/login', (req, res, next) => {
  const { userName, password } = req.body
  if (userName) {
    const userInfo = password ? getPasswordByName(userName) : ''
    if (!userInfo || !password || userInfo.password !== password) {
      req.status(401).send({
        code: 401,
        msg: 'userName or password is wrong',
        data: {}
      })
    } else {
      res.send({
        code: 200,
        msg: 'login success',
        data: {
          token: jwt.sign({userName: userName}, 'moon', {
            expiresIn: 60 * 3
          })
        }
      })
    }
  } else {
    res.status(401).send({
      code: 401,
      msg: 'userName is empty',
      data: {}
    })
  }
})

module.exports = router;
