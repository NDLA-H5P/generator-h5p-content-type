/* eslint-disable @typescript-eslint/no-explicit-any */
import { H5PObject<% if (isEditor) { %>, H5PEditorObject <% } %> } from "h5p-types";
<% if (isEditor) { %>import type { libraryStrings } from "../../language/en.json";<% } %>

export const H5P: H5PObject = (window as any).H5P ?? {};
<% if (isEditor) { %>export const H5PEditor: H5PEditorObject = (window as any).H5PEditor ?? {};
export const t: (
  key: keyof typeof libraryStrings,
  vars?: Record<string, string> | undefined,
) => string = H5PEditor.t.bind(null, "H5PEditor.<%= titlePascalCase %>");<% } %>
