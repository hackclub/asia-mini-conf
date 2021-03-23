/** @format */

import Header from '../components/header/index';
/** @format */

import { BaseStyles, Box, Button, Container, Grid, Heading } from 'theme-ui';
import Meta from '@hackclub/meta';
import Head from 'next/head';
import Footer from '../components/footer';
import * as _ from 'ramda';

export default () => (
  <>
    <Header />
    <Meta
      as={Head}
      title="FAQs"
      description="Hack Club Asia Virtual Conf FAQ i.e Frequently Asked Questions"
      //  image="https://workshop-cards.hackclub.com/Press.png?fontSize=350px&brand=HQ"
    />
    <Box
      as="header"
      sx={{
        bg: 'sheet',
        color: 'text',
        pt: [5, null, null, null, 6],
        pb: [3, 4, 5, null, 6],
        textAlign: 'center',
      }}
    >
      <Container variant="copy">
        <Heading
          as="h1"
          variant="title"
          sx={{
            color: 'primary',
            mt: [2, 4],
            fontSize: [3, 3, 3, 4, 5, 5],
            fontWeight: 1200,
          }}
        >
          FAQ ( Frequently Asked Questions )
        </Heading>
        <Heading
          as="h2"
          variant="subtitle"
          sx={{ mt: [4], color: 'text', fontSize: [1, 1, 1, 1, 3] }}
        >
          Some of the most asked questions about the conference
        </Heading>
      </Container>
    </Box>
    <Container
      variant="main"
      sx={{
        py: [3, 4],
        px: 3,
        maxWidth: [null, 'copyUltra'],
      }}
    >
      {_.map(({ q, a }) => <FAQ question={q} ans={a} />)(data)}
    </Container>
    <Footer />
  </>
);

const FAQ = ({ question, ans }) => (
  <Box
    //  as={BaseStyles}
    sx={{
      mx: 0,
      '> p': { maxWidth: 'copy' },
      h2: {
        mt: [1, 2, 2, 2, 4],
        fontSize: [3, 3, 3, 3, 3],
        fontWeight: 1000,
      },
    }}
  >
    <h2 sx={{ mb: 0 }}>{question}</h2>
    <p
      sx={{
        maxWidth: 'copy',
        fontSize: [1],
        fontWeight: ['500', '500', '500', '500', '600'],
        mt: [2],
      }}
    >
      {ans}
    </p>
  </Box>
);

const data = [
  {
    q: 'Should I be a Hack Club Member in order to register for the event?',
    a:
      'No, there are no eligibility criteria for this event and anyone can register for it.',
  },
  {
    q: `Why are my email and name being taken?
  `,
    a: `The sole purpose of taking your email and name is to send you personalized updates on the event. The data will be not be shared with any third party.`,
  },
  {
    q: `Why are my email and name being taken?
  `,
    a: `The sole purpose of taking your email and name is to send you personalized updates on the event. The data will be not be shared with any third party.`,
  },
  {
    q: `I have made a cool project and want to show it to the expo, whom to contact?`,
    a: `You can contact Harsh Bajpai on slack, we would love to show your project at our expo.`,
  },
  {
    q: `How will I get the instructions to join the event after registration?`,
    a: `We will send you a calendar invite over your email, accept that calendar invite, and the link to join the event will soon be added to the calendar description.`,
  },
];
