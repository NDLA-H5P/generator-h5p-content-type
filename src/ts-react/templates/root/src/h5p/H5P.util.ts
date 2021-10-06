/* eslint-disable @typescript-eslint/no-explicit-any */
import { H5PObject<% if (isEditor) { %>, H5PEditorObject <% } %> } from "../../H5P";

export const H5P: H5PObject = (window as any).H5P ?? {};
<% if (isEditor) { %>export const H5PEditor: H5PEditorObject = (window as any).H5PEditor ?? {};<% } %>
