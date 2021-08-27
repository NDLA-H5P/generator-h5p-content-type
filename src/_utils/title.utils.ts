import { pascalCase, paramCase } from "change-case";

export function createTitles(title: string): { titlePascalCase: string, titleKebabCase: string; } {
  return {
    titlePascalCase: pascalCase(title),
    titleKebabCase: paramCase(title)
  };
}
