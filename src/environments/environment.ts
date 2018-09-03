// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBcjnIWVM0XZkXz5U9fwdrEDidnxULu-HA",
    authDomain: "acme-platzi-4f2f7.firebaseapp.com",
    databaseURL: "https://acme-platzi-4f2f7.firebaseio.com",
    storageBucket: "acme-platzi-4f2f7.appspot.com",
    messagingSenderId: "1711485947"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
