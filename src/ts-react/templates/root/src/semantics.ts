import type { H5PField, H5PBehaviour, H5PL10n } from "h5p-types";

export const semantics: Readonly<Array<H5PField | H5PBehaviour | H5PL10n>> = [
  {
    name: "name",
    type: "text",
    label: "What is your name?",
  },
];
