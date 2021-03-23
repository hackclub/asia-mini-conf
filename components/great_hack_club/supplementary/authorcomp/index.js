/** @format */

import { jsx, Flex, Text } from 'theme-ui';

export default ({ auth_name, author, isInBlog = false, date }) => (
  <Flex sx={{ alignItems: 'center' }}>
    <div
      src={author}
      sx={{
        borderRadius: [200],
        width: isInBlog ? [35] : [35],
        height: 35,
        backgroundImage: `url(${author})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    />
    <Text
      sx={{
        pl: isInBlog ? [2] : [3],
        fontSize: isInBlog ? [1] : [1],
        ':hover': { textDecorationLine: isInBlog ? 'none' : 'underline' },
      }}
    >
      {auth_name}
    </Text>
  </Flex>
);
