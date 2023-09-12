import Image from "next/image";
import Link from "next/link";

export const Logo = () => {

  return (
    <Link href="/" passHref>
      <Image
        src={'/builderz-white.svg'}
        alt=""
        className="min-w-[30px] w-32 max-w-[200px] cursor-pointer"
        width={100}
        height={100}
      />
    </Link>
  );
};
