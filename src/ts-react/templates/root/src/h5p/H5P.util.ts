import { H5PObject<% if (isEditor) { %>, H5PEditorObject <% } %> } from "../../H5P";

export const H5P = ((window as any).H5P as H5PObject);
<% if (isEditor) { %>export const H5PEditor = ((window as any).H5P as H5PEditorObject); <% } %>
