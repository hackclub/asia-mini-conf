/** @format */

import Head from 'next/head';
import Header from '../components/header/index';
import Hero from '../components/hero/index';
import Great_Hack_Club from '../components/great_hack_club/index';
import Expo from '../components/expo/index';
import Footer from '../components/footer/index';

import { Box, Text } from 'theme-ui';
import { useResizeDetector } from 'react-resize-detector';

export default () => {
  return (
    <>
      <Header shouldBeTransparent={true} />
      <Hero />
      <Great_Hack_Club />
      <Expo />
      <Footer />
    </>
  );
};
