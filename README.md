# Fallout4CharacterCreation
Project for Cloud Computing (CS475)
![image](https://cloud.githubusercontent.com/assets/9221137/11495051/a98c48e4-97cd-11e5-89e5-fd67352f96ef.png)



#### How to Run
Create file auth.js in the config folder
```js
module.exports = {
    'googleAuth' : {
        'clientID'      : 'your-secret-clientID-here',
        'clientSecret'  : 'your-client-secret-here',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    },
    'sessionSecret': 'this is a secret'
};
```

Create file db.js in the config folder
```js
module.exports = {
    'dev': {
        url: 'mongodb://localhost:27017/charCreation',
        redisHost: 'localhost',
        redisPort: '6379'
    },
    'production' : {
        url: 'mongodb://localhost:27017/charCreation',
        redisHost: 'localhost',
        redisPort: '6379'
    }
};
```
Create file mail.json in the config folder, region can be us-eas-1 or us-west-2. The from email address must be verified with Amazon SES.
```js
{ "accessKeyId": "your_amazon_iam_accesskeyid", "secretAccessKey": "your_amazon_iam_secretaccesskey", "region": "us-west-2, "from": "from_email_address" , "subject" : "FO4 Character Permission Granted", "text" : "You have been granted write permissions to http://<yourwebaddress>/characterCreator#/"}


```

Get dependencies
```bash
$ npm install
```

Start the server:
```bash
$ mongod
$ node server.js
```
