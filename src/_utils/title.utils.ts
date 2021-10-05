import { pascalCase, paramCase, camelCase } from "change-case";

export function createTitles(
  title: string
): {
  titlePascalCase: string;
  titleKebabCase: string;
  titleCamelCase: string;
} {
  return {
    titlePascalCase: pascalCase(title),
    titleKebabCase: paramCase(title),
    titleCamelCase: camelCase(title)
  };
}
