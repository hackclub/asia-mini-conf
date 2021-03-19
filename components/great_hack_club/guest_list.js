/** @format */

import { Grid } from 'theme-ui';
import Card from './card/index';
import * as _ from 'ramda';

export default function Comp() {
  return (
    <Grid columns={[1, 1, 1, 1, 2, 3]}>
      {_.map(() =>
        _.map(
          ({ posterurl, author_url, auth_name, title, para, url }) => (
            <Card
              posterurl={posterurl}
              author={author_url}
              title={title}
              para={para}
            />
          ),
          data
        )
      )([1, 2, 3, 4, 5, 6])}
    </Grid>
  );
}

const data = [
  {
    posterurl: 'poster.png',
    author_url: 'sam.png',
    auth_name: 'Sam Poder',
    title: 'How To Be An Email Ninja!',
    para:
      'Sam is 15 year old kid Aussie liviing in  singapore, learn from him how to be an email ninja!',
    url: '#',
  },
];
