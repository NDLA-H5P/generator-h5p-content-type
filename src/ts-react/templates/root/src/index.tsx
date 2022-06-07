<% if (isEditor) { %>import { registerWidget } from "h5p-utils";<% } else { %>import { registerContentType } from "h5p-utils";<% } %>
import { H5PWrapper } from "./h5p/H5PWrapper";
import "./styles.scss";

<% if (isEditor) { %>registerWidget("<%= titlePascalCase %>", "<%= titleCamelCase %>", H5PWrapper);<% }
else { %>registerContentType("<%= titlePascalCase %>", H5PWrapper);<% } %>
