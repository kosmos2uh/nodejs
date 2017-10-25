const router = require('express').Router();
const controllers = require('../controllers');

// define the home page route
router.get('/', controllers.home_controller.index);

// define the about route
router.get('/about', controllers.home_controller.about);

router.get('/contact', controllers.home_controller.contact);

router.post('/send', controllers.home_controller.send);

router.get('/success', (req, res) => {
  res.render('home/contact/success');
});

router.get('/blog', controllers.blog_controller.index);
router.get('/blog/list', controllers.blog_controller.list);
router.get('/blog/detail', controllers.blog_controller.detail);

module.exports = router;
