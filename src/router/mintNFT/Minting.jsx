import React, { useState } from 'react';
import { jsonToPinata } from '../../api/pinataCall.js';
import { uploadImgToPinata } from '../../api/pinataCall.js';
import { minting } from '../../contract/minting.js';
// import {AttendABI, AttendCA, getAbiData} from '../../contract/getAbiData.js';


const FormData = require('form-data')

export default function MintingPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [prevImage, setPrevImage] = useState(null);
  const [nftName, setNftName] = useState('');
  const [nftDescription, setNftDescription] = useState('');
  const [mintingStatus, setMintingStatus] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();
    setSelectedImage(file);
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPrevImage(reader.result);
    };
  };

  const mintNFT = async () => {
    // 1. 이미지를 Pinata에 업로드합니다.
    const formData = new FormData();
    formData.append("file", selectedImage);
    const ipfsHash = await uploadImgToPinata(formData);
    // 2. NFT 메타데이터를 작성합니다.
    const metadata = {
      name: nftName,
      description: nftDescription,
      image: ipfsHash,
     };
    jsonToPinata(metadata);

    // 3. NFT를 생성합니다.
    const tokenURI = await jsonToPinata(metadata);
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(AttendCA, AttendABI, signer);
    
    
  };



  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      {prevImage && <img src={prevImage} alt="Selected" className='w-32'/>}
      <input
        type="text"
        placeholder="NFT Name"
        value={nftName}
        onChange={(e) => setNftName(e.target.value)}
      />
      <input
        type="text"
        placeholder="NFT Description"
        value={nftDescription}
        onChange={(e) => setNftDescription(e.target.value)}
      />
      <button onClick={() => mintNFT(selectedImage)}>Mint NFT</button>
      {mintingStatus && <p>{mintingStatus}</p>}
    </div>
  );
}
