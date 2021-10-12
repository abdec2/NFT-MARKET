function Item({image, name, desc, price, nft, buyFunction}) {
    return (

        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
                <img alt="nft" className="object-center w-full h-full block object-contain" src={image || 'https://dummyimage.com/420x260'} />
            </a>
            <div className="mt-4">
                <h3 className="text-gray-900 text-lg tracking-widest title-font mb-1">{name || 'NFT Name'}</h3>
                <h3 className="text-gray-500 title-font text-xs font-medium">{desc || 'Description'}</h3>
                <p className="mt-1">{price || '0.124'} Matic</p>
            </div>
            <div className="mt-2">
                <button className="w-full bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-12 rounded" onClick={() => buyFunction(nft)}>Buy</button>
            </div>
        </div>

    )
}

export default Item
