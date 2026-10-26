"use client";

import Item from "../components/Item";
import Button from "../components/Button";
import { useState } from "react";

const Menu = ({ menu }) => {
  const [select, setSelect] = useState({
    coffee: false,
    wine: false,
    beer: false,
  });

  const checkSelected = (num) => {
    setSelect((prev) => {
      return (prev = {
        coffee: !num || num === 1 ? true : false,
        wine: !num || num === 2 ? true : false,
        beer: !num || num === 3 ? true : false,
      });
    });
  };

  return (
    <>
      <div className={`flex justify-center items-center gap-3 mx-auto my-2`}>
        <Button
          btn="ALL 메뉴"
          func={() => {
            checkSelected(0);
          }}
        />
        |
        <Button
          btn="Coffees"
          func={() => {
            checkSelected(1);
          }}
        />
        |
        <Button
          btn="Wines"
          func={() => {
            checkSelected(2);
          }}
        />
        |
        <Button
          btn="Beers"
          func={() => {
            checkSelected(3);
          }}
        />
      </div>
      <section className={`grid grid-cols-3`}>
        {select.coffee &&
          menu[0].map((x, i) => {
            return (
              <Item
                image={x.image}
                title={[x.title, x.wine, x.name].find((y) => y !== undefined)}
                desc={[x.description, x.winery].find((y) => y !== undefined)}
                key={i}
              />
            );
          })}
        {select.wine &&
          menu[1].map((x, i) => {
            return (
              <Item
                image={x.image}
                title={[x.title, x.wine, x.name].find((y) => y !== undefined)}
                desc={[x.description, x.winery].find((y) => y !== undefined)}
                key={i}
              />
            );
          })}
        {select.beer &&
          menu[2].map((x, i) => {
            return (
              <Item
                image={x.image}
                title={[x.title, x.wine, x.name].find((y) => y !== undefined)}
                desc={[x.description, x.winery].find((y) => y !== undefined)}
                key={i}
              />
            );
          })}
      </section>
    </>
  );
};

export default Menu;
