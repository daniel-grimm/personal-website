import styled from "styled-components";

export const Flex = styled.div<{
    flexDirection?: string
  }>`
    display: flex;
    flex-direction: ${(props) => props.flexDirection || "row"};
    width: 100%;
    height: 100%;
`
