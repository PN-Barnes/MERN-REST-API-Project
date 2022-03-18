const router = require('express').Router();

const menuRoutes = require('./menuRoutes');

router.use('/api/menu', menuRoutes);

module.exports = router;
