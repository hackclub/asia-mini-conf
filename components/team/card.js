/**
 * @format
 */

import { jsx, name } from 'theme-ui';

export default ({ url, name, position }) => (
  <div
    sx={{
      background: `linear-gradient(127.78deg, #1F2D3D 25.03%, #17202B 100%)`,
      my: [3],
      mx: [4],
      borderRadius: '10px',
      pb: 3,
    }}
  >
    <div sx={{ width: '100%', textAlign: 'center' }}>
      <div
        sx={{
          display: 'inline-block',
          backgroundImage: `url(${url})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width: '120px',
          height: '120px',
          borderRadius: '200px',
          mt: 4,
          border: '2px solid white',
        }}
      />
    </div>
    <div sx={{ width: '100%', textAlign: 'center' }}>
      <h2 sx={{ color: 'white', mb: 0 }}>{name}</h2>
    </div>
    <div sx={{ width: '100%', textAlign: 'center' }}>
      <h3 sx={{ color: 'white', mt: 0, mx: 2 }}>{position}</h3>
    </div>
  </div>
);
