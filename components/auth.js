import React from "react";

import { useStore } from "store/store";

const Auth = () => {
  const { count, increment } = useStore();
  return (
    <div>
      <div>Count: {count}</div>
      Hi I'm Auth
      <button onClick={increment}>++</button>
    </div>
  );
};

export default Auth;
