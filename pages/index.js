/** @format */

import Head from 'next/head';
import Header from '../components/header/index';
import Hero from '../components/hero/index';
import Great_Hack_Club from '../components/great_hack_club/index';
import Expo from '../components/expo/index';
import Book_Ticket from '../components/book_ticket/index';
import Footer from '../components/footer/index';

import { Box, Text } from 'theme-ui';
import { useResizeDetector } from 'react-resize-detector';

import Meta from '../components/meta/index';

export default () => {
  return (
    <>
      <Meta />
      <Header shouldBeTransparent={true} />
      <Hero />
      <Great_Hack_Club />
      <Expo />
      <Book_Ticket />
      <Footer />
    </>
  );
};
