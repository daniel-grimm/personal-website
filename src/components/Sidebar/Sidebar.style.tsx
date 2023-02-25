import styled from 'styled-components';
import { theme } from '../../theme';

export const Bar = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  height: 100vh;
  width: 10rem;
  background-color: ${theme.emerald50};
`;

export const ListItem = styled.div`
  display: flex;
  font-size: 20px;
  color: ${theme.white};
  padding-top: 1rem;
  padding-bottom: 1rem;
  &:hover {
    background-color: ${theme.emerald200};
    color: ${theme.black};
  }
`
