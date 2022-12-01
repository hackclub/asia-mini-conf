/** @format */

import { ThemeProvider } from 'theme-ui';
import theme from '../lib/theme/index';

import '../lib/index.css';
import 'react-toastify/dist/ReactToastify.css';

import Meta from '@hackclub/meta';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Meta name="Hack Club Asia Virtual Conf" as={Head}>
        <meta name="robots" content="noindex" />
        <meta name="google-site-verification" content="uyPeJRqZIEYVosgkC9sW9Rx6_cgpgPfK19wqCwviXXM" />
      </Meta>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
