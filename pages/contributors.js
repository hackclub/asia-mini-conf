/**
 * @format

 */

import { Box, Grid } from 'theme-ui';
import Header from '../components/header/index';
import Intro from '../components/team/introduction/index';
import Card from '../components/team/card';
import Footer from '../components/footer/index';
import * as _ from 'ramda';

export default () => (
  <Box>
    <Header />
    <Intro />
    <Grid columns={[1, 1, 1, 1, 3]} sx={{ pb: 4, mt: [4, 5] }}>
      {_.map(({ url, name, position }) => (
        <Card url={url} name={name} position={position} />
      ))(data)}
    </Grid>
    <Footer />
  </Box>
);

const data = [
  {
    url:
      'https://raw.githubusercontent.com/bajpai244/indiablogfilehosting/main/auhtors/harsh.png',
    name: 'Harsh Bajpai',
    position: 'Management & Development/Design',
  },
  {
    url: 'saksham.png',
    name: 'Saksham Singh',
    position: 'Motion Design',
  },
  {
    url: 'shubham.jpeg',
    name: 'Shubham Patel',
    position: 'Host',
  },
  {
    url: 'shubhangi.jpeg',
    name: 'Shubhangi Gupta',
    position: 'Host',
  },

  {
    url: 'charanjeev.jpeg',
    name: 'Charanjeev Kaur',
    position: 'Host',
  },

  {
    url: 'yash.jpeg',
    name: 'Yashvardhan Gupta',
    position: 'Design',
  },
  {
    url: 'anna.jpeg',
    name: 'Anna Grace',
    position: 'Social Media',
  },
  {
    url: 'vaibhav.jpg',
    name: 'Vaibhav Aggarwal',
    position: 'Design',
  },

  {
    url: 'rafi.jpg',
    name: 'Rafi Rasheed',
    position: 'Streaming',
  },

  {
    url: 'rohan.jpeg',
    name: 'Rohan Karmakar',
    position: 'UX Design',
  },
  {
    url: 'vikas.jpeg',
    name: 'Vikas Sethi',
    position: 'Streaming',
  },
  {
    url: 'anurag.jpeg',
    name: 'Anurag Bhardwaj',
    position: 'Design',
  },
];
