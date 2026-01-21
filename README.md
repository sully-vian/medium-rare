# Chrome Highlight

A simple extension to highlight raw code in chrome.

![](./assets/screenshot.png)

## TODO

- [x] Dynamic CSS loading with respect to the selected theme
- [x] Download or link [all supported themes](https://github.com/highlightjs/highlight.js/tree/main/src/styles)
- [ ] Pretty popup selection
- [x] Build step that fetches highlight.js
    - All themes are available on [npm](https://www.npmjs.com/package/highlight.js?activeTab=readme) and can be fetched at build time.
- [ ] Popup should automatically list all themes
    - Either invoke React (scary) or use js script to modify dom of `popup.html`

## Sources

Read from [Google's examples](https://github.com/GoogleChrome/chrome-extensions-samples)

