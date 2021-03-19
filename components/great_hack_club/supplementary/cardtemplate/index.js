/** @format */

import styled from '@emotion/styled';

const CustomBox = styled.div`
  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    background-size: 100%;
    background-repeat: no-repeat;
  }
`;
export default CustomBox;
