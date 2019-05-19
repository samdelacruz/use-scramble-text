import React from "react";

import { useScrambleText } from "use-scramble-text";

const App = () => {
  const example = useScrambleText(`Lorem ipsum dolor sit.`);
  return <div>{example}</div>;
};
export default App;
