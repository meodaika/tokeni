const {CoinbasePro} = require('coinbase-pro-node');
var client   = new CoinbasePro({
    'apiKey': 'a518e3b5fcbae098774eb8dbad47c06a', 
    'apiSecret': 'woEF9X7h8n79WLNrzD4m42R6qBcvpKYQzvG19m2vUmnOiXgpy9iwWBqhWQoDZIse/EiHzLL6bpg8LL0O+uapKA==',
    passphrase: 'r1dyx4wfteb',
  useSandbox: true,
  });

module.exports = client;