const express = require('express');
const {
    startInterview,
    submitInterview,
    getInterviewHistory
} = require('../controller/interviewController');

const isAuth=require('../middleware/authMiddleware')

const router = express.Router();

router.post('/start', isAuth, startInterview);
router.post('/submit', isAuth, submitInterview);
router.get('/history', isAuth, getInterviewHistory);

module.exports = router;
