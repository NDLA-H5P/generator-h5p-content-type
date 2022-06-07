import { H5PEditor } from "h5p-utils";
import type { libraryStrings } from "../../language/en.json";

export const t: (
  key: keyof typeof libraryStrings,
  vars?: Record<string, string> | undefined,
) => string = H5PEditor.t.bind(null, "H5PEditor.<%= titlePascalCase %>");
