import styled from 'styled-components';

export const Spacer = styled.div<{
    minHeight: string
    maxHeight: string
  }>`
    width: 100%;
    min-height: ${(props) => props.minHeight || "1rem"};
    max-height: ${(props) => props.maxHeight || "1rem"};
`
