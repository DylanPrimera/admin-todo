"use client";

import { setCookie } from "cookies-next";
import { useState } from "react";

// https://tailwindcomponents.com/component/radio-buttons-1

interface Props {
  currentTab: number;
  tabOptions: number[];
}

export const TabBar = ({
  currentTab = 1,
  tabOptions = [1, 2, 3, 4],
}: Partial<Props> ) => {
  const [selected, setSelected] = useState(currentTab);

  const onTabSelected = (tab: number) => {
    setSelected(tab);
    setCookie('selectedTab',tab.toString())
  };

  return (
    <div
      className={`grid ${
        "grid-cols-" + tabOptions.length
      } w-full space-x-2 rounded-xl bg-gray-200 p-2 
       `}
    >
      {tabOptions.map((tab, index) => (
        <div key={tab}>
          <input
            type="radio"
            id={tab.toString()}
            checked={selected === tab}
            onChange={() => {}}
            className="peer hidden"
          />
          <label
            onClick={() => onTabSelected(tab)}
            className="block cursor-pointer select-none rounded-xl p-2 text-center 
          transition-all peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
          >
            {index + 1}
          </label>
        </div>
      ))}
    </div>
  );
};
