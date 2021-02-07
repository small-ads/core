import firebase from 'firebase/app';
import 'firebase/auth';

firebase.initializeApp({
  apiKey: 'AIzaSyBcMqz8OZhyzvnzUJNFUc1_UGClCy6fCD0',
  authDomain: 'small-ads-39e36.firebaseapp.com',
  projectId: 'small-ads-39e36',
  storageBucket: 'small-ads-39e36.appspot.com',
  messagingSenderId: '963050133439',
  appId: '1:963050133439:web:1cc5c9543e7a04c311b30a',
  measurementId: 'G-NP98LXJS6F',
});
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
