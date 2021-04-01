var express = require('express');
var router = express.Router();
var medicinesController = require('../controllers/medicines')

/* GET medicines listing. */
router.get('/:id', medicinesController.getMedicineById)

router.get('/search/:name', medicinesController.getMedicineByName)

router.get('/', medicinesController.getAllMedicines)

router.post('/', medicinesController.createMedicine)

router.patch('/:id', medicinesController.updateMedicine)

router.delete('/:id', medicinesController.deleteMedicine)

module.exports = router;