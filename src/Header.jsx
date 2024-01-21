import React from "react";

import { useStore } from "store/store";

export default () => {
  const { count, clear } = useStore();
  return (
    <header className="bg-blue-700 text-white font-bold text-3xl p-5 flex">
      <div className="flex-grow">Awesome Dark Blue Header</div>
      <div>
        {count}
        <button onClick={clear}>Clear Cart</button>
      </div>
    </header>
  );
};
