import { ethers } from "ethers"
import { useState, useEffect } from "react"
import axios from "axios"
import Web3Modal from 'web3modal'

import NFT from '../artifacts/contracts/NFT.sol/NFT.json'
import Market from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json'

import Item from './components/Item'

import {
  nftaddress,
  nftmarketaddress
} from '../config'

export default function Home() {
  const [nfts, setNfts] = useState([])
  const [loadingState, setLoadingState] = useState('not-loaded')

  useEffect(() => {
    loadNFTs()
  }, [])

  const loadNFTs = async () => {
    const provider = new ethers.providers.JsonRpcProvider('https://rpc-mumbai.maticvigil.com');
    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider);
    const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, provider);

    const data = await marketContract.fetchMarketItems();
    const items = await Promise.all(data.map(async i => {
      const tokenUri = await tokenContract.tokenURI(i.tokenId)
      const meta = await axios.get(tokenUri);
      let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
      let item = {
        price,
        tokenId: i.tokenId.toNumber(),
        seller: i.seller,
        owner: i.owner,
        image: meta.data.image,
        name: meta.data.name,
        description: meta.data.description
      }

      return item;
    }))

    setNfts(items);
    setLoadingState('loaded');
  }

  const buyNft = async nft => {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);

    const signer = provider.getSigner();
    const contract = new ethers.Contract(nftmarketaddress, Market.abi, signer);

    const price = ethers.utils.parseUnits(nft.price.toString(), 'ether');

    const transaction = await contract.createMarketSale(nftaddress, nft.tokenId, {
      value: price
    });

    await transaction.wait();
    loadNFTs()
  }

  if (loadingState === 'loaded' && !nfts.length) return (<h1 className="px-20 py-10 text-3xl">No items in marketplace</h1>)
  console.log(nfts)
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
            {
              nfts.map((nft, i) => (
                <Item key={i} image={nft.image} name={nft.name} desc={nft.description} price={nft.price} nft={nft} buyFunction={buyNft} />
              ))
            }
        </div>
      </div>
    </section>
  )
}
