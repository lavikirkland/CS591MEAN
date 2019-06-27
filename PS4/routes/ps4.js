var express = require('express');
var router = express.Router();
const request = require("request");
const websterconfig = require('../configs/websterConfig.json'); //get the json config file
const db = require('../mongo/mongo');
/* GET users listing. */
//const word = 'late'; // a word to get definition for
//router.get('/id=:id', function (req, res, next) {  //  /ps4 
db.connect((err, client) => {
    if (err) {
        console.log(`ERR: ${err}`);
    } else {
        console.log(`Connected`);
    }
});

router.get('/', function (req, res, next) {  //  /ps4    
    /*request(options, function (error, response, body) {
            if (error) throw new Error(error);

            //console.log(JSON.parse(body));
            let list = JSON.parse(body);
            res.render('ps4', {w: word, arr: list});
        });*/
        //let word = req.params.id;
        let word = req.query.id;
        let mongo = db.getDB();
        let list = mongo.collection('words').find({w: word}).toArray();
        if (list.length > 0) {
            console.log('start from mongo cache');
            res.json({wordmeta: list[0], resapi: false});
        } else {
            console.log('start from api');
            getDef(word)
                .then(function (body) {
                    //const value = JSON.parse(body).args.test
                    //console.log(value);
                    console.log('done')
                    let list = JSON.parse(body);
                    //res.render('ps4', {w: word, arr: list});
                    //res.send({w: word, arr: list});
                    //console.log(`${word} ${req.params.id}`);
                    let wordObj = {
                        w: word,
                        arr: list
                    };
                    mongo.collection('words').insertOne(wordObj, function (err, r) {
                        res.json({wordmeta:wordObj, resapi: true});
                    });
                })
            
                .catch(function(err) {
                    console.log(`ERROR! ${err}`);
                });
            
            console.log(`Waiting?`);            
        }
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