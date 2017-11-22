var webPush = require('web-push');

var paulsPushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/dmKDYvjeoLw:APA91bE650TMT60ZqisJlULMX_vlg7oKwfpitx6r2AA8zaXP0seJCRYc0yUBBrFF6QPNU55cWBIa55IFl6o2IFsePOYd4Iy495NpJo6LqieMRTC2uYAAEyC-V_OR7CGcAtEcRhmt3oso","expirationTime":null,"keys":{"p256dh":"BBFS8FMfd_MlnuH-IVet4jZ_9VEoEX9C8gkvvnL_gjsN546qRlw-byy6-p4r_zM4z2sz_z6j-Q2-Pk05XZ0_c9Q=","auth":"QDmTyvKy9er4kA6F2p0oEA=="}};

var stevesPushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/c_Ffu-gT6bc:APA91bEWA3h7zuv3FTBsAKw50c27E4fQJbSdyFzgCUf_s12YEpSdYuMNSm5pQG9uDzMMvEvUMnXTFploGHLAxYnk1H_DsYe8nwauJ2iXzFZMRA9OAKDCrqtvZjDdEiMoU1eQiA3TEkSn","expirationTime":null,"keys":{"p256dh":"BJjmN9iOy6fPKcseGtyHGzTmYllEAOO0Zm0l59Lj7wQYYsIU9TNxIvFhZRuRl0W7lJklCz5zM5g82yUfoBOuivs=","auth":"P8TzUIBqeLia0JmQ2gdcBw=="}};

var steveGithubProd = {"endpoint":"https://fcm.googleapis.com/fcm/send/dVQtY2AnB2A:APA91bENIAddIAy07TC8kZXZpP7pPjN1wf5jZDNpkyTPHl8g47eqILmAewVB-ZQVPPcBs3nZYtoy_lEulmR2oY9gBlDsJiJKujIc615ltzd27TLhzbUowfSFJ-x6binRd6-OnDf0fdWL","expirationTime":null,"keys":{"p256dh":"BOHHJ3P7intNFG5rJfx8XeVaOmp63txuxSU2yYiDTQkedeEVBnsQwA3EBX5PEjD9KAsfB-GW6YY1rh08wNxrXOc=","auth":"G5NE9YACKdc_HmR_iBeftg=="}}

var subscriptionKeys = {
	paul: paulsPushSubscription,
	steve: stevesPushSubscription,
  steveProd: steveGithubProd
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
  	webPush.sendNotification(subscriptionKeys[val], payload, options).then(() => {
      console.log(`Sent push notification to ${val}`);
    }).catch((err) => {
      console.error(`Error sending push notification to ${val}, error: ${err}`);
    });
  }
});
