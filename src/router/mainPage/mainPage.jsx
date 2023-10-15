import FlowChart from "../../components/flowChart/flowChart";
import RawStockBlock from "../../components/rawStockBlock/rawStockBlock";
import SquareBlock from "../../components/squareBlock/squareBlock";
import { stockDataHeader } from "../../dataSet";

export default function MainPage() {
  const tenStock = stockDataHeader.slice(0, 9);
  return (
    <div className="flex flex-col w-8/12 m-auto">
      <FlowChart></FlowChart>


      <div className="w-full  flex gap-4 mt-8  ">
        <div className="w-8/12 border border-black px-6  rounded-2xl">
          <div className="text-2xl font-bold  pt-4 pb-3  ">
            <p className="">관심가질만한 종목들</p>
          </div>
          <div className="flex justify-between border-b border-black mb-4 pb-2">
            <div className="">종목명</div>
            <div className="flex gap-10 justify-between w-44">
              <div>등락율</div>
              <div lassName="w-24 text-right">가격</div>
            </div>
          </div>
          {tenStock.map((el) => {
            return (
              <div className="pb-4">
                <RawStockBlock stockInfo={el}></RawStockBlock>
              </div>
            );
          })}
        </div>
        <div className="w-4/12 border border-black rounded-2xl">
          <div className="w-11/12 m-auto mt-6">
            <img
              src="https://coinsect-production.s3.ap-northeast-2.amazonaws.com/boards/free_board/0f374ad1-c336-4f65-9c4b-9e1c4f485152_%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA%25202022-05-30%2520%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE%25204.19.12.png"
              alt=""
            ></img>
            <div className="flex flex-col gap-3">
              <div className="mt-2 text-2xl text-bold">토스</div>
              <div>전일 종가 :$132.33</div>
              <div>일일 변동폭 :$128.95 - $133.31</div>
              <div>시가총액 :1.32조 USD</div>
              <div>배당수익률 :12$</div>
              <div>주가수익률 :20$</div>
              <button className="border bg-red-200 py-1 mb-1 border-black self-end w-24 rounded-md">
                자세히 보기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
