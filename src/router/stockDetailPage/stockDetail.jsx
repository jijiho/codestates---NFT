import { useLoaderData } from "react-router-dom";
import { stockDataHeaderDetail } from "../../dataSet";

export default function StockDetail({ params }) {
  const { stockDetail } = useLoaderData();

  console.log(stockDetail);
  return <div>{stockDetail.name}</div>;
}

export async function loaderForDetail({ params }) {
  //fetch("서버",{});
  console.log(params);
  const stockDetail = stockDataHeaderDetail[params.stockId];
  return { stockDetail };
}
