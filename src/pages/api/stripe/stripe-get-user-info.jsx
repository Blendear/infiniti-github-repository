//hook1 - make this function dynamic & use it
// - email dynamicly got (send it inside the requst body), instead of palceholder
// - use LIVE version api key later on
// - reidrect to "/e-trener", when a subscribed user enters the "/e-trener/info-o-subskrypcji" page, which he gets on after login:

const handleStripeGetUserInfo = async (req, res) => {
  const stripe = require("stripe")(`${process.env.STRIPE_API_SECRET_KEY_TEST}`);
  //hook1 WILL IT ALSO WORK FOR A DOPIERO CO SYTWORZONY USER? CZY POTRZEBUJ ETO TROCHE, ŻEBY ZADZIAŁAÓŁ?

  // get email of Auth0 user (placeholder user right now)
  const placeholderEmail = "tobiascibis@gmail.com";

  // find customer object in stirpe wiht that email
  const listOfCustomers = await stripe.customers.list({
    limit: 3,
    email: placeholderEmail,
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
    listOfCustomers: listOfCustomers.data.length,
    doesASubWithThisIDExist: doesASubWithThisIDExist,
    content,
  });
};

export default handleStripeGetUserInfo;
