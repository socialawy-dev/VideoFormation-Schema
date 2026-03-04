function getFilePath(hashStr) {
    const hash = hashStr.slice(1);
    if (!hash) return '/docs/README.md';

    // Security: Prevent directory traversal and external URLs
    if (hash.includes('..') || hash.includes('//') || hash.includes(':')) {
        console.warn('Invalid file path detected');
        return '/docs/README.md';
    }

    // Ensure path starts with a slash
    return hash.startsWith('/') ? hash : '/' + hash;
}

console.log("Empty:", getFilePath(""));
console.log("Safe:", getFilePath("#/docs/README.md"));
console.log("Safe no slash:", getFilePath("#docs/README.md"));
console.log("XSS:", getFilePath("#javascript:alert(1)"));
console.log("External:", getFilePath("#https://evil.com"));
console.log("Traversal:", getFilePath("#../../etc/passwd"));
