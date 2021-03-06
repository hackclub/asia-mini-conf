/** @format */

import { useState } from 'react';
import { Box, Checkbox, Flex, Button, Spinner } from 'theme-ui';
import register from '../../lib/utils/register';

import useWindoeSize from 'react-use/lib/useWindowSize';

import Confetti from 'react-dom-confetti';

const config = {
  angle: 90,
  spread: 360,
  startVelocity: 40,
  elementCount: 70,
  dragFriction: 0.12,
  duration: '4450',
  stagger: 3,
  width: '24px',
  height: '36px',
  perspective: '500px',
  colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
};
import validator from 'email-validator';
import { ToastContainer, toast } from 'react-toastify';
import { set } from 'lodash';

export default function Comp() {
  const w = 1003;
  const h = 455;
  const [checked, set_checked] = useState(true);
  const [confetti, set_confetti] = useState(false);

  const [loading, set_loading] = useState(false);

  const create_confetti = () => {
    set_confetti(true);
    setTimeout(() => {
      set_confetti(false);
    }, 5000);
  };

  const clear_field = () => {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
  };

  const on_click = () => {
    toast.error('Registrations for events are closed now');
    return 0;

    if (!checked) {
      toast.error('please accept the terms and agreement box to continue');
      return 0;
    }
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (!validator.validate(email)) {
      toast.error('please enter a valid email to continue');
      return 0;
    }
    set_loading(true);
    register(name, email, toast, create_confetti, set_loading, clear_field);
  };

  return (
    <Box
      id="book_ticket"
      sx={{
        bg: '#000000',
        py: [5],
        pt: [4],
        mt: [5, 5, 5, 5, 5, 5, 6],
        backgroundImage: [
          'none',
          'none',
          'none',
          'none',
          'url(lantern.png), url(lantern.png)',
          'url(lantern.png), url(lantern.png)',
        ],
        backgroundRepeat: 'no-repeat',
        backgroundSize: ['80px', '80px', '80px', '60px', '80px'],
        backgroundPosition: [
          'top 0 left 50px,top 0 right 50px',
          'top 0 left 50px,top 0 right 50px',
          'top 0 left 0px,top 0 right 0px',
          'top 0 left 30px,top 0 right 30px',
          'top 0 left 50px,top 0 right 50px',
          'top 0 left 100px,top 0 right 100px',
          'top 0 left 300px,top 0 right 300px',
        ],
      }}
    >
      <Confetti active={confetti} config={config} />
      <ToastContainer />
      <h1
        sx={{
          mb: [0],
          fontSize: [2, 2, 2, 2, 3, 3, 4],
          color: 'muted',
          textAlign: 'center',
        }}
      >
        "book your tickets now, limited seats only"
      </h1>
      <Flex
        sx={{
          alignItems: 'center',
          backgroundImage: ['url(underline_yellow.png)'],
          backgroundRepeat: 'no-repeat',
          backgroundPosition: [
            'center bottom 0px',
            'center bottom 0px',
            'center bottom 0px',
            'center bottom 0px',
            'center bottom 0px',
            'center bottom 1px',
          ],
          backgroundSize: [
            '300px',
            '300px',
            '300px',
            '300px',
            '600px',
            '600px',
          ],
          paddingBottom: [3, 3, 3, 3, 2],
          justifyContent: 'center',
        }}
      >
        <h1
          sx={{
            mt: [0],
            pb: [1],
            fontSize: [3, 3, 3, 4, 5, 6],
            color: 'white',
            mb: [0],
          }}
        >
          Book Your Tickets
        </h1>
      </Flex>
      <Flex
        sx={{
          mt: [4, 4, 4, 4, 5],
          justifyContent: ['center'],
          alignItems: ['center'],
          flexDirection: [
            'column',
            'column',
            'column',
            'column',
            'column',
            'row',
          ],
        }}
      >
        <img
          src="event_ticket.png"
          sx={{
            height: [130, 130, 130, 180, 250],
            transition: '0.2s',
            ':hover': {
              transform: 'scale(1.05)',
            },
          }}
        />
        <Flex
          sx={{
            flexDirection: 'column',
            ml: [0, 0, 0, 0, 0, 6],
            mt: [4, 4, 4, 4, 4, 0],
            alignItems: [
              'center',
              'center',
              'center',
              'center',
              'center',
              'flex-start',
            ],
          }}
        >
          <Input placeholder="Enter your name" id="name" />
          <Input placeholder="Enter your email" mb={[1]} id="email" />

          <Flex
            sx={{
              mt: [2],
              alignItems: 'center',
            }}
          >
            <label class="container">
              <input
                id="check"
                type="checkbox"
                checked={checked}
                onClick={() => {
                  if (!loading) {
                    set_checked(!checked);
                  }
                }}
              />
              <span class="checkmark"></span>
            </label>
            <p sx={{ width: [220, 300], color: 'yellow', fontSize: [0] }}>
              I agree to recieve promotional emails for this event
            </p>
          </Flex>
          <Flex
            sx={{
              justifyContent: 'center',
              width: '100%',
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
              onClick={() => {
                on_click();
              }}
            >
              {!loading ? 'Register' : <Spinner color="black" size={24} />}
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
      width: [250, 300],
      fontSize: [1],
      mb: mb ? mb : [4],
      color: 'white',
    }}
    placeholder={placeholder}
  />
);
