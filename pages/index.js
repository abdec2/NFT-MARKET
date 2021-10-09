import { ethers } from "ethers"
import { useState, useEffect } from "react"
import axios from "axios"
import Web3Modal from 'web3modal'

import NFT from '../artifacts/contracts/NFT.sol/NFT.json'
import Market from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json'

import {
  nftaddress, 
  nftmarketaddress
} from '../config'

export default function Home() {
  const [nfts, setNfts] = useState()
  const [loadingState, setLoadingState] = useState('not-loaded')  

  

  return (
    <div>
    </div>
  )
}
