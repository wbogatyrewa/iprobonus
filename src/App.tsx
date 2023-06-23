import React from "react";
import Header from "./components/Header/Header";
import { Container } from "./components/Container/Container";
import Bonus from "./components/Bonus/Bonus";
import { BonusContainer, LoaderContainer } from "./App.style";
import { getAccessToken } from "./api/getAccessToken";
import { getGeneralInfo } from "./api/getGeneralInfo";
import { parseDate } from "./scripts/parseDate";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./app/store";
import { setUserBonus } from "./features/userBonusSlice";
import { setAccessToken } from "./features/accessTokenSlice";
import Loader from "./components/Loader/Loader";

function App() {
  const accessToken = useSelector(
    (state: RootState) => state.accessToken.value
  );
  const userBonus = useSelector((state: RootState) => state.userBonus);
  const dispatch = useDispatch();

  const [loader, setLoader] = React.useState<boolean>(true);

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
        setLoader(false);
      });
    }
  }, [accessToken]);

  return (
    <>
      <Container>
        <Header />
      </Container>
      {loader ? (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      ) : (
        <BonusContainer>
          <Bonus
            currentQuantity={userBonus.currentQuantity}
            dateBurning={userBonus.dateBurning}
            forBurningQuantity={userBonus.forBurningQuantity}
          />
        </BonusContainer>
      )}
    </>
  );
}

export default App;
