import * as React from "react";
import { hot } from "react-hot-loader/root";

type Props = {
  adjective: string;
}

class App extends React.Component<Props> {
  render() {
    const { adjective } = this.props;
    return (
      <>
        <h1>Hi, you're {adjective}</h1>
      </>
    );
  }
}

export default hot(App);
