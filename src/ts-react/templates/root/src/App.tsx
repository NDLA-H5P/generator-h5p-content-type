import * as React from "react";
import { hot } from "react-hot-loader/root";

export type AppProps = {
  adjective: string;
};

const App: React.FC<AppProps> = ({ adjective }) => {
  return (
    <>
      <h1>Hi, you're {adjective}</h1>
    </>
  );
}

export default hot(App);
