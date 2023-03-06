import { useMediaQuery } from "react-responsive";

export function useIsMobileView(): boolean {
  return useMediaQuery({
    query: "(min-width: 920px)",
  });
}
