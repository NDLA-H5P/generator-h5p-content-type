import * as React from "react";

export type AppProps = {
  adjective: string;
};

const App: React.FC<AppProps> = ({ adjective }) => {
  return (
    <>
      <h1>Hi, you&apos;re {adjective}</h1>
    </>
  );
}

export default App;
