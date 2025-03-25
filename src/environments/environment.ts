// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'shadowrun-npc',
    appId: '1:535177123693:web:3f0341312dad1a827c2c64',
    storageBucket: 'shadowrun-npc.appspot.com',
    apiKey: 'AIzaSyD4RppTIkw7UJY3goyHIezlTKcIoYhO-FQ',
    authDomain: 'shadowrun-npc.firebaseapp.com',
    messagingSenderId: '535177123693',
  },
  production: false,
  collections: {
    npcs:"npcs",
    encounters:"encounters",
    tags:"tags",
    rules:"rules"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
