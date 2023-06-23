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

export interface Props {
  currentQuantity: number;
  dateBurning: string;
  forBurningQuantity: number;
}

// делать проверку на окончание слов
// при ховере и клике иконку некст делать инверсной

function Bonus({
  currentQuantity,
  dateBurning,
  forBurningQuantity,
}: Props): JSX.Element {
  return (
    <BonusPresentation>
      <BonusGroup>
        <Total>{`${currentQuantity} бонусов`}</Total>
        <BurnGroup>
          {`${dateBurning} сгорит `}
          <Fire>
            <FireIcon />
          </Fire>
          {` ${forBurningQuantity} бонусов`}
        </BurnGroup>
      </BonusGroup>
      <NextButton>
        <NextIcon />
      </NextButton>
    </BonusPresentation>
  );
}

export default Bonus;
