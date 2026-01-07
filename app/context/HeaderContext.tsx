import { createContext, SetStateAction } from "react";

type HeaderContextType = {
  handleMobileMenuToggle: () => void;
  isMobileMenuShowing?: boolean;
  setIsMobileMenuShowing: (value: SetStateAction<boolean>) => void;
};

 export const HeaderContext = createContext<HeaderContextType>({
  handleMobileMenuToggle: () => {},
  isMobileMenuShowing: false,
  setIsMobileMenuShowing: (value: SetStateAction<boolean>) => {}
})