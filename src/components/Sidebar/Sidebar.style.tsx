import styled from 'styled-components';
import { theme } from '../../theme';

export const Bar = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 10rem;
  background-color: ${theme.emerald50};
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  color: ${theme.white};
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-family: "Times New Roman", Times, serif;

  &:hover {
    background-color: ${theme.emerald200};
    color: ${theme.black};
  }
`
