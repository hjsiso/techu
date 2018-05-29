const express = require('express');
const router = express.Router();
const usersFile = require('../users.json');
const UserController   = require('./../controllers/UserController');


router.get('/:dev', (req, res) => {
  console.log(req.params);
  res.json({ response: usersFile[req.params.dev - 1]  });
});
router.get('/', (req, res) => {
  res.json({ response: req.query.dato});
});
router.post('/', (req, res) => {
  console.log(req.body);
  res.json({
    response: 'a POST request for CREATING questions',
    body: req.body
  });
});
router.put('/:id', (req, res) => {
  res.json({
    response: 'a PUT request for CREATING questions',
    body: req.body,
    user: usersFile[req.params.id]
  });
});
router.delete('/', (req, res) => {
  res.json({
    response: 'a DELETE request for CREATING questions',
    body: req.body
  });
});




module.exports = router;
