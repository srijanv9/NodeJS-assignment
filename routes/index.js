var express = require('express');
var router = express.Router();
const userController = require('../controllers/user.controller');

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express' });
});

router.get('/challenge', (req, res) => {
	res.send('Hello World');
});

router.post('/challenge', (req, res) => {
	const data = req.body.data;
  let totalCount = 0;

	const answer = {
		isSuccess: true,
		user_id: 'abhisek_mandal_11081999',
		count: '',
		email: '1929194@kiit.ac.in',
		roll_number: '1929194',
		numbers: [],
		alphabets: [],
	};


  data.forEach((item) => {
    for(let i = 0; i < item.length; i++ ){
      console.log(item[i]);
      if(item[i] >= 'A' && item[i] <= 'Z'){
        if(answer.alphabets.indexOf(item) === -1)
          answer.alphabets.push(item);
        totalCount++;
      }
      if(item[i] >= 'a' && item[i] <= 'z'){
        if(answer.alphabets.indexOf(item) === -1)
          answer.alphabets.push(item);
        totalCount++;
      }
      if(item[i] >= '0' && item[i] <= '9'){
        if(answer.numbers.indexOf(item) === -1)
          answer.numbers.push(item);
        totalCount++;
      }
    }
  });

  answer.count = totalCount;

  if(data.length == 0)
    answer.isSuccess = false;

	res.send(answer);
});

module.exports = router;
