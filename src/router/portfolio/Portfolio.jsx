import { stockDataForPortfolio } from "../../dataSet";
import { ethers } from "ethers";
import { useEffect, useState } from "react";

export default function PortfolioPage() {
  const dataOwn = stockDataForPortfolio.slice(0, 4);
  const [walletAddress, setWalletAddress] = useState("");
  const [walletBalance, setWalletBalance] = useState(0);
  const [chainId, setChainId] = useState(0);
  useEffect(() => {
    getCurrentWalletConneted();
    addWalletListener();
  }, [walletAddress]);
  const provider = new ethers.BrowserProvider(window.ethereum);
  const getCurrentWalletConneted = async () => {
    if(typeof window != "undefined" && typeof window.ethereum != "undefined"){
      try{
        const account = await window.ethereum.request({method: "eth_requestAccounts"});
        const chainId = await window.ethereum.request({method: 'eth_chainId' });
        if(account.length > 0){
          setWalletAddress(account[0]);
          const balance = await provider.getBalance(account[0]);
          setWalletBalance(ethers.formatEther(balance));
          setChainId(chainId);
        }
        else {
          console.log("connectMetamask error")
        }
      } catch(err){
        console.log(err);
      }
    } else {
      console.log("No metamask");
    }
  }
  const addWalletListener = async () => {
    if(typeof window != "undefined" && typeof window.ethereum != "undefined"){
      window.ethereum.on("accountsChanged", (accounts) => {
        setWalletAddress(accounts[0]);
      });
      window.ethereum.on("chainChanged", async (chainId) => {
        setChainId(chainId);
        //setWalletBalance(??)
      });
    } else {
      setWalletAddress("");
      setChainId(0);
      setWalletBalance(0);
    }
  };
  return (
    <div className="flex flex-col w-8/12 mx-auto">
      <div className="w-full border-black border-2 mt-12 px-12 py-12 rounded-lg flex flex-col gap-2">
        <div className="flex justify-between">
          <p className="text-2xl font-bold ">내 지갑</p>
          <div className=" flex gap-20">
            <div className="px-2 py-1 border border-black rounded-2xl hover:cursor-pointer hover:bg-yellow-200">
              거래내역
            </div>
            <div className="px-2 py-1 border border-black rounded-2xl hover:cursor-pointer hover:bg-yellow-200">
              포트폴리오
            </div>
          </div>
        </div>
        <p className="text-xl pt-4">
          <span className=" font-bold">총자산:</span>
          {chainId}
        </p>
        <p className="text-xl pb-4 ">
          <span className=" font-bold">지갑 주소</span>
          {walletAddress}
        </p>

        <div className="text-mg flex">
          <div className="w-1/2">
            <span className="font-bold">보유 Token:</span>
            {walletBalance}
          </div>
          <div className="w-1/2">
            <span className="font-bold">예상 배당금:</span>
            {userData.expectSalary}
          </div>
        </div>
        <div className="text-mg flex">
          <div className="w-1/2">
            <span className="font-bold">총 수익률:</span>
            {userData.walletAddress}
          </div>
          <div className="w-1/2">
            <span className="font-bold">수수료:</span>
            {userData.walletAddress}
          </div>
        </div>
        <div className="text-mg flex">
          <div className="w-1/2">
            <span className="font-bold">총 매수금</span>
            {userData.walletAddress}
          </div>
          <div className="w-1/2">
            <span className="font-bold">총 매도금</span>
            {userData.walletAddress}
          </div>
        </div>
      </div>

      <div className="w-full border-black border-2 mt-12 px-12 py-8 rounded-lg flex flex-col gap-2">
        <p className="text-2xl font-bold my-4">보유 주식</p>
        <div className="flex flex-col">
          <div className="flex font-bold text-xl justify-between  text-center my-2">
            <div className="w-1/6">종목명</div>
            <div className="w-1/6">잔고 수량</div>
            <div className="w-1/6">매입가</div>
            <div className="w-1/6">현재가</div>
            <div className="w-1/6">평가손익</div>
            <div className="w-1/6">수익률</div>
          </div>
          <div className="flex flex-col text-center">
            {dataOwn.map((el) => {
              const ratedYeild = (el.priceThen - el.priceNow) * el.amount;
              return (
                <div className="flex  text-xl justify-between ">
                  <div className="w-1/6">{el.name}</div>
                  <div className="w-1/6">{el.amount}</div>
                  <div className="w-1/6">{el.priceThen}$</div>
                  <div className="w-1/6">{el.priceNow}$</div>
                  <div
                    className={`w-1/6 ${
                      ratedYeild >= 0 ? "text-red-400" : "text-blue-400"
                    }`}
                  >
                    {ratedYeild}$
                  </div>
                  <div
                    className={`w-1/6 ${
                      ratedYeild >= 0 ? "text-red-400" : "text-blue-400"
                    }`}
                  >
                    {el.yieldRate}$
                  </div>
                </div>
              );
            })}
            <button className="ml-10/12 self-center  mt-5 text-sm font-semibold p-2">
              보유주식 더 보기 {">"}
            </button>
          </div>
        </div>
      </div>

      <div className="w-full border-black border-2 mt-12 px-12 py-8 rounded-lg flex flex-col gap-2">
        <p className="text-2xl font-bold ">주주총회</p>
        <div className="flex flex-col text-xl justify-between   my-2">
          <div className="w-1/6">삼성전자</div>
          <div className="w-1/6">ibm</div>
          <div className="w-1/6">Johnson & Johnson</div>
          <div className="w-1/6">Walmart</div>
          <div className="w-1/6">Alphabet</div>
          <div className="w-1/6">Netflix</div>
        </div>
      </div>
      <div className="w-full border-black border-2 mt-12 px-12 py-8 rounded-lg flex flex-col gap-2">
        <p className="text-2xl font-bold ">대기중인 내 주문</p>
        <div className="flex flex-col text-xl justify-between   my-2">
          <div className="w-1/6">삼성전자</div>
          <div className="w-1/6">ibm</div>
          <div className="w-1/6">Johnson & Johnson</div>
          <div className="w-1/6">Walmart</div>
          <div className="w-1/6">Alphabet</div>
          <div className="w-1/6">Netflix</div>
        </div>
      </div>
    </div>
  );
}

const userData = {
  walletAddress: "asdf2r23d21wq23eZxzdsaf12e3ds",
  expectSalary: "12",
  totalMoney: "32",
};

// {
//     name: "Samsung",
//     ticker: "SAM",
//     amount: "20",
//     yieldRate: "-0.05",
//     priceNow: "$150",
//     "price then": "$160",
//   },
