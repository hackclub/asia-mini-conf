/** @format */

import { Box, Flex } from 'theme-ui';

export default () => {
  return (
    <Flex
      href="#book_ticket"
      as={'a'}
      sx={{
        background:
          'linear-gradient(92.34deg, rgba(166, 51, 214, 0.9) 5.39%, #EC3750 99.59%)',
        borderRadius: [10],
        px: [4, 4, 4, 4, 3, 4],
        py: [2, 2, 2, 2, 3, 3],
        mt: [4],
        display: 'inline-flex',
        alignItems: 'center',
        cursor: 'pointer',
        transition: '0.2s',
        ':hover': {
          transform: 'scale(1.05)',
        },
        textDecoration: 'none',
      }}
    >
      <h3 sx={{ m: 0, color: 'white', fontSize: [1, 1, 1, 1, 1, 2] }}>
        Book Your Tickets
      </h3>
      <img src="ticket.png" sx={{ width: [35], height: [35], ml: [3] }} />
    </Flex>
  );
};
