import styled from 'styled-components';
import { theme } from '../../theme';

export const Box = styled.div`
  border: solid 2px;
  border-radius: 7px;
  border-color: ${theme.emerald50};
  min-width: 90%;
  max-width: 90%;
  align-items: center;
  margin-left: 5%;
  margin-top: 2rem;
  background-color: ${theme.white};
`;

export const Header = styled.h1`
margin-left: 0.5rem;
`;

export const Body = styled.div`
margin-left: 0.5rem;
padding-bottom: 0.5rem;
`;