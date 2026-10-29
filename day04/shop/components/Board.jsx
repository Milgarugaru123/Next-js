"use client";

import { useState } from "react";
import Category from "./Category";
import Character from "./Character";

const Board = ({ position, champion }) => {
  const [selected, setSelected] = useState(`All`);

  return (
    <>
      <div className={`sticky flex items-center max-w-6xl gap-1 mx-auto`}>
        {position.map((x) => (
          <Category
            key={x}
            position={x}
            func={() => setSelected((prev) => x)}
            selected={selected == x}
          />
        ))}
      </div>
      <section className={`grid grid-cols-4 max-w-6xl gap-3 mx-auto`}>
        {champion
          .filter((x) =>
            selected == `All` ? x : x.tags.some((y) => y == selected),
          )
          .map((x) => (
            <Character key={x.id} {...x} />
          ))}
      </section>
    </>
  );
};

export default Board;
