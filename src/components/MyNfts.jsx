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
            <img src={nft.image} alt={nft.name} className="w-12" />
            <p>{nft.name}</p>
            <p>{nft.description}</p>
            <button onClick={() => handleTx(nft.tx)}>View on Klaytnscope</button>
          </div>
        ))}
      </div>
    </div>
  )
}