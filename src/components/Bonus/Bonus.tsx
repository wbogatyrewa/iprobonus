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
  total: number;
  burnDate: string;
  burnAmount: number;
}

// делать проверку на окончание слов
// при ховере и клике иконку некст делать инверсной

function Bonus({ total, burnDate, burnAmount }: Props): JSX.Element {
  return (
    <BonusPresentation>
      <BonusGroup>
        <Total>{`${total} бонусов`}</Total>
        <BurnGroup>
          {`${burnDate} сгорит `}
          <Fire>
            <FireIcon />
          </Fire>
          {` ${burnAmount} бонусов`}
        </BurnGroup>
      </BonusGroup>
      <NextButton>
        <NextIcon />
      </NextButton>
    </BonusPresentation>
  );
}

export default Bonus;
