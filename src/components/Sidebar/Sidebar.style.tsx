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
  font-size: 20px;
  color: ${theme.gray130};
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-family: ${theme.serifFontFamily};
  gap: 0.8rem;
  padding-left: 1.5rem;

  &:hover {
    background-color: ${theme.emerald200};
    color: ${theme.emerald10};
  }
`

export const Link = styled.a`
  text-decoration: none;
`;