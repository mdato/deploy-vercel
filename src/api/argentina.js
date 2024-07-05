const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(["Argentina's soccer championships", '1978 - Argentina', '1986 - Mexico', '2022 - Qatar']);
});

module.exports = router;
