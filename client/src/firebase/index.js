import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyDM_l-WAc6GpRPdNo7T_wgaSDVZ98wpaKg',
  authDomain: 'bazaar-25fd1.firebaseapp.com',
  databaseURL: 'https://bazaar-25fd1.firebaseio.com',
  projectId: 'bazaar-25fd1',
  storageBucket: 'bazaar-25fd1.appspot.com',
  messagingSenderId: '569332906179'
};
const firebaseApp = firebase.initializeApp(config);
const settings = { timestampsInSnapshots: true };
firebase.firestore().settings(settings);

export default firebaseApp;
