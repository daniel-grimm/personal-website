import styled from 'styled-components';
import { theme } from '../../theme';

export const Bar = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 10rem;
  background-color: ${theme.emerald50};
  position: fixed;
`;
