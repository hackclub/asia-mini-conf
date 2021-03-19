/** @format */

import { Box, Flex } from 'theme-ui';
import theme from '../../lib/theme/local';
import Guest_List from './guest_list';

export default function Comp() {
  return (
    <Box sx={{ ml: theme.base.ml }}>
      <h1 sx={{ mb: [0], fontSize: [3, 3, 3, 3, 4], color: 'muted' }}>
        Learn how to run a great
      </h1>
      <Flex
        sx={{
          alignItems: 'center',
          backgroundImage: 'url(underline.png)',
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
            color: 'primary',
            mb: [0],
          }}
        >
          Hack Club
        </h1>
        <img
          sx={{ width: ['64px'], height: ['64px'], ml: [3] }}
          src="https://assets.hackclub.com/icon-rounded.png"
        />
      </Flex>
      <p sx={{ fontSize: [1, 1, 1, 1, 2] }}>
        Speaker sessions by some community ninjas who will teach
        <mark
          sx={{
            background:
              'linear-gradient(-100deg,rgba(236,55,80,0.33),rgba(236,55,80,0.7),rgba(236,55,80,0.1))',
            borderRadius: ['1em 0 1em 0'],
            ml: [1],
          }}
        >
          you how to run the coolest Hack Club / Events.
        </mark>
      </p>
      <Guest_List />
    </Box>
  );
}
