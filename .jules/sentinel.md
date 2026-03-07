## 2026-03-07 - [Client-Side Routing Vulnerability]
**Vulnerability:** DOM XSS, Path Traversal, Open Redirect, and SSRF in static site routing. `viewer.html` directly used unsanitized `window.location.hash` to fetch local files, parsed it to markdown via `marked`, and assigned the output to `innerHTML`. It also did not validate against path traversal (`..`) or external URLs (`://`).
**Learning:** Static sites heavily reliant on JS-based routing (especially those fetching documents via URLs or hashes) are incredibly prone to Path Traversal and DOM XSS vulnerabilities if user input is trusted implicitly.
**Prevention:**
1. Always decode and strictly validate any input originating from `window.location.hash` against path traversal (`..`) and absolute/external protocols (`http://`, `//`).
2. Never trust `marked` (or any markdown parser) output without sanitization. Use `DOMPurify.sanitize()` before injecting dynamic HTML strings into the DOM via `innerHTML`.
