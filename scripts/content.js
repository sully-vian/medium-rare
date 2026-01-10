(() => {
    const preTag =
        document.querySelector("body > pre:only-child") ||
        document.querySelector("body > pre:has(+ div)"); // match pages with "pretty-print" banner
    if (!preTag) {
        return;
    }
    console.log(preTag);
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = chrome.runtime.getURL("vendor/monokai.min.css");
    const head = document.getElementsByTagName("head")[0];
    head.appendChild(link);

    hljs.highlightElement(preTag);
    const body = document.querySelector("body");
    body.classList.add("hljs"); // color background
})();
