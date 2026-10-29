export const toChampionList = (data) =>
  Object.values(data).map((x) => ({ id: x.id, name: x.name, tags: x.tags }));

export const toCategorize = (data) => [
  `All`,
  ...new Set(
    Object.values(data)
      .map((x) => x.tags)
      .flat(),
  ),
];
