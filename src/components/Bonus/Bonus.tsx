import React from "react";
import {
  BonusGroup,
  BonusPresentation,
  BurnGroup,
  Fire,
  NextButton,
  Total,
} from "./Bonus.style";
import NextIcon from "../Icons/NextIcon";
import FireIcon from "../Icons/FireIcon";
import { wordDeclension } from "../../scripts/wordDeclension";

export interface Props {
  currentQuantity: number;
  dateBurning: string;
  forBurningQuantity: number;
}

// при ховере и клике иконку некст делать инверсной

function Bonus({
  currentQuantity,
  dateBurning,
  forBurningQuantity,
}: Props): JSX.Element {
  return (
    <BonusPresentation>
      <BonusGroup>
        <Total>{`${currentQuantity} ${wordDeclension(currentQuantity, [
          "бонус",
          "бонуса",
          "бонусов",
        ])}`}</Total>
        <BurnGroup>
          {`${dateBurning} сгорит `}
          <Fire>
            <FireIcon />
          </Fire>
          {` ${forBurningQuantity} ${wordDeclension(forBurningQuantity, [
            "бонус",
            "бонуса",
            "бонусов",
          ])}`}
        </BurnGroup>
      </BonusGroup>
      <NextButton>
        <NextIcon />
      </NextButton>
    </BonusPresentation>
  );
}

export default Bonus;
