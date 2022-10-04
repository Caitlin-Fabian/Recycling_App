import Realm from 'realm';

export function getRealmApp() {
    const appId = '<enter your App ID here>'; // Set App ID here.
    const appConfig = {
      id: appId,
      timeout: 10000,
    };
   return new Realm.App(appConfig);
 }