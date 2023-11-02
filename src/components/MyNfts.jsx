import {getNftsByAddress} from "../api/kasCall.js";
import { useState, useEffect } from "react";

export default function GetMyNFTs({address}) {
  const [nfts, setNfts] = useState([]);
  console.log(address);
  const getNfts = async () => {
    console.log("!");
    const nfts = await getNftsByAddress(address);
    setNfts(nfts);
  };
  const handleAddress = (address) => {
    window.open(`https://baobab.klaytnscope.com/account/${address}?tabId=txList`);
  };
  const handleTx = (tx) => {
    window.open(`https://baobab.klaytnscope.com/tx/${tx}?tabId=nftTransfer`);
  };
  useEffect(() => {
    getNfts();
  }, []);


  return(
    <div>
      <div>
        {nfts.map((nft) => (
          <div key={nft.id}>
            <div className="flex items-center mb-8">
              <img src={nft.image} alt={nft.name} className="w-36 ml-4 mr-4" />
              <div>
                <p>{nft.name}</p>
                {nft.description}
              </div>
              <button onClick={() => handleTx(nft.transactionHash)} className="ml-8 hover:text-blue-600">{nft.transactionHash.slice(0,6)}...{nft.transactionHash.slice(
                            nft.transactionHash.length - 5,
                            nft.transactionHash.length - 1
                          )}</button>
              <button onClick={() => handleAddress(nft.contractAddress)} className="ml-8 hover:text-blue-600">
              {nft.contractAddress.slice(0, 6)}...
                          {nft.contractAddress.slice(
                            nft.contractAddress.length - 5,
                            nft.contractAddress.length - 1
                          )}
              </button>
              <div className="ml-4">{nft.createdAt}</div>
              <div className="ml-12">{nft.tokenId}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}