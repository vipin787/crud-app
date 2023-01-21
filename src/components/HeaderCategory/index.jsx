import React from "react";
import { Navigation } from "../../constants";

const HeaderCategory = () => {
  return (
    <div className="w-full shadow-md h-28 flex items-center justify-center">
      <ul className="flex gap-x-12 justify-center items-center">
        {Navigation.headerCategory.map((item) => (
          <li
            key={item.id}
            className="flex flex-col justify-center items-center"
          >
            <img src={item.image} alt={item.image} width={64} height={64} />
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderCategory;
