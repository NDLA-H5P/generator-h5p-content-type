import * as React from "react";
import type { IH5PWidget } from "h5p-types";
import * as ReactDOM from "react-dom";
import App from "../App";
import { H5P } from "./H5P.util";

export class H5PWrapper extends H5P.EventDispatcher implements IH5PWidget {
  private wrapper: HTMLElement;

  constructor(
    parent: JQuery<HTMLElement>,
    field: unknown,
    params: unknown,
    setValue: (value: unknown) => void
  ) {
    super();
    this.wrapper = H5PWrapper.createWrapperElement();

    ReactDOM.render(<App adjective="<%= superb %>" />, this.wrapper);
  }

  appendTo($container: JQuery<HTMLElement>): void {
    const containerElement = $container.get(0);
    if (!containerElement) {
      console.error(
        "Found no containing element to attach `h5p-<%= titleKebabCase %>` to.",
      );
      return;
    }

    containerElement.appendChild(this.wrapper);
    containerElement.classList.add("h5p-<%= titleKebabCase %>");
  }

  validate(): boolean {
    return true;
  }

  remove(): void {}

  private static createWrapperElement(): HTMLDivElement {
    return document.createElement("div");
  }
}
