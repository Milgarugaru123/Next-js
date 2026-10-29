import Character from "@/components/Character";
import { getChampionDetails } from "@/lib/APIs";
import Image from "next/image";

const page = async ({ params }) => {
  const { id } = await params;
  const { lore, name, spells, title } = await getChampionDetails(id);
  const imgSrc = `https://ddragon.leagueoflegends.com/cdn/16.21.1/img/champion/${id}.png`;
  return (
    <>
      <Image
        loading="eager"
        width={200}
        height={200}
        className={`rounded-lg mx-auto my-3`}
        src={imgSrc}
        alt={``}
      />
      <div className={`text-2xl font-bold mx-auto`}>{name}</div>
      <div className={`text-xl mx-auto`}>{title}</div>
      <div
        className={`w-[80%] border border-sky-200 rounded-lg p-3 mx-auto my-3`}
      >
        {lore}
      </div>
      <ul className={`flex flex-col gap-1 items-center`}>
        {spells.map((x, i) => (
          <li key={i}>
            {i + 1}.{x.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default page;
