const router = require('express').Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next){
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', (req, res) => {
  //res.send('Janus home page');
  
  res.render('home', {
    name: 'Janus',
    content: '123123'
  });
  // res.status = 200;
  // res.writeHead(200, { 'Content-Type': 'html/plain' });
});
// define the about route
router.get('/about', (req, res) => {
  res.send('About page');
});

module.exports = router;