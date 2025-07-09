const express = require('express');
const router = express.Router();
const { getAllThreats, getThreatById, getStats } = require('../controllers/threatController');

router.get('/stats', getStats);
router.get('/:id', getThreatById);
router.get('/', getAllThreats);

module.exports = router;