import styled from 'styled-components';
import { theme } from '../../theme';

export const Bar = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${theme.emerald50};
  min-height: 3rem;
  justify-content: space-around;
`;

export const IconWrapper = styled.div`
  margin-top: 0.75rem;
`;