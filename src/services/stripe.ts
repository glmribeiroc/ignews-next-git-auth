import Stripe from "stripe";
import packgeInfo from "../../package.json";

const version = packgeInfo.version;

export const stripe = new Stripe(process.env.STRIPE_API_KEY, {
  apiVersion: "2020-08-27",
  appInfo: {
    name: "Ignews",
    version,
  },
});
