import hljs from "highlight.js";

const THEME_STORAGE_KEY = "themeStorageKey";

async function main() {
  const preTag =
    document.querySelector<HTMLElement>("body > pre:only-child") ||
    document.querySelector<HTMLElement>("body > pre:has(+ div)"); // match pages with "pretty-print" banner
  if (!preTag) {
    return;
  }

  // get theme name
  const storageValuePair = await chrome.storage.local.get([THEME_STORAGE_KEY]);
  if (typeof storageValuePair[THEME_STORAGE_KEY] !== "string") {
    console.log(typeof storageValuePair[THEME_STORAGE_KEY]);
    return;
  }
  const theme = storageValuePair[THEME_STORAGE_KEY];
  const cssURL = `vendor/${theme}.min.css`;

  // create <link> elt
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = chrome.runtime.getURL(cssURL);

  // insert <link> elt in document
  const head = document.getElementsByTagName("head")[0];
  head.appendChild(link);

  hljs.highlightElement(preTag);

  // add background color
  const body = document.getElementsByTagName("body")[0];
  body.classList.add("hljs"); // color background
}

main();
