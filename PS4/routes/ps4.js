var express = require('express');
var router = express.Router();
const request = require("request");
const websterconfig = require('../configs/websterConfig.json'); //get the json config file
/* GET users listing. */
//const word = 'late'; // a word to get definition for
//router.get('/id=:id', function (req, res, next) {  //  /ps4    
router.get('/', function (req, res, next) {  //  /ps4    
    /*request(options, function (error, response, body) {
            if (error) throw new Error(error);

            //console.log(JSON.parse(body));
            let list = JSON.parse(body);
            res.render('ps4', {w: word, arr: list});
        });*/
        //let word = req.params.id;
        let word = req.query.id;
        console.log('start');
        //console.log(`${word} ${req.params.id}`);

        getDef(word)
            .then(function (body) {
                //const value = JSON.parse(body).args.test
                //console.log(value);
                console.log('done')
                let list = JSON.parse(body);
                //res.render('ps4', {w: word, arr: list});
                res.send({w: word, arr: list});
                //res.json({w: word, arr: list});
            })
        
            .catch(function(err) {
                console.log(`ERROR! ${err}`);
            });
        
        console.log(`Waiting?`);

    }

)

const getDef = function (id) {
    // make a new promise
    return new Promise(function (resolve, reject) {
        const websterKey = websterconfig.apikey; // retrieve the api key from config file

        var options = { method: 'GET',
          url: 'https://www.dictionaryapi.com/api/v3/references/collegiate/json/'+ id,
          qs: { key: websterKey},
          headers: 
           { 'postman-token': '5e2097b5-7e53-565f-8093-bd28b1156c97',
             'cache-control': 'no-cache' } };
        
        // if request successful then resolve, otherwise reject with an error
        request(options, function (error, response, body) {
            if (error)
                reject(new Error(error))
            else {
                resolve(body)
            }
        })

    })
}

module.exports = router;