import * as React from "react";
import type { IH5PContentType } from "h5p-types";
import { createRoot } from "react-dom/client";
import { App } from "../App";
import { H5PContentType } from "h5p-utils";

type Params = {
  adjective: string;
};

export class H5PWrapper
  extends H5PContentType<Params>
  implements IH5PContentType
{
  attach($container: JQuery<HTMLElement>): void {
    const containerElement = $container.get(0);
    if (!containerElement) {
      console.error(
        "Found no containing element to attach `h5p-<%= titleKebabCase %>` to.",
      );
      return;
    }

    const { adjective } = this.params ?? "<%= superb %>";

    containerElement.appendChild(this.wrapper);
    containerElement.classList.add("h5p-<%= titleKebabCase %>");

    const root = createRoot(this.wrapper);
    root.render(<App adjective={adjective} />);
  }
}
