import Image from "next/image";
import Link from "next/link";

const Character = ({ id, name }) => {
  const imgSrc = `https://ddragon.leagueoflegends.com/cdn/16.21.1/img/champion/${id}.png`;

  return (
    <Link href={`/${id}`}>
      <div className={`flex flex-col gap-2 items-center`}>
        <Image
          loading="eager"
          width={100}
          height={100}
          className={`w-full h-full aspect-4/5 rounded-lg object-cover`}
          src={imgSrc}
          alt={``}
        />
        <span className={`w-30 text-center`}>{name}</span>
      </div>
    </Link>
  );
};

export default Character;
