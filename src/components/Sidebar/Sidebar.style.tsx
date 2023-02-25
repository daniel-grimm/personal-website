import styled from 'styled-components';
import { theme } from '../../theme';

export const Bar = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  height: 100vh;
  width: 10rem;
  gap: 2rem;
  background-color: ${theme.emerald50};
`;

export const ListItem = styled.div`
  display: flex;
  font-size: 20px;
  color: ${theme.white};
  &:hover {
    background-color: ${theme.emerald160};
    color: ${theme.black};
  }
`

