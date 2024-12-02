import { getPayload } from "payload";
import config from "@payload-config";
import { Portfolio } from "@/payload-types";
import PortfolioScreen from "@/components/portfolio";

async function getData() {
  const payload = await getPayload({ config });

  const data = await payload.find({
    collection: "portfolios",
  });

  if (!data) {
    throw new Error("Data not exist");
  }

  return data.docs[0];
}

export default async function Home() {
  const data = (await getData()) as Portfolio;

  return <PortfolioScreen {...data} />;
}