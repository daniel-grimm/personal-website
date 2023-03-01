import styled from 'styled-components';
import { theme } from '../../theme';

export const Box = styled.div`
  border-radius: 7px;
  min-width: 90%;
  max-width: 90%;
  align-items: center;
  margin-left: 5%;
  margin-top: 2rem;
  background-color: ${theme.white};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const Header = styled.h1`
  display: flex;
  margin-left: 0.5rem;
  justify-content: center;
  align-items: center;
`;

export const Body = styled.div`
  margin-left: 0.5rem;
`;

export const Text = styled.p`
`;

export const Break = styled.div``;
