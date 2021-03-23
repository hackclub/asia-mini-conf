/**
 * @format
 */

import { jsx, Grid } from 'theme-ui';

export default () => (
  <div
    sx={{
      width: ['100vw'],
      background: `linear-gradient(131.52deg, #FFB443 25.03%, #F99705 100%)`,
      py: ['7em', '7em'],
    }}
  >
    <div
      sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 5 }}
    >
      <h1
        sx={{
          textAlign: 'center',
          color: 'white',
          fontSize: [5, 5, 5, 5, 6, 6],
          my: 0,
        }}
      >
        Meet the Team!
      </h1>
    </div>
    <div sx={{ width: '100%', textAlign: 'center' }}>
      <h1 sx={{ color: 'white', fontSize: [3, 3, 3, 3, 4] }}>
        Meet the team which is working hard to make Asia Conf possible!
      </h1>
    </div>
  </div>
);
