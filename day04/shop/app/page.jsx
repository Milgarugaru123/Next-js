import Board from "@/components/Board";
import Category from "@/components/Category";
import Character from "@/components/Character";
import { getChampions } from "@/lib/APIs";
import { toCategorize, toChampionList } from "@/lib/utils";

const Home = async () => {
  const data = await getChampions();
  const champions = toChampionList(data);
  const positions = toCategorize(data);
  return (
    <>
      <Board position={positions} champion={champions} />
    </>
  );
};

export default Home;
