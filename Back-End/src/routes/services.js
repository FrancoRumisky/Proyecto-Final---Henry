const { Router } = require('express');


const router = Router();



router.use(require('../middlewares/servicesSearch.js'));


module.exports = router;