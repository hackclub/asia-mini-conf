/** @format */

import Head from 'next/head';
import Header from '../components/header/index';
import Hero from '../components/hero/index';

import { Box, Text } from 'theme-ui';
import { useResizeDetector } from 'react-resize-detector';

export default () => {
  return (
    <>
      <Header shouldBeTransparent={true} />
      <Hero />
    </>
  );
};
