import React from "react";
import Header from "./components/Header/Header";
import { Container } from "./components/Container/Container";
import Bonus from "./components/Bonus/Bonus";
import { BonusContainer } from "./App.style";
import { getAccessToken } from "./api/getAccessToken";
import { getGeneralInfo } from "./api/getGeneralInfo";
import { parseDate } from "./scripts/parseDate";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./app/store";
import { setUserBonus } from "./features/userBonusSlice";
import { setAccessToken } from "./features/accessTokenSlice";

function App() {
  const accessToken = useSelector(
    (state: RootState) => state.accessToken.value
  );
  const userBonus = useSelector((state: RootState) => state.userBonus);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!accessToken) {
      getAccessToken().then((response) => {
        dispatch(setAccessToken(response.accessToken));
      });
    }
  }, []);

  React.useEffect(() => {
    if (accessToken) {
      getGeneralInfo(accessToken).then((data) => {
        dispatch(
          setUserBonus({
            currentQuantity: data.data.currentQuantity,
            forBurningQuantity: data.data.forBurningQuantity,
            dateBurning: parseDate(data.data.dateBurning),
          })
        );
      });
    }
  }, [accessToken]);

  return (
    <>
      <Container>
        <Header />
      </Container>
      <BonusContainer>
        <Bonus
          currentQuantity={userBonus.currentQuantity}
          dateBurning={userBonus.dateBurning}
          forBurningQuantity={userBonus.forBurningQuantity}
        />
      </BonusContainer>
    </>
  );
}

export default App;
