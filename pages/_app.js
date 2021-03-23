/** @format */

import { ThemeProvider } from 'theme-ui';
import theme from '../lib/theme/index';

import '../lib/index.css';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}

export default MyApp;
