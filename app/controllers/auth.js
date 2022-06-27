const localStorage = require('localStorage');

module.exports = {
    parseToken() {
        let token = localStorage.getItem('access');
        token = JSON.parse(token);
        console.log(token);
        return token;
    }
}