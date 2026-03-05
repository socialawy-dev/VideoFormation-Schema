# Sentinel Learnings
## 2026-03-05 - [DOM XSS and Path Traversal in viewer.html]
**Vulnerability:** The viewer.html parsed user-supplied URLs from window.location.hash without checking for path traversal or open redirects. It also injected rendered Markdown straight into the DOM without sanitization, leading to XSS. Finally, fallback rendering injected unsanitized file extensions.
**Learning:** Never trust client-side routing based on URL fragments, especially when using the fragment to construct network requests (fetch) or innerHTML.
**Prevention:** Validate and sanitize the URL hash to block path traversal and absolute URLs. Wrap innerHTML assignments containing user-supplied content with a sanitizer like DOMPurify. Escape fallback variable strings.
