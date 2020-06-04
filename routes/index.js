/**
 * Module dependencies.
 **/

var express = require('express');
var router = express.Router();
var task = require('../controllers/task');
var feedback = require('../controllers/feedback');
var notice = require('../controllers/notice');
var taskCategory = require('../controllers/task_category');
var user = require('../controllers/auth');

/*task list*/
router.get('/login', function () {
    return "Stirng";
});

// router.get('/login', auth.login);
router.get('/dashboard/index', dashboard.index);
/*task list*/

router.post('/task/mod/self', task.update);
router.post('/task/mod/admin', task.updateAdmin);
router.post('/task/add', task.add);

module.exports = router;