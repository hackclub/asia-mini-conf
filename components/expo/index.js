/** @format */

import { Box, Flex, Grid } from 'theme-ui';
import theme from '../../lib/theme/local';

export default function Comp() {
  const w_1 = 617;
  const h_1 = 763;

  const w_2 = 1020.85;
  const h_2 = 678;

  return (
    <Box
      sx={{
        pl: theme.base.ml,
        overflowX: 'hidden',

        backgroundImage: ['url(ellipse.png),url(yellow_patch_right_1.png)'],
        backgroundRepeat: 'no-repeat',
        backgroundSize: [
          '200px',
          '200px',
          '200px',
          '200px',
          '250px',
          '250px',
          '280px',
        ],
        backgroundPosition: 'left -30px top 0px , right 0px bottom 0px',
      }}
    >
      <h1 sx={{ mb: [0], fontSize: [3, 3, 3, 3, 4], color: 'muted' }}>
        see, awesome projects/events by Hack Clubbers{' '}
      </h1>
      <Flex
        sx={{
          alignItems: 'center',
          backgroundImage: 'url(underline_green.png)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom left',
          backgroundSize: ['300px', ''],
          paddingBottom: [3, 3, 3, 3, 2],
        }}
      >
        <h1
          sx={{
            mt: [0],
            fontSize: [5, 5, 5, 5, 6],
            color: 'green',
            mb: [0],
          }}
        >
          Expo
        </h1>
        <img
          sx={{ width: ['64px'], height: ['64px'], ml: [3] }}
          src="expo.png"
        />
      </Flex>
      <p sx={{ fontSize: [1, 1, 1, 1, 2] }}>
        Hack Club is a community of builders and tinkerers.
        <mark
          sx={{
            background:
              'linear-gradient(-100deg,rgba(51,214,166,0.33),rgba(51,214,166,0.95),rgba(243,234,164,0.1))',
            borderRadius: ['1em 0 1em 0'],
            ml: [1],
          }}
        >
          Come let’s celebrate the great work happening at Hack Clubs in Asia.
        </mark>
      </p>
      <Flex
        sx={{
          mt: [4, 4, 4, 4, 4, 4, 5],
          flexDirection: ['column', 'column', 'column', 'column', 'row'],
          justifyContent: ['center'],
          alignItems: ['center'],
        }}
      >
        <img
          sx={{
            width: [
              w_1 * 0.3,
              w_1 * 0.3,
              w_1 * 0.45,
              w_1 * 0.5,
              w_1 * 0.6,
              w_1 * 0.7,
              w_1 * 0.9,
            ],
            height: [
              h_1 * 0.3,
              h_1 * 0.3,
              h_1 * 0.45,
              h_1 * 0.5,
              h_1 * 0.6,
              h_1 * 0.7,
              h_1 * 0.9,
            ],
          }}
          src="tab_1.png"
        />
        <img
          sx={{
            mt: [4, 4, 4, 4, 0],
            width: [
              w_2 * 0.3,
              w_2 * 0.3,
              w_2 * 0.4,
              w_2 * 0.45,
              w_2 * 0.5,
              w_2 * 0.6,
              w_2 * 0.8,
            ],
            height: [
              h_2 * 0.3,
              h_2 * 0.3,
              h_2 * 0.4,
              h_2 * 0.45,
              h_2 * 0.5,
              h_2 * 0.6,
              h_2 * 0.8,
            ],
          }}
          src="tab_2.png"
        />
      </Flex>
    </Box>
  );
}
