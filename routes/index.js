var express = require('express');
var router = express.Router();


let messages = [
  {
    text: 'Hello, fucker',
    user: 'Josiah',
    added: new Date(),
  },
  {
    text: 'Another message, boi',
    user: 'Big Poppa',
    added: new Date(),
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { messages: messages});
  next();
});

router.post('/new', (req, res, next) => {
  console.log(req.body.messageText + ", by " + req.body.user)
  messages.push({
    text: req.body.messageText,
    user: req.body.user,
    added: new Date()
  })
  res.redirect('/')
})

module.exports = router;
