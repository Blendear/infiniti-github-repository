import { useUser } from "@auth0/nextjs-auth0/client";
import React, { useEffect } from "react";
import stripeGetUserInfo from "../../../../utils/stripeGetUserInfo";
import router from "next/router";

export const useCheckSubscriptionStatus = (
  setPokazInfoNiezasubskrybowanemu: React.Dispatch<
    React.SetStateAction<boolean>
  >
) => {
  const { user } = useUser();

  useEffect(() => {
    const checkSubscriptionStatus = async () => {
      const subInfo = await stripeGetUserInfo(user.email);
      subInfo.data.doesASubWithThisIDExist
        ? setPokazInfoNiezasubskrybowanemu(true)
        : router.push("/infiniti-app/informacje-o-subskrypcji");
    };
    user && checkSubscriptionStatus();
  }, [user]);
};
