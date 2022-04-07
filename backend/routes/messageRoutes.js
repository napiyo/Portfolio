const express =require('express');
const { sendMessage, showmsgs } = require('../controllers/messageControllers');

const router = express.Router();


router.route('/sendmessage').post(sendMessage);
router.route('/showmsgs').get(showmsgs);



module.exports = router;