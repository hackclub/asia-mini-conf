/** @format */

import { Grid } from 'theme-ui';
import Card from './card/index';
import * as _ from 'ramda';

export default function Comp() {
  return (
    <Grid columns={[1, 1, 1, 1, 2, 3]} sx={{ pr: [2, 2, 2, 2, 4] }}>
      {_.map(
        ({ posterurl, author_url, auth_name, title, para, url }) => (
          <Card
            posterurl={posterurl}
            author={author_url}
            title={title}
            para={para}
            auth_name={auth_name}
          />
        ),
        data
      )}
    </Grid>
  );
}

const data = [
  {
    posterurl: 'sam_poster.jpeg',
    author_url: 'sam.png',
    auth_name: 'Sam Poder',
    title: 'How To Be An Email Ninja!',
    para: `Sam is a 16-year-old living in Singapore.
He has contributed in numerous emails and, could land a ton of sponsorships for various events.
\nLearn from sam how to be an email Ninja!`,
    url: '#',
  },
  {
    posterurl: 'manav_poster.jpeg',
    author_url: 'manav.png',
    auth_name: 'Manav Modi',
    title: 'How to grow your Hack Club',
    para: `Manav is the lead from Hack Club VIT Chennai. 
    He could efficiently grow his club, that too virtually!
    Learn from him how to scale your Hack Club and get a crazy social media following for your events.`,
    url: '#',
  },
  {
    posterurl: 'yash_poster.jpeg',
    author_url: 'yash.jpeg',
    auth_name: 'Yashvardhan Gupta',
    title: 'Journey Through a Design',
    para: `Yash it the person behind the awesome graphic work in Hack Club VIT Chennai. 
    He'll talk about his design process. Journey with him on a journey of a Design!`,
    url: '#',
  },
  {
    posterurl: 'smile_poster.jpeg',
    author_url: 'smile.jpg',
    auth_name: 'Smile Gupta',
    title: 'How to organize a great Hackathon',
    para: `Smile Gupta is a software engineer at Konfhub and she organized "Autumn Hacks", one of the best Hackathons conducted in India.
    Learn from her what goes into organzing a great hackathon!`,
    url: '#',
  },
  {
    posterurl: 'vishal_poster.jpeg',
    author_url: 'vishal.png',
    auth_name: 'Yashvardhan Gupta',
    title: 'From Volunteering to Working Full Time as a Community Manager',
    para: `Vishal Das is a community manager at CodeChef and is now professional managing 200+ communities across India. 
Visit his journey with him, from Volunteering to Manging 200+ clubs professionaly!`,
    url: '#',
  },

  {
    posterurl: 'guru_poster.jpeg',
    author_url: 'guru.png',
    auth_name: 'Guru',
    title: 'How to organize a great Hackathon',
    para: `Guru is a Hack Club lead from SKCET and recently onboarded his juniors to Hack Club in a very awesome way! Learn from him how to onboard new members to your Hack Club and give your Hack Club the start it deserves.`,
    url: '#',
  },
];
