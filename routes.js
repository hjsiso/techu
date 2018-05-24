const express = require('express');
const router = express.Router();
//const Question = require('./model').Question;


router.get('/:dev', (req, res) => {
  res.json({ response: `Hola ${req.params.dev}`  });
});
router.post('/', (req, res) => {
  res.json({
    response: 'a POST request for CREATING questions',
    body: req.body
  });
});
router.get('/:qID', (req, res) => {
  res.json({
    response: `a GET request for LOOKING at a special answer id: ${req.params.qID}`
  });
});



module.exports = router;
