import styled from '@emotion/styled';

const Flex = styled.div<{ col?: boolean }>`
  display: flex;
  flex-direction: ${(props) => props.col && 'column'};
`;

export default Flex;
