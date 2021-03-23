/** @format */

import {
  user_added,
  user_exists,
  unauthorized_access,
  something_went_wrong,
} from './statuscode';

const is_prod = process.env.NODE_ENV === 'production';

import axios from 'axios';
import qs from 'qs';
import * as _ from 'ramda';

export default (
  name,
  email,
  toast,
  create_confetti,
  set_loading,
  clear_field
) => {
  var data = qs.stringify({
    name,
    email,
  });
  var config = {
    method: 'post',
    url: is_prod
      ? 'https://asiaconf.hackclub.com/api/hello'
      : 'http://localhost:3000/api/hello',
    headers: {
      Authorization:
        'Bearer 16c2a98170f1cba5147e23e3f31a0ece2e1ab91aece20b41d9ed725cd918860d',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      const message = response.data.message;
      if (_.equals(message, user_added)) {
        toast.success(
          'Hey! you are now registered for the conference 🚀, check your mail 📬'
        );
        create_confetti();
      }
      if (_.equals(message, user_exists)) {
        toast.success(
          'Hey! you are already registered for the conference 🚀, check your mail 📬'
        );
        create_confetti();
      }
      if (
        _.equals(response.status.toString, 401) ||
        _.equals(message, unauthorized_access)
      ) {
        toast.error('Something went wrong please try again later');
      }

      clear_field();
      set_loading(false);
    })
    .catch(function (error) {
      toast.error('something went wrong please try again');
      clear_field();
      set_loading(false);
    });
};
