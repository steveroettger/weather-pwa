var webPush = require('web-push');

var pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/fz4fCqwIgCg:APA91bH69o_hEr53CAGT6Hc2nCtACj6KpRKtqLjFZ49_FSVCjxKp5uuH9d2pNCM_ozE2I8sPfNOCTWzPvskf8CX3JWlz_cEiDOKWePmfXdMVA1XY-5_h70Ty8XcA7PvLCH0yDO-bg6Hs","expirationTime":null,"keys":{"p256dh":"BGSxyqjdkGTXOBNqNNnud19zPAi1dClkVXr8GNGBaxlCK4g0rX_405ALHElbZIcWMsiaWdlwfo0NtzEA4yY5fvY=","auth":"fnkYLDsmgOIXkDiBTL1KMg=="}};

var vapidPublicKey = 'BB28Y98Mn9felmviJn4pKZn3pdWVx1XzkmzBoEiZ2kRE8Tv-YJLk9fZWtlH5h66JqN-f86G2ThlmySXiFMy6eEU';
var vapidPrivateKey = 'BtRXoeCppesRV_DUFZrc6zkNXX4q58Ptw3BHG5gUmqU';

var payload = 'Happy Thanksgiving!';

var options = {
  vapidDetails: {
    subject: 'mailto:paul.friedman@nemours.org',
    publicKey: vapidPublicKey,
    privateKey: vapidPrivateKey
  },
  TTL: 60
};

webPush.sendNotification(
  pushSubscription,
  payload,
  options
);
