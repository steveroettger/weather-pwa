# WeatherPwa

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
# weather-pwa
## Push Notification Keys
$ npm install web-push

$ ./node_modules/.bin/web-push generate-vapid-keys

=======================================

Public Key:
BB28Y98Mn9felmviJn4pKZn3pdWVx1XzkmzBoEiZ2kRE8Tv-YJLk9fZWtlH5h66JqN-f86G2ThlmySXiFMy6eEU

Private Key:
BtRXoeCppesRV_DUFZrc6zkNXX4q58Ptw3BHG5gUmqU

=======================================

Paul's Desktop Subscription:
{"endpoint":"https://fcm.googleapis.com/fcm/send/dmKDYvjeoLw:APA91bE650TMT60ZqisJlULMX_vlg7oKwfpitx6r2AA8zaXP0seJCRYc0yUBBrFF6QPNU55cWBIa55IFl6o2IFsePOYd4Iy495NpJo6LqieMRTC2uYAAEyC-V_OR7CGcAtEcRhmt3oso","expirationTime":null,"keys":{"p256dh":"BBFS8FMfd_MlnuH-IVet4jZ_9VEoEX9C8gkvvnL_gjsN546qRlw-byy6-p4r_zM4z2sz_z6j-Q2-Pk05XZ0_c9Q=","auth":"QDmTyvKy9er4kA6F2p0oEA=="}}

Steve's Desktop Subscription:
{"endpoint":"https://fcm.googleapis.com/fcm/send/c_Ffu-gT6bc:APA91bEWA3h7zuv3FTBsAKw50c27E4fQJbSdyFzgCUf_s12YEpSdYuMNSm5pQG9uDzMMvEvUMnXTFploGHLAxYnk1H_DsYe8nwauJ2iXzFZMRA9OAKDCrqtvZjDdEiMoU1eQiA3TEkSn","expirationTime":null,"keys":{"p256dh":"BJjmN9iOy6fPKcseGtyHGzTmYllEAOO0Zm0l59Lj7wQYYsIU9TNxIvFhZRuRl0W7lJklCz5zM5g82yUfoBOuivs=","auth":"P8TzUIBqeLia0JmQ2gdcBw=="}}

=======================================

Send push notifications:

$ node push-server/web-push paul steve
