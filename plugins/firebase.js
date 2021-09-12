import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyDGEul6xLumaVJZsxAH6I9EAiZqCOZSBDs',
    authDomain: 'nuxt-firebase-acb48.firebaseapp.com',
    databaseURL: 'https://nuxt-firebase-acb48-default-rtdb.firebaseio.com',
    projectId: 'nuxt-firebase-acb48',
    storageBucket: 'nuxt-firebase-acb48.appspot.com',
    messagingSenderId: '536853193079',
    appId: '1:536853193079:web:e9b974c9365afd7db80172',
    measurementId: 'G-VY8MVLNHW9',
  });
}

export default firebase;
