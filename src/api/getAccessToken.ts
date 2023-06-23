export const getAccessToken = async () => {
  try {
    const url = `${process.env.REACT_APP_ACCESS_POINT_TOKEN}`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        AccessKey: `${process.env.REACT_APP_ACCESS_KEY}`,
      },
      body: JSON.stringify({
        idClient: `${process.env.REACT_APP_CLIENT_ID}`,
        accessToken: "",
        paramName: "device",
        paramValue: `${process.env.REACT_APP_DEVICE_ID}`,
        latitude: 0,
        longitude: 0,
        sourceQuery: 0,
      }),
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
