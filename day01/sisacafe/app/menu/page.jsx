import Menu from "./Menu";

const getIcedCoffee = async () => {
  const res = await fetch("https://api.sampleapis.com/coffee/iced", {
    next: { revalidate: 3600 },
  });
  return res.json();
};
const getWine = async () => {
  const res = await fetch("https://api.sampleapis.com/wines/reds", {
    next: { revalidate: 3600 },
  });
  return res.json();
};
const getBeer = async () => {
  const res = await fetch("https://api.sampleapis.com/beers/stouts", {
    next: { revalidate: 3600 },
  });
  return res.json();
};

const page = async () => {
  const coffees = await getIcedCoffee();
  const wines = await getWine();
  const beers = await getBeer();

  console.log(coffees);
  console.log(wines);
  console.log(beers);

  return (
    <>
      <Menu menu={[coffees, wines, beers]} />
    </>
  );
};

export default page;
