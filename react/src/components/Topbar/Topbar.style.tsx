import styled from 'styled-components';
import { theme } from '../../theme';

export const Bar = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${theme.emerald50};
  min-height: 3rem;
  justify-content: space-around;
  position: fixed;
  width: 100%;
`;

export const IconWrapper = styled.div`
  color: ${theme.gray130};
  margin-top: 0.75rem;

  &:hover {
    color: ${theme.emerald10};
  }
`;