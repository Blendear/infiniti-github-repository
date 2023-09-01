// hook1 - use LIVE version api key later on

const stripeGetUserInfo = async (req, res) => {
  // console.log("req.query", req.query.userEmail);
  const stripe = require("stripe")(`${process.env.STRIPE_API_SECRET_KEY_TEST}`);
  //hook1 WILL IT ALSO WORK FOR A DOPIERO CO SYTWORZONY USER? CZY POTRZEBUJ ETO TROCHE, ŻEBY ZADZIAŁAÓŁ?

  // get email of Auth0 user (placeholder example below \/, yet I'm using a dynamic email passed through "req.query", with my custom "userEmail" property)
  // const placeholderEmail = "tobiascibis@gmail.com";

  // find customer object in stirpe wiht that email
  const listOfCustomers = await stripe.customers.list({
    limit: 3,
    email: req.query.userEmail,
  });

  // get his id
  const customerID =
    listOfCustomers.data.length > 0 && listOfCustomers.data[0].id;

  // get all subscriptions
  const listOfSubscriptions = await stripe.subscriptions.list();

  //check if there is a subscription with this id
  let doesASubWithThisIDExist = false;
  for (let i = 0; i < listOfSubscriptions.data.length; i++) {
    if (listOfSubscriptions.data[i].customer === customerID) {
      doesASubWithThisIDExist = true;
    }
  }
  let content = "";
  // if yes - show the content
  content = doesASubWithThisIDExist ? "content" : "error message";
  // if no - show the error message

  res.status(200).json({
    status: 200,
    data: {
      listOfCustomers: listOfCustomers.data.length,
      doesASubWithThisIDExist: doesASubWithThisIDExist,
      content,
    },
    coll: "stripe/stripe-get-user-info",
    testMessage: "Success, response is allright!",
  });
};

export default stripeGetUserInfo;
