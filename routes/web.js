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

router.get('/json', (req, res) => {
    var json = '{"param1": "value1", "param2": "value2", "param3":{"param4": "value4", "param5": "value5"}}';
    var fs = require('fs');
    json = JSON.parse(fs.readFileSync('./public/json.json', 'utf8'));
    res.render('json', {json: json});
});

module.exports = router;