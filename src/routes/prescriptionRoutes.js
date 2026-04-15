const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/prescriptionController');
const auth = require('../middlewares/authMiddleware');

router.post('/',auth,ctrl.create);
router.get('/',auth,ctrl.getAll);
router.get('/patient/:patientId',auth,ctrl.getByPatient);

module.exports = router;