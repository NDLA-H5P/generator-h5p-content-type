declare type H5PContentTypeObject = any;

declare interface H5PEventDispatcher {
  call(contentTypeObject: H5PContentTypeObject): void;
  on(eventName: string, callback: (event: any) => void): void;
}

declare interface H5PObject {
  TopicMap: typeof import("/Users/sindreboyum/dev/tietoevry/ndla-h5p/h5p-topic-map/src/h5p/H5PWrapper").H5PWrapper;
  EventDispatcher: H5PEventDispatcher;
}
