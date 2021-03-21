/**
 * @format
s
 */

import { Flex, Text, Box } from 'theme-ui';
import CardTemplate from '../supplementary/cardtemplate/index';
import AuthorComp from '../supplementary/authorcomp/index';

export default ({
  index,
  posterurl,
  title,
  author,
  para,
  labelimgurl,
  customAfterStyle,
  url,
}) => (
  <Box
    as="a"
    href={url ? url : '#'}
    sx={{
      //    width: ['300px', '300px', '300px', '300px', '450px', '300px', '500px'],
      display: 'inline-block',
      // ml: index == 0 ? 0 : [0, 3],
      mr: [0, 3],
      whiteSpace: 'normal',
      color: 'text',
      textDecoration: 'none',
    }}
  >
    <CardTemplate
      sx={{
        width: '100%',
        height: ['300px', '300px', '300px', '300px', '320px', '350px', '450px'],
        position: 'relative',
        bg: 'red',
        borderRadius: [10],
        backgroundImage: `url(${posterurl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        filter: 'drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25))',
        ':after': {
          width: ['5rem', '4.5rem'],
          height: ['7rem', '4.5rem'],
          bottom: ['-1.5rem'],
          right: ['0rem'],
          transform: 'rotate(15deg)',
          display: ['none', 'initial'],
          /**The above are some default styles*/

          ...customAfterStyle,

          backgroundImage: `url(${labelimgurl})`,
        },
        ':hover': {
          transform: 'scale(1.01)',
          transition: '0.1s',
        },
      }}
    ></CardTemplate>
    <h1
      sx={{
        mb: [1],
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        fontSize: [3, 3, 3, 3, 3, 3, 4],
        ':hover': { textDecorationLine: 'underline' },
      }}
    >
      {title}
    </h1>
    <AuthorComp author={author} />
    <p sx={{ fontSize: [1, 1, 1, 1, 1, 1, 3], display: ['block'] }}>{para}</p>
  </Box>
);
