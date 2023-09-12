
import Image from 'next/image'
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const NftItem = ({ nft, isSelected, onClick }: any) => {
  return (
    <div onClick={onClick} key={nft.id} className="rounded-lg relative pb-4 border">
      <div className='w-70 h-70 object-cover bg-gradient-to-br from-black to-matte-black rounded-lg shadow-xl shadow-black'>
        <Image
          src={nft.content.files[0].uri}
          width={150}
          height={150}
          alt="NFT"
          className={`w-full h-40 object-cover rounded-lg   `}
        />
      </div>
      <p className="font-medium my-2 px-2  text-start w-32 text-lg truncate hover:text-[#FF8A57]">
        {nft.content.metadata.name}
      </p>
    </div>
  );
};

