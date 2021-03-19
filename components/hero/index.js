/** @format */

import dynamic from 'next/dynamic';
import { Box, Text } from 'theme-ui';
import Button from './button';

const Snowfall = dynamic(import('react-snowstorm'), { ssr: false });

export default () => {
  return (
    <Box
      sx={{
        bg: '#060E36',
        pt: [60, 60, 60, 60, 100],
        pb: [30, 30, 30, 60, 150, 190],
        width: '100vw',
        overflowX: 'hidden',
        backgroundImage: [
          'url(yellow_patch_right.png)',
          'url(yellow_patch_right.png)',
          'url(yellow_patch_right.png)',
          'url(yellow_patch_right.png)',
          'url(mountain.png), url(yellow_patch_right.png)',
        ],
        backgroundRepeat: ['no-repeat'],
        backgroundPosition: [
          'bottom right -40px',
          'bottom right -40px',
          'bottom right -40px',
          'bottom right -40px',
          'bottom left, bottom right -40px',
        ],
        backgroundSize: [
          `${577 * 0.4}px  ${531 * 0.6}px`,
          `${577 * 0.4}px  ${531 * 0.6}px`,
          `${577 * 0.4}px  ${531 * 0.6}px`,
          `${577 * 0.4}px  ${531 * 0.6}px`,
          `${909.55 * 0.6}px  ${407.3 * 0.6}px,${577 * 0.4}px  ${531 * 0.6}px`,
          `${909.55 * 0.7}px  ${407.3 * 0.7}px,${577 * 0.4}px  ${531 * 0.6}px`,
        ],
      }}
    >
      <Snowfall flakesMax={240} flakesMaxActive={160} />
      <Sun />
      <Box
        sx={{
          color: 'white',
          pl: [3, 3, 3, 3, 6, 7],
          pt: [60],
          h1: {
            mb: [0],
            mt: [0],
            textShadow: '1px 1px 3px black',
          },
          p: {
            textShadow: '1px 1px 5px black',
          },
          backgroundImage: ['none', 'none', 'none', 'none', 'url(cloud.png)'],
          backgroundRepeat: 'no-repeat',
          backgroundPosition: ['top 0 right 250px'],
          backgroundSize: [
            `${331.31 * 0.8}px ${116 * 0.8}px`,
            `${331.31 * 0.8}px ${116 * 0.8}px`,
            `${331.31 * 0.8}px ${116 * 0.8}px`,
            `${331.31 * 0.8}px ${116 * 0.8}px`,
            `${331.31 * 0.8}px ${116 * 0.8}px`,
            `${331.31 * 0.9}px ${116 * 0.9}px`,
          ],
        }}
      >
        <h1 sx={{ lineHeight: '90%' }}>Hack Club</h1>
        <h1 sx={{ fontSize: [5, 5, 5, 6, 6, 7], mt: [0] }}>
          Asia
          <span
            sx={{
              backgroundImage: `linear-gradient(180deg, rgba(166, 51, 214, 0.81) 0%, #EC3750 100%)`,
              backgroundSize: '100%',
              WebkitBackgroundClip: 'text',
              MozBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              MozTextFillColor: 'transparent',
              mx: [3],
              textShadow: 'none',
            }}
          >
            Mini
          </span>
          <span sx={{ display: ['none', 'none', 'none', 'none', 'initial'] }}>
            Conf
          </span>
        </h1>
        <h1
          sx={{
            fontSize: [5, 5, 5, 6, 6, 7],
            mt: [0],
            display: ['initial', 'initial', 'initial', 'initial', 'none'],
            lineHeight: '90%',
          }}
        >
          Conf
        </h1>
        <p sx={{ mt: [3] }}>
          A conference by Hack Club members for the Hack Club members,
        </p>
        <p sx={{ my: [0] }}>Register now. Limited seats only.</p>
        <Button />
      </Box>
    </Box>
  );
};

const Sun = () => (
  <Box
    sx={{
      position: 'absolute',
      left: [-160 / 3, -160 / 3, -160 / 3, -160 / 3, -250 / 3, -300 / 3],
      top: [-160 / 3, -160 / 3, -160 / 3, -160 / 3, -250 / 3, -300 / 3],
      width: [160, 160, 160, 160, 250, 300],
      height: [160, 160, 160, 160, 250, 300],
      bg: '#E6A632',
      borderRadius: ['50%'],
    }}
  />
);
