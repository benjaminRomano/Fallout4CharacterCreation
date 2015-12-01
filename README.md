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

Get dependencies
```bash
$ npm install
```

Start the server:
```bash
$ mongod
$ node server.js
```
