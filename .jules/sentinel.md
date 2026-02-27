## 2026-02-27 - [Stored XSS in Viewer]
**Vulnerability:** The `viewer.html` was directly injecting the output of `marked.parse()` into the DOM using `innerHTML`. This allowed execution of arbitrary JavaScript via XSS payloads in markdown files.
**Learning:** Newer versions of `marked` do not sanitize HTML by default. This change in library behavior created a significant security gap.
**Prevention:** Always use a dedicated sanitization library like `DOMPurify` before injecting HTML content into the DOM, especially when the source is potentially untrusted (like markdown files).
