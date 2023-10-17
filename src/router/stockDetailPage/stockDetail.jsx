import { Link, useLoaderData } from "react-router-dom";
import { stockDataHeaderDetail } from "../../dataSet";
import StockGraph from "./components/stockGraph";
import JaemooGraph from "./components/jaemooGraph";
import OctagonGraph from "./components/octagonGraph";

export default function StockDetail() {
  const { stockDetail } = useLoaderData();

  console.log(stockDetail);
  return (
    <div className="flex flex-col w-8/12 m-auto mt-8">
      <p className="text-2xl font-bold">{stockDetail.name}</p>
      <p className="text-3xl font-bold ">{stockDetail.price}</p>
      <p
        className={`text-md font-bold ${
          stockDetail.isPositive ? "text-blue-500" : "text-red-500"
        }`}
      >
        {stockDetail.isPositive ? "+" : "-"}
        {3241}₩
      </p>
      <div className="flex justify-between gap-8 h-96 my-4">
        <div className="w-8/12 border">
          그래프 넣는 곳<StockGraph></StockGraph>
        </div>
        <div className="w-4/12 border-2 pl-2 py-3 border-black rounded-md text-md flex flex-col ">
          <p className="border-b py-3">
            전일 종가:
            <span className="font-bold"> {stockDetail.endPointWon}</span>
          </p>
          <p className="border-b py-3">
            현재가:
            <span className="font-bold">{stockDetail.price}</span>
          </p>
          <p className="border-b py-3">
            변동가:
            <span className="font-bold">
              {stockDetail.bounderyStart}~{stockDetail.bounderyEnd}
            </span>
          </p>
          <p className="border-b py-3">
            추정 시총:
            <span className="font-bold"> {stockDetail.totalPrice}</span>
          </p>
          <p className="border-b py-3">
            주가 수익률:
            <span className="font-bold"> {stockDetail.incomeByStock}</span>
          </p>
          <p className="border-b py-3">
            배당 수익률:
            <span className="font-bold"> {stockDetail.incomeBySalary}</span>
          </p>
          <p className="pt-3">
            최근 거래 내역:
            <span className="font-bold"> {3}</span>
          </p>
          <Link
            className="border border-black rounded-md self-end mr-4 py-1 px-2 bg-amber-300"
            to={`/stockDetail/${stockDetail.index}/orderBook`}
          >
            거래하러 가기
          </Link>
        </div>
      </div>
      <div className="border border-black rounded-lg w-full mt-3 flex flex-col pl-4 py-4">
        <p className="text-xl font-bold">기업 정보</p>
        <p className="texl-sm px-4 mb-4">
          퓨처웍스 컴퍼니는 혁신과 미래를 위한 솔루션을 제공하는 글로벌
          기업입니다. 우리는 최첨단 기술과 창의적인 아이디어를 결합하여 다양한
          분야에서 고객의 비즈니스를 향상시키고 지속 가능한 성장을 돕는 데
          전념하고 있습니다.
        </p>
        <p className="pb-2 border-b border-1 ">인덱스 번호:{}</p>
        <p className="pb-2 border-b border-1 ">기업이름:{}</p>
        <p className="pb-2 border-b border-1 ">사업자 번호:{}</p>
        <p className="pb-2 border-b border-1 ">설립일:{}</p>
        <p className="pb-2 border-b border-1 ">대표자:{}</p>
        <p className="pb-2 border-b border-1 ">산업:{}</p>
        <p className="pb-2 border-b border-1 ">기업형태:{}</p>
        <p className="pb-2 border-b border-1 ">종업원수:{}</p>
        <p className="pb-2 border-b border-1 ">본사주소:{}</p>
        <p className="">홈페이지:{}</p>
      </div>
      <div className="border border-black rounded-lg w-full mt-3 flex flex-col h-80 pl-4 py-4">
        <JaemooGraph></JaemooGraph>
        재무재표
      </div>
      <div className="border border-black rounded-lg w-full mt-3 flex flex-col h-80 pl-4 py-4">
        <OctagonGraph></OctagonGraph>
        오각형 그래프
      </div>
    </div>
  );
}

export async function loaderForDetail({ params }) {
  //fetch("서버",{});
  console.log(params);
  const stockDetail = stockDataHeaderDetail[params.stockId];
  return { stockDetail };
}
