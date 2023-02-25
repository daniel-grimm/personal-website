import styled from 'styled-components';
import { theme } from '../../theme';

export const Box = styled.div`
  display: flex;
`;

export const Header = styled.h1`
  display: flex;
  font-weight: ${theme.heavyFontWeight};
  font-family: ${theme.sansSerifFontFamily};
`;

export const Body = styled.div`
  display: flex;
`;