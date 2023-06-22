export const getGeneralInfo = async (accessToken: string) => {
  try {
    const url = `${process.env.ACCESS_POINT_BONUS}${accessToken}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        AccessKey: `${process.env.ACCESS_KEY}`,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
