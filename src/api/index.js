const express = require('express');

const argentina = require('./argentina');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'vamos argentina !!!',
  });
});

router.use('/argentina', argentina);

module.exports = router;
