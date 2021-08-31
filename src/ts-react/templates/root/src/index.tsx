import { H5P<% if (isEditor) { %>Editor<% } %> } from "./h5p/H5P.util";
import { H5PWrapper } from "./h5p/H5PWrapper";
import "./styles.css";
import "./styles.scss";

H5P<% if (isEditor) { %>Editor<% } %>.<%= titlePascalCase %> = H5PWrapper;
