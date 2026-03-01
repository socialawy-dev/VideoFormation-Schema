## 2026-03-01 - DOM-based XSS in Markdown Viewer
**Vulnerability:** The `viewer.html` script used `marked.parse(content)` to render Markdown and assigned the resulting HTML string directly to `contentDiv.innerHTML` without sanitization. This allowed any malicious script or payload embedded in the Markdown file (e.g. `<img src="x" onerror="alert(1)">`) to execute in the context of the user's browser.
**Learning:** Client-side Markdown rendering is a common source of XSS. Since Markdown supports inline HTML, any library that converts Markdown to HTML must have its output sanitized before insertion into the DOM.
**Prevention:** Always use a robust HTML sanitization library, such as `DOMPurify`, to sanitize the output of Markdown parsers (like `marked`) before assigning it to `innerHTML`.
