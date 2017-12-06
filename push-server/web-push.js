var webPush = require('web-push');

var paulsPushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/dmKDYvjeoLw:APA91bE650TMT60ZqisJlULMX_vlg7oKwfpitx6r2AA8zaXP0seJCRYc0yUBBrFF6QPNU55cWBIa55IFl6o2IFsePOYd4Iy495NpJo6LqieMRTC2uYAAEyC-V_OR7CGcAtEcRhmt3oso","expirationTime":null,"keys":{"p256dh":"BBFS8FMfd_MlnuH-IVet4jZ_9VEoEX9C8gkvvnL_gjsN546qRlw-byy6-p4r_zM4z2sz_z6j-Q2-Pk05XZ0_c9Q=","auth":"QDmTyvKy9er4kA6F2p0oEA=="}};

var stevesPushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/c_Ffu-gT6bc:APA91bEWA3h7zuv3FTBsAKw50c27E4fQJbSdyFzgCUf_s12YEpSdYuMNSm5pQG9uDzMMvEvUMnXTFploGHLAxYnk1H_DsYe8nwauJ2iXzFZMRA9OAKDCrqtvZjDdEiMoU1eQiA3TEkSn","expirationTime":null,"keys":{"p256dh":"BJjmN9iOy6fPKcseGtyHGzTmYllEAOO0Zm0l59Lj7wQYYsIU9TNxIvFhZRuRl0W7lJklCz5zM5g82yUfoBOuivs=","auth":"P8TzUIBqeLia0JmQ2gdcBw=="}};

var steveGithubProd = {"endpoint":"https://fcm.googleapis.com/fcm/send/dyDD6tP7Pq0:APA91bGrUUM2r_V_ZXMRq2mVbYGb6Ik5j-KV1imsQI2ZDWILHH0z3pCZIeztZ_iVOAGr-Oz6L-W-5JYNs_uoDAwLMWpfy0jz15rWNQCFpiFSt2NmGOVYW3HbeB5QDABPlil3TuStoWd6","expirationTime":null,"keys":{"p256dh":"BOAtQFHjFENYM3VIWKvq4V67gwXEZf_a4HhkW3MssPmTM5UHK-7u5uPTlgrULpUt4UkPtH79j8vFm6bHTpTpdaM=","auth":"uh2ChikqbSjk3WI4VbRnrA=="}};

var samsungS8Subscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/e9Of3XEvSCA:APA91bEzBCL1WNenAkAU6EhXP1l1PoRKdPHxKcykQqeDh3gLZCaAmDpoi43iTCI-qRlwNsxX7EvQA6cifoTFJDbQYhi4kh6vjna1atniSfQW_Dfq2OrwwIx7Y-FfYkpmGRGLzE1d8kUH","expirationTime":null,"keys":{"p256dh":"BK8TMbOVZmowsCXLO0UUAD_oafbeDqdlklq19qRwkiMNCHkEQ4qo-OvMb5_VZ58pD-XtwWo3tEg5UAblne8r_GM=","auth":"lJFgmujbmfnS79tPaez7mQ=="}};

var subscriptionKeys = {
	paul: paulsPushSubscription,
	steve: stevesPushSubscription,
  steveProd: steveGithubProd,
  s8: samsungS8Subscription
};

var vapidPublicKey = 'BB28Y98Mn9felmviJn4pKZn3pdWVx1XzkmzBoEiZ2kRE8Tv-YJLk9fZWtlH5h66JqN-f86G2ThlmySXiFMy6eEU';
var vapidPrivateKey = 'BtRXoeCppesRV_DUFZrc6zkNXX4q58Ptw3BHG5gUmqU';

var options = {
  vapidDetails: {
    subject: 'mailto:paul.friedman@nemours.org',
    publicKey: vapidPublicKey,
    privateKey: vapidPrivateKey
  },
  TTL: 60
};

// argv[0] = 'node'
// argv[1] = 'web-push.js'
// argv[2] = 'notification message'
// argv[3+] = 'paul', 'steve', etc.
let payload = process.argv[2];

process.argv.forEach(function (val, index, array) {
  if (index > 2) {
  	webPush.sendNotification(subscriptionKeys[val], payload, options).then(() => {
      console.log(`Sent push notification to ${val}`);
    }).catch((err) => {
      console.error(`Error sending push notification to ${val}, error: ${err}`);
    });
  }
});
