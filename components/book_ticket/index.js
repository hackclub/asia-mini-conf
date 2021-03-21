/** @format */

import { F } from 'ramda';
import { Box, Checkbox, Flex, Button } from 'theme-ui';
import theme from '../../lib/theme/local';

export default function Comp() {
  const w = 1003;
  const h = 455;
  return (
    <Box
      sx={{
        bg: '#000000',
        py: [5],
        pt: [4],
        mt: [5, 5, 5, 5, 5, 5, 6],
        backgroundImage: 'url(lantern.png), url(lantern.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: ['80px'],
        backgroundPosition: ['top 0 left 100px,top 0 right 100px'],
      }}
    >
      <h1
        sx={{
          mb: [0],
          fontSize: [3, 3, 3, 3, 3, 3, 4],
          color: 'muted',
          textAlign: 'center',
        }}
      >
        "book your tickets now, limited seats only"
      </h1>
      <Flex
        sx={{
          alignItems: 'center',
          backgroundImage: 'url(underline_yellow.png)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center bottom',
          backgroundSize: ['600px', ''],
          paddingBottom: [3, 3, 3, 3, 2],
          justifyContent: 'center',
        }}
      >
        <h1
          sx={{
            mt: [0],
            fontSize: [5, 5, 5, 5, 6],
            color: 'white',
            mb: [0],
          }}
        >
          Book Your Tickets
        </h1>
      </Flex>
      <Flex
        sx={{
          mt: [6],
          justifyContent: ['center'],
          alignItems: ['center'],
        }}
      >
        <img src="event_ticket.png" sx={{ height: [250] }} />
        <Flex sx={{ flexDirection: 'column', ml: [6] }}>
          <Input placeholder="Enter your name" />
          <Input placeholder="Enter your email" mb={[1]} />
          <Flex
            sx={{
              alignItems: 'center',
            }}
          >
            <label class="container">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <p sx={{ width: [300], color: 'yellow', fontSize: [0] }}>
              I agree to reieve promotional emails for this event
            </p>
          </Flex>
          <Flex
            sx={{
              justifyContent: 'flex-start',
              mt: [1],
            }}
          >
            <Button
              sx={{
                bg: 'white',
                color: 'text',
                width: '200px',
                borderRadius: [10],
              }}
            >
              Register
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

const Input = ({ placeholder, id, mb }) => (
  <input
    id={id}
    sx={{
      pl: [4],
      pr: [5],
      py: [3],
      borderRadius: [4],
      border: 'none',
      bg: '#454242',
      width: [300],
      fontSize: [1],
      mb: mb ? mb : [4],
    }}
    placeholder={placeholder}
  />
);
