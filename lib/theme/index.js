/** @format */

import base from '@hackclub/theme';

const theme = {
  ...base,
  breakpoints: ['360px', '375px', '411px', '768px', '1366px', '1920px'],
};

/**Disable dark mode */
theme.useColorSchemeMediaQuery = false;
theme.colors.modes = {};

export default theme;
