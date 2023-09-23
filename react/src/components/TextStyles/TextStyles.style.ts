import styled from "styled-components";
import { theme } from "../../theme";

export const Paragraph = styled.p`
  font-family: ${theme.sansSerifFontFamily};
  padding-right: 0.5rem;
`;

export const SectionTitle = styled.h1`
  font-family: ${theme.sansSerifFontFamily};
  display: flex;
  justify-content: center;
`;

export const SectionHeader = styled.h2`
  font-family: ${theme.sansSerifFontFamily};
`;

export const SidebarButton = styled.button<{
  height: string;
}>`
  display: flex;
  font-size: 20px;
  font-family: ${theme.serifFontFamily};
  width: 100%;
  height: ${(props) => props.height ?? "3rem"};
  cursor: cursor;
  align-items: center;
  gap: 0.8rem;
  padding-left: 1.5rem;
  border: 0px;
  background-color: ${theme.emerald50};
  color: ${theme.gray130};

  &:hover {
    background-color: ${theme.emerald200};
    color: ${theme.emerald10};
  }
`;

export const TopbarButton = styled.button<{
  height: string;
}>`
  display: flex;
  font-size: 20px;
  font-family: ${theme.serifFontFamily};
  width: 100%;
  height: ${(props) => props.height ?? "3rem"};
  cursor: cursor;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding-left: 1.5rem;
  border: 0px;
  background-color: ${theme.emerald50};
  color: ${theme.gray130};

  &:hover {
    background-color: ${theme.emerald200};
    color: ${theme.emerald10};
  }
`;

export const UnorderedList = styled.ul``;

export const ListItem = styled.li``;

export const TextLink = styled.a``;
