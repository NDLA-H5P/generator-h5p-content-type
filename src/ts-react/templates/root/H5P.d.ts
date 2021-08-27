import { H5PWrapper } from "./src/h5p/H5PWrapper";

export interface H5PObject {
  EventDispatcher: typeof EventDispatcher;
  <%= titlePascalCase %>: H5PWrapper;
}

declare class EventDispatcher {
  /**
   * Add new event listener.
   *
   * @throws {TypeError}
   *   listener must be a function
   * @param {string} type
   *   Event type
   * @param {H5P.EventCallback} listener
   *   Event listener
   * @param {Object} [thisArg]
   *   Optionally specify the this value when calling listener.
   */
  on: (type: string, listener: any, thisArg?: any) => void;
  /**
   * Add new event listener that will be fired only once.
   *
   * @throws {TypeError}
   *   listener must be a function
   * @param {string} type
   *   Event type
   * @param {H5P.EventCallback} listener
   *   Event listener
   * @param {Object} thisArg
   *   Optionally specify the this value when calling listener.
   */
  once: (type: string, listener: any, thisArg: any) => void;
  /**
   * Remove event listener.
   * If no listener is specified, all listeners will be removed.
   *
   * @throws {TypeError}
   *   listener must be a function
   * @param {string} type
   *   Event type
   * @param {H5P.EventCallback} listener
   *   Event listener
   */
  off: (type: string, listener: any) => void;
  /**
   * Dispatch event.
   *
   * @param {string|H5P.Event} event
   *   Event object or event type as string
   * @param {*} [eventData]
   *   Custom event data(used when event type as string is used as first
   *   argument).
   * @param {Object} [extras]
   * @param {boolean} [extras.bubbles]
   * @param {boolean} [extras.external]
   */
  trigger: (event: string | any, eventData?: any, extras?: {
    bubbles?: boolean;
    external?: boolean;
  }) => void;
}
