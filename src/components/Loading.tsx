import Image from "next/image"

export function Loading() {
  return (
    <div className="flex justify-center flex-col text-center text-sm items-center h-[150px] w-full my-10 max-h-screen gap-4">
      <Image src={'/loader.gif'} height={100} width={100} alt='loading nfts' className='invert'/>
      <p>Fetching your NFTs ...</p>
    </div>
  );
}
