import type { H5PFieldText, IH5PWidget } from "h5p-types";
import { H5PWidget } from "h5p-utils";
import * as React from "react";
import { createRoot } from "react-dom/client";
import { App } from "../App";

type Field = H5PFieldText;

export class H5PWrapper extends H5PWidget<Field> implements IH5PWidget {
  appendTo($container: JQuery<HTMLElement>): void {
    const containerElement = $container.get(0);
    if (!containerElement) {
      console.error(
        "Found no containing element to attach `h5p-<%= titleKebabCase %>` to.",
      );
      return;
    }

    const adjective = this.params ?? "<%= superb %>";

    containerElement.appendChild(this.wrapper);
    containerElement.classList.add("h5p-<%= titleKebabCase %>");

    const root = createRoot(this.wrapper);
    root.render(<App adjective={adjective} />);
  }

  validate(): boolean {
    return true;
  }

  remove(): void {}
}
