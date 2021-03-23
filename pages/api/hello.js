/** @format */

import nodemailer from 'nodemailer';
import { google } from 'googleapis';

import * as _ from 'ramda';
import firebase from 'firebase';
import 'firebase/firestore';

import html from '../../lib/html';
import path from 'path';

const OAuth2 = google.auth.OAuth2;

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

const createTransporter = async () => {
  const oauth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    'https://developers.google.com/oauthplayground'
  );
  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN,
  });

  const accessToken = await new Promise((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      if (err) {
        reject('Failed to create access token :(');
      }
      resolve(token);
    });
  });

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.EMAIL,
      accessToken,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
    },
  });

  return transporter;
};

//emailOptions - who sends what to whom
const sendEmail = async (emailOptions) => {
  let emailTransporter = await createTransporter();
  await emailTransporter.sendMail(emailOptions);
};

export default (req, res) => {
  const auth_token = _.split(' ')(req.headers.authorization)[1];

  if (_.equals(auth_token, process.env.TOKEN)) {
    try {
      if (req.method === 'POST') {
        console.log('****', __dirname);
        const email = req.body.email;
        const name = req.body.name;

        users
          .where('email', '==', email)
          .get()
          .then((qs) => {
            if (qs.size == 0) {
              users
                .add({
                  name,
                  email,
                })
                .then(() => {
                  res.status(200);

                  sendEmail({
                    subject: `Hey ${name}, Welcome to Hack Club Asia Virtual Conf`,
                    to: 'gabruharsh244@gmail.com',
                    html: html(name),
                    from: process.env.EMAIL,
                    attachments: [
                      {
                        filename: 'ticket.png',
                        path: path.resolve('./public', 'mail_ticket.png'),
                        cid: 'ticket',
                      },
                    ],
                  })
                    .then(() => {
                      res.send(JSON.stringify({ message: 'user_added' }));
                    })
                    .catch((err) => {
                      console.log('there are some erros', err);
                      res.send(
                        JSON.stringify({ message: 'something_went_wrong' })
                      );
                    });
                });
            } else {
              res.status(200);
              res.send(JSON.stringify({ message: 'user_exists' }));
            }
          });

        return 0;
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
