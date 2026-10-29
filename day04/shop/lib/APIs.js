export const getChampions = async () => {
  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/16.21.1/data/ko_KR/champion.json`,
  );
  const { data } = await res.json();
  return data;
};

export const getChampionDetails = async (id) => {
  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/16.21.1/data/ko_KR/champion/${id}.json`,
  );
  const { data } = await res.json();
  const { lore, name, spells, title } = await Object.values(data)[0];
  return { lore, name, spells, title };
};
