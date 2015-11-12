# Fallout4CharacterCreation
Project for Cloud Computing (CS475)

#### How to Run
Create file auth.js in the config folder
```js
module.exports = {
    'googleAuth' : {
        'clientID'      : 'your-secret-clientID-here',
        'clientSecret'  : 'your-client-secret-here',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }
};
```

Create file db.js in the config folder
```js
module.exports = {
    'dev': {
        url: "mongodb://localhost:27017/charCreation"
    },
    'production' : {
        url: "mongodb://localhost:27017/charCreation"
    }
};
```

Start the server:
```bash
$ mongod
$ node server.js
```
