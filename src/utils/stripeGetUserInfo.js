// Util functions should be pure funciton - same input gives you the same output

const stripeGetUserInfo = async (userEmail) => {
  try {
    const response = await fetch(
      `/api/stripe/stripe-get-user-info/${userEmail}`,
      {
        method: "GET",
      }
    );

    const data = await response.json();
    // console.log("status data", data);
    if (data.status !== 200) {
      throw data;
    } else {
      // setLoadingState("finished");
      return data;
    }
  } catch (err) {
    console.error(err);
  }
};

export default stripeGetUserInfo;
