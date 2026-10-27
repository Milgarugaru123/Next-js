import axios from "axios";
// import Suspense from "axios";

const getIcedCoffee = async () => {
  "use cache";
  try {
    const data = await axios.get("https://api.sampleapis.com/coffee/iced");
    return data.data;
  } catch (err) {
    console.error(err);
  } finally {
    console.log(`아이스커피 배달 완료`);
  }
};

const Home = async () => {
  const coffees = await getIcedCoffee();

  return (
    <>
      next.js 공부
      {/* <Suspense> */}
      <div className={`grid grid-cols-3 gap-5 m-10`}>
        {Array(coffees.length)
          .fill(0)
          .map((x, i) => {
            return (
              <div className={`w-fit h-fit flex flex-col gap-2`} key={i}>
                <img src={coffees[i].image} alt="img" className={`w-50 h-50`} />
                <div>{coffees[i].title}</div>
              </div>
            );
          })}
      </div>
      {/* </Suspense> */}
    </>
  );
};

export default Home;
