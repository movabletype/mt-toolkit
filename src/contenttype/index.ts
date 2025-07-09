export { default as ContentFieldOption } from "./elements/ContentFieldOption.svelte";
export { default as ContentFieldOptionGroup } from "./elements/ContentFieldOptionGroup.svelte";
export * from "../@types/contenttype";

import ContentTypeEditorClass from "./ContentTypeEditor";
declare global {
  const ContentTypeEditor: typeof ContentTypeEditorClass;
}
