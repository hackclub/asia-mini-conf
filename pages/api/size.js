/** @format */

import nodemailer from 'nodemailer';
import { google } from 'googleapis';

import * as _ from 'ramda';
import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGE_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MESAUREMENT_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const firestore = firebase.firestore();

const users = firestore.collection('users');

export default (req, res) => {
  const auth_token = _.split(' ')(req.headers.authorization)[1];

  if (_.equals(auth_token, process.env.TOKEN)) {
    try {
      if (req.method === 'POST') {
        users.get().then((qs) => {
          res.send({ length: qs.size });
        });
      } else {
        res.statusCode = 405;
        res.send(JSON.stringify({ message: 'method_not_allowed' }));
        return 0;
      }
    } catch (err) {
      res.statusCode = 200;
      console.log(err);
      res.send(JSON.stringify({ message: 'something_went_wrong' }));
      return 0;
    }
  } else {
    res.statusCode = 200;
    res.send({ message: 'unauthorized_access' });
    return 0;
  }
};
