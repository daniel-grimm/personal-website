import styled from "styled-components";



export const Flex = styled.div<{
    flexDirection?: string
  }>`
    display: flex;
    flex-direction: row;
    flex-direction: ${(props) => props.flexDirection || "row"};
`
