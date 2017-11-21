var webPush = require('web-push');

var paulsPushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/fz4fCqwIgCg:APA91bH69o_hEr53CAGT6Hc2nCtACj6KpRKtqLjFZ49_FSVCjxKp5uuH9d2pNCM_ozE2I8sPfNOCTWzPvskf8CX3JWlz_cEiDOKWePmfXdMVA1XY-5_h70Ty8XcA7PvLCH0yDO-bg6Hs","expirationTime":null,"keys":{"p256dh":"BGSxyqjdkGTXOBNqNNnud19zPAi1dClkVXr8GNGBaxlCK4g0rX_405ALHElbZIcWMsiaWdlwfo0NtzEA4yY5fvY=","auth":"fnkYLDsmgOIXkDiBTL1KMg=="}};

var stevesPushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/c_Ffu-gT6bc:APA91bEWA3h7zuv3FTBsAKw50c27E4fQJbSdyFzgCUf_s12YEpSdYuMNSm5pQG9uDzMMvEvUMnXTFploGHLAxYnk1H_DsYe8nwauJ2iXzFZMRA9OAKDCrqtvZjDdEiMoU1eQiA3TEkSn","expirationTime":null,"keys":{"p256dh":"BJjmN9iOy6fPKcseGtyHGzTmYllEAOO0Zm0l59Lj7wQYYsIU9TNxIvFhZRuRl0W7lJklCz5zM5g82yUfoBOuivs=","auth":"P8TzUIBqeLia0JmQ2gdcBw=="}};

var subscriptionKeys = {
	paul: paulsPushSubscription,
	steve: stevesPushSubscription
};

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

process.argv.forEach(function (val, index, array) {
  if (index > 1) {
  	webPush.sendNotification(
		subscriptionKeys[val],
		payload,
		options
	);
  }
});
