import React from "react";
import { HeaderPresentation, InfoButton, Logo } from "./Header.style";
import InfoIcon from "../Icons/InfoIcon";

export interface Props {
  logo?: string;
  infoIcon?: React.ReactNode;
  infoOnClick?: () => void;
}

function Header({
  logo = "Логотип",
  infoIcon = InfoIcon(),
  infoOnClick = () => {},
}: Props): JSX.Element {
  return (
    <HeaderPresentation>
      <Logo>{logo}</Logo>
      <InfoButton onClick={infoOnClick}>{infoIcon}</InfoButton>
    </HeaderPresentation>
  );
}

export default Header;
