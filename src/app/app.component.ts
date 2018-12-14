import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase';

/*
const config = {
  apiKey: 'AIzaSyC2lj_yaQ1-OqYzxpJhjdbVRSS15p20jQM',
  authDomain: 'bulletinboard-d4583.firebaseapp.com',
  databaseURL: 'https://bulletinboard-d4583.firebaseio.com/',
  projectId: 'bulletinboard-d4583',
  storageBucket: 'gs://bulletinboard-d4583.appspot.com',
};
*/

const config = {
  apiKey: 'AIzaSyBi0zTAk_AMhkhMffdui9F792AbaquCudw', // ok
  authDomain: 'bulletinboard-2a5fa.firebaseio.com',
  databaseURL: 'https://bulletinboard-2a5fa.firebaseio.com/', // ok
  projectId: 'bulletinboard-2a5fa', // ok
  storageBucket: 'gs://bulletinboard-2a5fa.firebaseio.com',
};

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
