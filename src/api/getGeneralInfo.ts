export const getGeneralInfo = async (accessToken: string) => {
  try {
    const url = `${process.env.REACT_APP_ACCESS_POINT_BONUS}/${accessToken}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        AccessKey: `${process.env.REACT_APP_ACCESS_KEY}`,
      },
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
