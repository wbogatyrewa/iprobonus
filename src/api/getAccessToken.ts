export const getAccessToken = async () => {
  try {
    const url = `${process.env.ACCESS_POINT_TOKEN}`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        AccessKey: `${process.env.ACCESS_KEY}`,
      },
      body: JSON.stringify({
        idClient: `${process.env.CLIENT_ID}`,
        accessToken: "",
        paramName: "device",
        paramValue: `${process.env.DEVICE_ID}`,
        latitude: 0,
        longitude: 0,
        sourceQuery: 0,
      }),
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
