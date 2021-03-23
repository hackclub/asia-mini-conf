/**
 * @format

 */

import { jsx, Grid } from 'theme-ui';
import Header from '../components/header/index';
import Intro from '../components/team/Introduction/index';
import Card from '../components/team/card';
import Footer from '../components/footer/index';
import * as _ from 'ramda';

export default () => (
  <>
    <Header />
    <Intro />
    <Grid columns={[1, 1, 2, 3]} sx={{ pb: 4, mt: [4, 5] }}>
      {_.map(({ url, name, position }) => (
        <Card url={url} name={name} position={position} />
      ))(data)}
    </Grid>
    <Footer />
  </>
);

const data = [
  {
    url:
      'https://raw.githubusercontent.com/bajpai244/indiablogfilehosting/main/auhtors/harsh.png',
    name: 'Harsh Bajpai',
    position: 'management & development/design',
  },
  {
    url: 'saksham.png',
    name: 'Saksham Singh',
    position: 'motion design',
  },
  {
    url: 'shubham.jpeg',
    name: 'Shubham Patel',
    position: 'host',
  },
  {
    url: 'yash.jpeg',
    name: 'Yashwardhan Gupta',
    position: 'Design',
  },
  {
    url: 'rafi.jpg',
    name: 'Rafi Rasheed',
    position: 'Streaming',
  },
  {
    url: 'rohan.jpeg',
    name: 'Rohan',
    position: 'Design',
  },
  {
    url: 'vaibhav.jpg',
    name: 'Vaibhav Aggarwal',
    position: 'Design',
  },
];
