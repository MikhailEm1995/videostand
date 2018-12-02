const { Router } = require('./router.js');
const config = require('./config.js');

const router = Router(config);
router.configureRouter();

module.exports = router.getRouter();
