import styled from 'styled-components';
import { theme } from '../../theme';

export const Box = styled.div`
  border: solid 1px;
  border-radius: 7px;
  min-width: 90%;
  max-width: 90%;
  align-items: center;
  margin-left: 5%;
  margin-top: 2rem;
  background-color: ${theme.gray120};
`;

export const Header = styled.h1`
margin-left: 0.5rem;
`;

export const Body = styled.div`
margin-left: 0.5rem;
padding-bottom: 0.5rem;
`;